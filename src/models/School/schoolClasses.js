import mongoose from "mongoose";

class SchoolClasses {
  init() {
    // things we neeed 
    //
    // 1 teacher-1 course
    const schoolClassSchema = new mongoose.Schema({
      shift:[{
        name:String,
        educationYear:Number,
        semester:Number,
        class:[{
          name:String, //5 
          section:[{
            section:String, //A
            students:[{
              studentId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "StudentProfile"
              },
            }],
            courses:
            [{
              courseId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Course"
              },
              workingpaths:[{
                workingPathId:{
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "workingPaths"
                },
                startDate:Date,
                startTime:String,
                dueDate:Date,
                endTime:String
              ,
              cp:{
                cpId:{type: mongoose.Schema.Types.ObjectId,
                ref: "workingPaths"},
                startDate:Date,
                startTime:String,
                dueDate:Date,
                endTime:String
              },
              assignment:{
                assignmentId:{type: mongoose.Schema.Types.ObjectId,
                ref: "CourseContent"},
                startDate:Date,
                startTime:String,
                dueDate:Date,
                endTime:String
              }, 

            },
            ],
            rewards:[{ //May be we can make this using one collection
              type:String,
              //enum:['Grade Rank','Competion'],
              assessmentType:{
                type:String,
                result:String //A for example if it is grade, 400 for example for coins, 50 for example for marks 
              },
              description:String,
            }],
            }],
            teachers:
            [{
              userId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
              },
              status:String //Active, inactive
            }],
          }],
         
          
          courses:
          [{
            courseId:{
              type: mongoose.Schema.Types.ObjectId,
              ref: "Course"
            },
            assessment:
              [{
                name:String, // name likes quiz 1, mid , final or assignment 1
                mark:Number
                }],
            rewards:[{ //May be we can make this using one collection
              type:String,
              //enum:['Grade Rank','Competion'],
              assessmentType:{
                type:String,
                result:String //A for example if it is grade, 400 for example for coins, 50 for example for marks 
              },
              description:String,
            }],
          }],
        }]
      }]
          
  }, { timestamps: true, collection: 'SchoolClasses' });

  mongoose.model("SchoolClasses", schoolClassSchema);
  }

getModel() {
this.init();
return mongoose.model("SchoolClasses");
}

}

export default SchoolClasses;