//var mongoose = require("mongoose");

import mongoose, { Schema } from "mongoose";

class InstructorModel {

  initSchema() {
    const schema = new Schema({
      fullName: {
        type: String
        },
        email: {
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
        localfirstName: String,
        locallastName: String,
        gender: String,
        birthdate:Date,
        organizationalemail:String,
        address:String,
        picture:String,//Path to the picture where the image is stored 
        school: [ //on which organization he is working, if status is active then that means he is in that organization
          {
            id: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "School"
            },
            departmentId:String,
            status:String, //,
            roles:[
             { 
               roleType:String,
               assignedSection:String
              }
            ]
          }
        ],
        courses: [ //courses he/she teaches 
          {
            assignedYear:Number,
            assignedSemester:Number,
            id: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Course"
            },
            classWall: [{
              wall:String,// instructor post
              postDate:Date,// Post that are longer than 30 days will be archived 
              commenter: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
              },
              inResponseTo: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
              },
              responses: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
              }],
            }]
          }
         
        ],
        description:String //Short profile description 
    }, { timestamps: true });
    mongoose.model("TeacherProfile", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("TeacherProfile");
  }
}

export default InstructorModel;



