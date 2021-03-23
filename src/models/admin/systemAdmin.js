import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

class systemAdmin {
  init() {
    var schema = new Schema({
      fullName: {
        type: String
      },
      email: {
        type: String,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      },
      mobileNumber: {
        type: String,
        unique: true
      },
      password: {
        type: String
      },
      profileImg: String,
      role: {
        type: String,
        default: 'Admin'
      },
      status: {
        type: String,
        default: "Pending"
      },
      comment: [{
        type: String,
        default: ''
      }],
      token: {
        type: String,
        default: ''
      }
    }, { timestamps: true });

    schema.pre('save', async function (next) {
      const user = this
      if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
      }
      next()
    })

    schema.methods.generateToken = async function () {
      const user = this
      const token = jwt.sign({ _id: user._id }, process.env.MY_SECRET)
      //user.token =  user.tokens.concat({token})
      user.token = token
      await user.save()
      return token
    }

    schema.statics.findByCredentials = async (personalemail, password) => {
      const user = await Account.findOne({ personalemail })
      if (!user) {
        console.log(' find by credential ' + personalemail + ' ' + password)
        throw new Error()
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password)
      if (!isPasswordMatch) {
        throw new Error()
      }
      return user
      // if(user.status==="Verified")
      // {
      //     const isPasswordMatch = await bcrypt.compareSync(password, user.password)
      //     if (!isPasswordMatch) {
      //         throw new Error()
      //     }
      //     return user
      // }
      // else if (user.status ==="Unverified")
      // {
      //     return "Your Account is not yet verified, please give us a moment or call on 0931545451"
      // }
      // else
      // {
      //     return "You are suspended"
      // }
    }
    const Account = mongoose.model("SystemAdmin", schema);
  }

  getModel() {
    this.init();
    return mongoose.model("SystemAdmin");
  }

}

export default systemAdmin;