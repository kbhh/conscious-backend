import mongoose from "mongoose";
import bcrypt from "bcryptjs";

class SchoolAdmin {
  init() {
    const schema = new mongoose.Schema({
      fullName: {
        type: String
      },
      // userId: {
      //   type: String
      // },
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
      role: {
        type: String,
        default: 'REB Admin'
      },
      status: {
        type: String,
        default: "Pending"
      },
      localFullName: String,
      gender: String,
      birthdate: Date,
      organizationalemail: String,
      address: String,
      picture: String,//Path to the picture where the image is stored 
      description: String //Short profile description 
    }, { timestamps: true });

    schema.pre('save', async function (next) {
      const user = this
      if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
      }
      next()
    })

    mongoose.model("SchoolAdmin", schema);
  }

  getModel() {
    this.init();
    return mongoose.model("SchoolAdmin");
  }

}

export default SchoolAdmin;