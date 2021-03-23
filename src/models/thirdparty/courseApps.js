import mongoose from "mongoose";

class CourseApps {
  init() {
    const dbSchema = new mongoose.Schema({
      name: String,
      appType:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "AppType"
        },
      rating:String,
      courses: [ //courses the app supports 
          {
            id: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Course"
            }
          }
        ],
      logo:String, //Image
      creator: String,
      description: String,
  }, { timestamps: true, collection: 'CourseApps' });
          
    mongoose.model("CourseApps", schema);
    
    }


  getModel() {
  this.init();
  return mongoose.model("CourseApps");
  }

}

export default CourseApps;
