import Service from '../common/Service';
import bcrypt from "bcryptjs";
const jwt = require('jsonwebtoken');
import multer from "multer";
import { imageValidator } from "../../validators/Joi/fileValidator";
class RegionalOfficialsService extends Service {
  constructor(model) {
    super(model);
  }


  //password change 
  async changePassword(id, body) {
    //get the user
    let message = ''
    let user = await this.getOne({ _id: id })
    if (user.err) {
      return {
        error: true,
        message: 'User does not ',
        statusCode: 200,
        record: null
      }
    }
    // check password coming from the req to password stored on db
    const isMatched = await bcrypt.compare(body.oldpassword, user.record.password);
    if (!isMatched) {
      return {
        error: true,
        message: 'Invalid password',
        statusCode: 200,
        record: null
      }
    }

    // if  new password is equal to the new password we don't need to update it 
    if (body.oldpassword === body.newpassword) {
      return {
        error: true,
        message: 'You have used this password before',
        statusCode: 200,
        record: null
      }
    }
    // update password of a user
    const data = { password: await bcrypt.hashSync(body.newpassword, 8) }
    try {
      let result = await this.update(id, data);
      if (result.err) {
        return {
          error: true,
          message: 'Error while changing Password',
          statusCode: 200,
          record: null
        }
      }

      return {
        error: false,
        message: 'Password Update Successfully ',
        statusCode: 200,
        record: result.record
      }
    } catch (err) {
      return {
        error: true,
        message: error,
        statusCode: 500,
        record: null
      }

    }

  }


  //Account Update
  async updateAccount(id, body) {
    try {
      let message = ''
      let phoneNumber = body.mobileNumber;
      let email = body.email
      let userId = body.userId
      let phoneExist = await this.getByField({ mobileNumber: phoneNumber })

      if (phoneExist.record) {
        if ((phoneExist.record.length == 1) && (phoneExist.record[0]._id == id)) {

        } else {
          message = "phone Number"

        }
      }
      let emailExist = await this.getByField({ email: email })
      if (emailExist.record) {
        if ((emailExist.record.length == 1) && (emailExist.record[0]._id == id)) {
        } else {
          if (message === "") {
            message = "Email address is"
          } else {
            message = message + ' and Email are '
          }

        }
      }
      let userIdExist = await this.getByField({ userId: userId })
      if (userIdExist.record) {
        if ((userIdExist.record.length == 1) && (userIdExist.record[0]._id == id)) {

        } else {
          if (message === "") {
            message = "UserId is"
          } else {
            message = message + ' and UserId are '
          }

        }
      }
      if (message !== '') {
        message = message + ' already taken, please Fill again '
        return {
          error: true,
          message: message,
          statusCode: 200,
          record: null
        }

      } else {
        let record = await this.update(id, body);
        console.log('result from insert' + JSON.stringify(record));
        return record
      }


    } catch (err) {
      console.log(err);

    }

  }
  async signup(body) {
    try {
      let message = ''
      let phoneNumber = body.mobileNumber;
      let phoneExist = await this.getByField({ mobileNumber: phoneNumber })
      if (phoneExist.record) {
        message = 'Phone number'
      }
      let email = body.email
      let emailExists = await this.getByField({ email: email })
      if (emailExists.record) {
        if (message === '') {
          message = ' Email is '
        }
        else {
          message = message + ' and Email are '
        }

      }
      if (message !== '') {
        message = message + ' already taken, please login or reset your account '
        return {
          error: true,
          message: message,
          statusCode: 200,
          record: null
        }

      }
      else {


        body.password = await bcrypt.hashSync(body.password, 8)
        let record = await this.insert(body);
        console.log('result from insert' + JSON.stringify(record));
        return record
      }
    } catch (errormessage) {
      return {
        error: true,
        message: errormessage,
        statusCode: 400,
        record: null
      }
    }
  }
  async login(body) {
    try {
      let email = body.email
      let userExists = await this.getOne({ email: email })
      if (userExists.err) {
        return {
          error: true,
          message: 'Credentials do not match our records',
          statusCode: 200,
          record: null
        }
      }
      if (userExists.record.status === 'Verified' || userExists.record.status === 'Reset') {
        const match = await bcrypt.compare(body.password, userExists.record.password);
        if (match) {
          const payload = {
            id: userExists.record._id,
            role: userExists.record.role
          };

          const token = jwt.sign(
            payload,
            process.env.MY_SECRET,
            {
              expiresIn: '1h'
            });
          return {
            error: false,
            message: 'User loggedin successfully!',
            statusCode: 200,
            token: token,
            role: userExists.record.role
          }

        } else {
          return {
            error: true,
            message: 'Credentials do not match our records',
            statusCode: 200,
            record: null
          }
        }
      }
      else {
        return {
          error: true,
          message: 'Unverified or Suspended Account, Contact your Admin',
          statusCode: 200,
          record: null
        }
      }
    } catch (error) {
      console.log(error);
      return {
        error: true,
        message: error,
        statusCode: 500,
        record: null
      }
    }
  }
  async reset(body) {
    try {
      let email = body.email
      let mobileNumber = body.mobileNumber
      let userExists = await this.getOne({ email: email, mobileNumber: mobileNumber })
      if (userExists.err) {
        return {
          error: true,
          message: 'User does not exist',
          statusCode: 200,
          record: null
        }
      }
      if (userExists.record.status === 'Verified' || userExists.record.status === 'Reset') {
        let id = userExists._id
        let record = await this.update(id, { status: 'Reset' })
        return record
      }
      else {
        return {
          error: true,
          message: 'Unverified or Suspended Account, Contact your Admin',
          statusCode: 200,
          record: null
        }
      }
    } catch (error) {
      console.log(error);
      return {
        error: true,
        message: error,
        statusCode: 500,
        record: null
      }
    }
  }
  async adminUserSignup(req) {
    try {
      // let body=req.body
      // let message = ''
      // let phoneNumber = body.mobileNumber;
      // let phoneExist = await this.getByField({ mobileNumber: phoneNumber })
      // if (phoneExist.record) {
      //   message = 'Phone number'
      // }
      // let email = body.email
      // let emailExists = await this.getByField({ email: email })
      // if (emailExists.record) {
      //   if (message === '') {
      //     message = ' Email is '
      //   }
      //   else {
      //     message = message + ' and Email are '
      //   }

      // }
      // if (message !== '') {
      //   message = message + ' already taken, please login or reset your account '
      //   return {
      //     error: true,
      //     message: message,
      //     statusCode: 200,
      //     record: null
      //   }

      // }
      // else {
      //   body.password = await bcrypt.hashSync(body.password, 8)
        const storage = multer.diskStorage({
          destination: (req, file, cb) => {
              cb(null, 'uploads/img');                    
          },
          filename: (req, file, cb) => { 
              cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
          }
       }); 

      let upload = multer({ storage: storage, fileFilter: imageValidator }).single('profileImg');      
        upload(req, function(err) {         
        if (req.fileValidationError) {
          return {
            error: true,
            message: req.fileValidationError,
            statusCode: 200,
            record: null
          }
        }
        else if (!req.file) {
          return {
            error: true,
            message: 'Please select an image to upload',
            statusCode: 200,
            record: null
          }
        }
        else if (err) {
          return {
            error: true,
            message: err,
            statusCode: 200,
            record: null
          }
        } 
        const url = `${req.protocol}://${req.get('host')}/img/${req.file.filename}`
        console.log(url)
        //body.profileImg = url
        //let record = this.insert(body);
        //return record
      })
    } catch (errormessage) {
      return {
        error: true,
        message: errormessage,
        statusCode: 400,
        record: null
      }
    }
  }
  // async adminUserSignup(req) {
  //   try {
  //     let body=req.body
  //     let message = ''
  //     let phoneNumber = body.mobileNumber;
  //     let phoneExist = await this.getByField({ mobileNumber: phoneNumber })
  //     if (phoneExist.record) {
  //       message = 'Phone number'
  //     }
  //     let email = body.email
  //     let emailExists = await this.getByField({ email: email })
  //     if (emailExists.record) {
  //       if (message === '') {
  //         message = ' Email is '
  //       }
  //       else {
  //         message = message + ' and Email are '
  //       }

