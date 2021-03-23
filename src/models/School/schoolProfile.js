import mongoose from "mongoose";

class SchoolProfile {
  init() {
    const dbSchema = new mongoose.Schema({
      name: String,
      branch:[
        {
          name:String,
          website:String,
          region:String,
          city:String,
          specificAddress:String,//Tabya, road 
          status: String,
          phoneNumber: [
            {
              phoneNumber:String,
              status: String,
              type: Boolean //Primary, secondary
            }
          ],
          email: [
            {
              email:String,
              status: String,
              type: Boolean //Primary, secondary
            }
          ],
          socialmedia: [
            {
              type:String, //facebook, linkdin 
              name:String,
              status: String,
              type: Boolean //Primary, secondary
            }
          ],
          voip: [
            {
              phoneNumber:String,
              status: String,
              type: Boolean //Primary, secondary
            }
          ],
        }
      ],
      level:String,//Kg, KG-Elementary, KG-Highschool
      region:String,
      city:String,
      specificAddress:String, // headquarter tabiya, road  
      moto:String, 
      logo:String,
      description:String, //Short description
      ranking:String, //ranking by ministry of education 
      photo:String, 
      website: [
        {
          website:String,
          status: String,
        }
      ],
      phoneNumber: [
        {
          phoneNumber:String,
          status: String,
          type: Boolean //Primary, secondary
        }
      ],
      email: [
        {
          email:String,
          status: String,
          type: Boolean //Primary, secondary
        }
      ],
      socialmedia: [
        {
          type:String, //facebook, linkdin 
          name:String,
          status: String,
          type: Boolean //Primary, secondary
        }
      ],
      voip: [
        {
          phoneNumber:String,
          status: String,
          type: Boolean //Primary, secondary
        }
      ],
    
      
    }, { timestamps: true, collection: 'SchoolProfile' });
    
    mongoose.model("SchoolProfile", schema);
    }
    

  getModel() {
  this.init();
  return mongoose.model("SchoolProfile");
  }

}

export default SchoolProfile;