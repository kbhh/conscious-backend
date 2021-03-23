//var mongoose = require("mongoose");

import mongoose, { Schema } from "mongoose";

class InstructorModel {

  initSchema() {
    const schema = new Schema({
      fullName: {
        type: String
        },
        email               
        : {
            type: String,
            unique: true,
            match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        },
        status: {
          type: String,
          default: "Pending"
      },
        mobileNumber: {
            type: String,
            unique: true
        },                        
        password: {
            type: String
        },
        localFullName: String,
        gender: String,
        birthdate:Date,
        organizationalemail:String,
        address:String,
        picture:String,//Path to the picture where the image is stored 
        Applications: [ //on which organization he is working, if status is active then that means he is in that organization
          {
            courseid: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "RegionalCurriculum"
            },
            description:String //Short profile description 
          }
        ],
        description:String //Short profile description 
    }, { timestamps: true });
    mongoose.model("ThirdPartyProfile", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("ThirdPartyProfile");
  }
}

export default InstructorModel;



