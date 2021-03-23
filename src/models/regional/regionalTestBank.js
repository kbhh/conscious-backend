import mongoose from "mongoose";

class RegionalTestBank {
    init() {
        const CourseSchema = new mongoose.Schema({
            courseId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "CourseCurriculum"
              },
              assessment:
              [{
                  assessmentYear:Number,
                  semester:String,
                  duration:Number,
                  exams: [{ //those questions are in the main app
                    description: String,//assignment name and others
                    ItemType: {
                      type: String,
                      enum: [
                        'Quiz',
                        'test',]
                    },
                    subtopics:[{
                        subtopicId:{
                            type:mongoose.Schema.Types.ObjectId,
                            ref:'RegionalCurriculum'
                        },
                      questions:[{
                            questionIds:{
                                type: mongoose.Schema.Types.ObjectId,
                                ref: "SchoolCourseContent",
                                mark:Number
                            },
                            reliability:{ //Questions will be evaluated for their reliablity and validty so that a decision will be made for future use
                                type:Number, 
                                default:'Nan'
                            },
                            validty:{
                                type:Number, 
                                default:'Nan'
                            }
                        }]
                    }],
                    
                  }]
                    
                  }],
            
        }, { timestamps: true, collection: 'TestBank' });
        
        mongoose.model("TestBank", schema);

    }
    
    getModel() {
        this.init();
        return mongoose.model("TestBank");
    }

}

        
    





export default RegionalTestBank;