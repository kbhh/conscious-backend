import mongoose from 'mongoose'
class SchoolCourseContent {
  init() {
    const CourseSchema = new mongoose.Schema({
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseCurriculum"
      },
      coverPage: String,//Image path to cover page
      description: String,
      assessment: [{
        grades: [{
          grade: String, //A, A+
          minimumMark: Number,
          maximumMark: Number
        }],
        gradeWeights: [{ // total summation of marks to decide the grade- example mid 30 marks, final 40 marks
          testId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SchoolCourseContent"
          },
          weight: Number //
        }]
      }],
      subTopic: [{
        subtopicId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "CourseCurriculum"
        },
        content: [{//this are the pages which represent the learning objects 
          regionalContentId: { //If the school has taken the regional course content then it might not need to modify it
            type: mongoose.Schema.Types.ObjectId,
            ref: "RegionalCourseContent"
          },
          contentType: String,//Chapter Summary, learning objectives, lectures 
          learningStyle: String,//Kinestic, Auditory 
          sequence: Number,// the contents would be organized on the type as Kinestic, Auditory
          contentKind: String,//video, audio, text, 
          difficulty: String,
          contentdetails: String,//It will be string if it is text, link for audio and video
          reference: [{ // Content level additional resources 
            type: {
              type: String,
              enum: ['video', 'books', 'Audio']
            },
            reference: String, //links to books, audio and video 
          }],
          assignment: [{ //essay, project, 
            type: String,
            description: String,
            difficulty: String,
            accuracy: Number,
            correctAnswer: String,
            howto: [{}],//answer howto
            reference: [{
              type: {
                type: String,
                enum: ['video', 'books', 'Audio']
              },
              reference: String, //links to books, audio and video 
            }],
            discussion: [{
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
          }],
          questions: [{ //those questions are in the main app, the questions will be from low difficulity to high difficulity but might return back to low if the
            // student doestn't answer the difficult question
            questionType: String,//trial, homework, classwork or exam 
            questionCategory: {
              type: String,
              enum: ['Multiple Choice', 'Blank Space', 'Short Answer']
            },

            questionDescription: String,
            hints: String,
            difficulty: String,
            options: [],
            correctAnswer: String,
            references: String,
            status: String, //Active
            howto: [{}],
            reliability: { //Questions will be evaluated for their reliablity and validty so that a decision will be made for future use
              type: Number,
              default: 'Nan'
            },
            validty: {
              type: Number,
              default: 'Nan'
            },
            coins: Number,
            feedback: [{
              wrongAnswer: String, //Assume the question is 4X-7=5, if the user answer 11 a different feedback is 
              //given than if the user answers 5, the system should develop possible feedbacks for each possible wrong answers
              feedback: String
            }],
            supplementaryQuestionId: [{
              type: mongoose.Schema.Types.ObjectId,
              ref: "SchoolCourseContent"
            }],
          }],
          test: [{
            title: String,
            testType: String,//trial, control point 
            description: String,
            instruction: String,
            duration: Number,
            questions: [{
              questionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SchoolCourseContent"
              },
              mark: Number //Assigned Mark,                
            }],
            pass: {
              difficultQuestionPass: Number, // minimum difficult questions answered correctly to pass to the next sub topic
              mediumQuestionPass: Number,
              lowQuestionPass: Number
            },
            intervention: {
              difficultQuestionPass: Number, // maximum difficult questions answered correctly for intervention
              mediumQuestionPass: Number,
              lowQuestionPass: Number
            },
            scafold: {
              difficultQuestionPass: Number, // minimum difficult questions answered correctly for scafold
              mediumQuestionPass: Number,
              lowQuestionPass: Number
            }
          }],
          manualAssessment: [{
            title: String,
            category: {
              type: String,
              enum: ['essay', 'project', 'group exerisce'],
            },
            mark: Number,
            description: String, //this can also be video
            reference: [{
              type: {
                type: String,
                enum: ['video', 'books', 'Audio']
              },
              reference: String, //links to books, audio and video 
            }],
          }],
          app: [ //link to the app, we may have multiple apps 
            {
              contentType: String,//video, audio, text, 
              contentdetails: String,//path,
              test: String, //path
            }
          ]
        }],
      }]

    }, { timestamps: true, collection: 'schoolCourseContent' });

    mongoose.model("schoolCourseContent", CourseSchema);
  }


  getModel() {
    this.init();
    return mongoose.model("schoolCourseContent");
  }

}

export default SchoolCourseContent;