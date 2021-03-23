import mongoose, { Schema } from "mongoose";

class RegionalEducationOfficial {
  init() {
    const schema = new Schema({
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
      userId: {
        type: String,
        unique: true
      },
      role: {
        type: String,
        enum: ['Registrar','Curriculum Developer', 'Registrar Verifier', 'Content Developer', 'Content Verifier', 'School Registrar', 'School Verifier']
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
      courses: [ //courses he/she assigned to develop content. This is mainly for content developers and verifiers
        {
          id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
          }
        }

      ],
      description: String //Short profile description 
    }, { timestamps: true });
    mongoose.model("RegionalEducationOfficial", schema);
  }

  getModel() {
    this.init();
    return mongoose.model("RegionalEducationOfficial");
  }
}

export default RegionalEducationOfficial;