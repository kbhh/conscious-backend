import Service from '../common/Service';
import bcrypt from "bcryptjs";
const jwt = require('jsonwebtoken');

class systemAdminService extends Service {
  constructor(model) {
    super(model);
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
        let record = await this.insert(body);
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
      const match = await bcrypt.compare(body.password, userExists.record.password);
      if (match) {
        const payload = {
          id: userExists.record._id,
          role: userExists.record.role
        };
        console.log(payload)
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
          role: 'Admin'
        }

      } else {
        return {
          error: true,
          message: 'Credentials do not match our records',
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

}

export default systemAdminService;
