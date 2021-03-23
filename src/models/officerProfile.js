import mongoose from "mongoose";

class OfficerProfile {
    init() {
      const UserSchema = new mongoose.Schema({
        localfirstName: String,
        locallastName: String,
        gender: String,
        birthdate:Date,
        organizationalemail:String,
        role: {
          type: String,
          enum:['registrar', 'manager']
        },
        status: {
          type: String,
          default: "Pending"
      },
        address:String,
        picture:String,//Path to the picture where the image is stored 
        institutionId: [ //on which organization he is working, if status is active then that means he is in that organization
          {
            id: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "School"
            },
            departmentId:String,
            status:String //
          }
        ],
        description:String //Short profile description 
      }, { timestamps: true, collection: 'OfficerProfile' });
              
      mongoose.model("OfficerProfile", schema);
      
      }
      

  getModel() {
  this.init();
  return mongoose.model("OfficerProfile");
  }

}

export default OfficerProfile;