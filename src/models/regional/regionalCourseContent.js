import mongoose from "mongoose";

class RegionalCourseContent {
  init() {
    const schema = new mongoose.Schema({
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseCurriculum"
      },
      chapter: [{
        chapterId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "CourseCurriculum"
        },
        topic: [{
          topicId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CourseCurriculum"
          },
          subTopic: [{
            subtopicId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "CourseCurriculum"
            },
            content: [{
              learningStyle: {
                type: String,
                enum: ['activist',
                  'reflector',
                  'theorist',
                  'pragmatist',
                  'Kinestic',
                  'Auditory']
              },
              learningStyleSequence: Number,// the contents would be organized on the type as Kinestic, Auditory
              content: [{
                contentType: String,//video, audio, text, 
                contentdetails: String,//It will be string if it is text, link for audio and video
                contentPath: String,
                contentSequence: Number//is like pages in book
              }],
              // howto: [{}],//answer howto 
            }],
            questions: [{
              question: String,
              path: String,
              questionType: {
                type: String,
                enum: ['Multiple choice',
                  'True or False',
                  'Blank Space',
                  'Match']
              },
              diffcultyLevel: {
                type: String,
                enum: [
                  'easy',
                  'medium',
                  'hard']
              },
              answer: [{
                content: String,
                path: String,
                feedback: String,//like Good job, or like incorrect,Not quite right
                correctAnswer: Boolean
              }]
            }],
            items: [{ //those questions are in the main app
              description: String,//assignment name and others
              ItemType: {
                type: String,
                enum: ['Assignment',
                  'Quiz',
                  'test',]
              },
              questions: [{
                questionIds: {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "CourseContent"
                }
              }],
            }],
            app: [ //link to the app, we may have multiple apps 
              {
                appId: String,
                contentType: String,//video, audio, text, 
                contentdetails: String,//content details,
                test: String, //path
              }
            ]
          }],
        }]

      }],
    }, { timestamps: true, collection: 'CourseContent' });

    mongoose.model("CourseContent", schema);
  }

  getModel() {
    this.init();
    return mongoose.model("CourseContent");
  }

}

export default RegionalCourseContent;
