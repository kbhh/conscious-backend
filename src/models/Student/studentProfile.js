import mongoose from "mongoose";

class StudentProfile {
    init() {
      const UserSchema = new mongoose.Schema({
        fullName: {
          type: String
          },
          email               
          : {
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
          status: {
            type: String,
            default: "Pending"
        },
        localfirstName: String,
        locallastName: String,
        birthdate:Date,
        grade:String,
        gender: String,
        email:String,
        facebook:String,
        father:{
          fullname:String,
          photo:String,
          phoneNumber:String,
          email:String,
          office:String,
          address:String,
          username:String,
          password:String
        },
        mother:{
          fullname:String,
          photo:String,
          phoneNumber:String,
          email:String,
          office:String,
          address:String,
          username:String,
          password:String
        },
        address:String,
        photo:{
          primaryphoto:String,
          secondaryPhto:String,
          ternaryPhoto:String},//Path to the picture where the image is stored 
        school: [ //on which school he is attending, if status is active then that means he is in that organization
          {
            id: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "School"
            },
            grade:String,
            rewards:[{ //rewards gained by student 
              rewardType:String,
              reward:String
            }],
            departmentId:String,// natural, social
            status:String //
          }
        ],
        generalPreferences: [ 
          {
            prefenceType:String, // Font size, color, 
            preference:String,// 
            status:String //
          }
        ],
        defects: [ 
          {
            defect:
            {
              type:String, // Deaf, Blind, 
              enum:['Deaf', 'Blind']
            },
            status:
            {type:String,
              default:'Active'} //
          }
        ],
        coursePreferences: [ //on which school he is attending, if status is active then that means he is in that organization
          {
            courseid: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "SchoolCurriculum"
            },
            learningStyle:[{  
              type:String,//Theorist, prgmatist, activist, kinestitic
              score:Number,//30%Theorist, 40%Pgramatist, 20%activist
            }],
             
            prefenceType:String, //
            preference:String,// 
            status:String //
          }
        ],
        description:String //Short profile description 
      }, { timestamps: true, collection: 'StudentProfile' });
              
      mongoose.model("StudentProfile", schema);
      
    }


  getModel() {
  this.init();
  return mongoose.model("StudentProfile");
  }

}

export default StudentProfile;