  //     }
  //     if (message !== '') {
  //       message = message + ' already taken, please login or reset your account '
  //       return {
  //         error: true,
  //         message: message,
  //         statusCode: 200,
  //         record: null
  //       }

  //     }
  //     else {
  //       body.password = await bcrypt.hashSync(body.password, 8)
  //       const storage = multer.diskStorage({
  //         destination: (cb) => {
  //             cb(null, 'uploads/img');                    
  //         },
  //         filename: (file, cb) => { 
  //             cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
  //         }
  //     }); 

  //     let upload = multer({ storage: storage, fileFilter: imageValidator }).single('profileImg');      
  //       upload(req, function(err) {         
  //       if (req.fileValidationError) {
  //         return {
  //           error: true,
  //           message: req.fileValidationError,
  //           statusCode: 200,
  //           record: null
  //         }
  //       }
  //       else if (!req.file) {
  //         return {
  //           error: true,
  //           message: 'Please select an image to upload',
  //           statusCode: 200,
  //           record: null
  //         }
  //       }
  //       else if (err) {
  //         return {
  //           error: true,
  //           message: err,
  //           statusCode: 200,
  //           record: null
  //         }
  //       } 
  //       const url = `${req.protocol}://${req.get('host')}/img/${req.file.filename}`
  //       body.profileImg = url
  //       let record = this.insert(body);
  //       return record
  //     })}
  //   } catch (errormessage) {
  //     return {
  //       error: true,
  //       message: errormessage,
  //       statusCode: 400,
  //       record: null
  //     }
  //   }
  // }
//   async updateProfileImg(req, res, next) {    
//     let id = req.headers.userid;  
//     const user = await userService.getById(id); 
//     if (!user.err)
//     {    

//         await Account.findByIdAndUpdate(id, res.locals.formData , { new: true }, (err, result) => {
//             if(err){ 
//                 return res.status(500).send(err);
//             } 
//             return res.status(200).send(result);
//         }); 
//     }
//     else
//     {
//         return res.status(400).send({ error:" You are doing something wrong"})
//     }     
// }
// async imageUpload(req, res, next) {          
//   try{            
//       const storage = multer.diskStorage({
//           destination: (req, file, cb) => {
//               cb(null, 'uploads/img');                    
//           },
//           filename: (req, file, cb) => { 
//               cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
//           }
//       }); 

//       let upload = multer({ storage: storage, fileFilter: imageValidator }).single('profileImg'); 
       
//       upload(req, res, function(err) {         
//           if (req.fileValidationError) {
//               return res.send(req.fileValidationError);
//           }
//           else if (!req.file) {
//               return res.send('Please select an image to upload');
//           }
//           else if (err instanceof multer.MulterError) {
//               return res.send(err);
//           }
//           else if (err) {
//               return res.send(err);
//           } 
//           const url = `${req.protocol}://${req.get('host')}/img/${req.file.filename}`
//           res.locals.formData =  req.body
//           res.locals.formData.profileImg = url
//           next();
//       });             
//   }catch(error) {
//       return error;
//   }       
// } 

}

export default RegionalOfficialsService;
