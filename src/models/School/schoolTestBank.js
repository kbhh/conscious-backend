import mongoose from "mongoose";

class SchoolTestBank {
    init() {
        const TestBankSchema = new mongoose.Schema({
            courseId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "CourseCurriculum"
              },
            assessment:[{
                grades:[{
                    grade:String, //A, A+
                    minimumMark:Number,
                    maximumMark:Number
                }],
                gradeWeights:[{ // total summation of marks to decide the grade- example mid 30 marks, final 40 marks
                    testId:{ 
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "SchoolTestBank"
                    },
                    assignmentId:{ 
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "SchoolTestBank"
                    },
                    weight:Number //
                }]
            }],
            subTopic:[{        
                questions: [{ //those questions are in the main app, the questions will be from low difficulity to high difficulity but might return back to low if the
                    // student doestn't answer the difficult question
                    questionType: String,//trial, homework, classwork or exam 
                    questionCategory:{
                        type:String,
                        enum:['Multiple Choice','Blank Space','Short Answer']
                    },
        
                    questionDescription: String,
                    hints:String,
                    difficulty: String,
                    options: [],
                    correctAnswer: String,
                    references:String, 
                    status:String, //Active
                    howto:[{}],
                    reliability:{ //Questions will be evaluated for their reliablity and validty so that a decision will be made for future use
                        type:Number, 
                        default:'Nan'
                    },
                    validty:{
                        type:Number, 
                        default:'Nan'
                    },
                    coins:Number,
                    feedback:[{
                        wrongAnswer:String, //Assume the question is 4X-7=5, if the user answer 11 a different feedback is 
                        //given than if the user answers 5, the system should develop possible feedbacks for each possible wrong answers
                        feedback:String
                    }],
                    supplementaryQuestionId:[{ 
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "SchoolCourseContent"
                      }],
                }],
                
            }],
            test: [{ 
                title:String,
                coverPage:String,
                testType: String,//trial, mid, final, quiz, control point
                description: String,
                instruction:String,
                duration:Number,
                includedSubTopics:[{ 
                    subTopicId:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "SchoolCourseContent"},
                    mark:Number //Assigned Mark,                
                  }],
                questions:[{ 
                    questionId:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "SchoolTestBank"},
                    mark:Number //Assigned Mark,                
                  }],
                 
            }],
            manualAssessment:[{
                title:String,
                category:{
                    type:String,
                    enum:['essay','project','group exerisce'],
                },
                mark:Number,
                description:String, //this can also be video
                includedSubTopics:[{ 
                    subTopicId:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "SchoolCourseContent"},
                    mark:Number //Assigned Mark,                
                  }],
                reference:[{ 
                    type:{
                        type:String,
                        enum:['video','books','Audio']
                    },
                    reference:String, //links to books, audio and video 
                }],
            }],
        
        }, { timestamps: true, collection: 'TestBank' });
                
        mongoose.model("TestBank", TestBankSchema);
        
        }



    getModel() {
    this.init();
    return mongoose.model("TestBank");
    }

}

export default SchoolTestBank;