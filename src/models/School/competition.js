import mongoose from "mongoose";
//modified model
class Competition {
  init() {
      const CourseSchema = new mongoose.Schema({
        compname:String,
        comp:String,
        
        academicYear:{
           year:Number,
           grade:[{ //School level competion 
            name:String,
            section:[{ //Class level competition 
              name:String,
              competitionDate:String,
              startDate:String,
              startTime:String,
              dueDate:String,
              endTime:String,
              students:[{
                studentId:{
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "StudentProfile"
                }, 
                result:Number
              }],
              
              Courses:[{//Course based Competition
                courses:[{
                  courseId:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Course"
                }}],
               
                markSetting:{
                  easy:Number,
                  medium:Number,
                  hard:Number
                },
                test:
                  [{
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "CourseContent"
                  }],
                
              },
              ],
              rewards:[{ //May be we can make this using one collection
                name:String,
                //type:String
                //enum:['Grade Rank','Competion'],
                description:String,
              }],
              }],
          }]
        }
              
      }, { timestamps: true, collection: 'Competition' });

      mongoose.model("Competition", CourseSchema);
      }

  getModel() {
  this.init();
  return mongoose.model("Competition");
  }

}

export default Competition;