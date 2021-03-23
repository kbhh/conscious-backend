import mongoose from "mongoose";

class WorkingPath {
  init() {
    const CourseSchema = new mongoose.Schema({
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SchoolCurriculum"
      },
      workingPaths: [{
        name: String, //wp1.1 working path 1.1
        sequenceNumber: Number,
        content: [{
          learningStyle: String,
          LearningObjects: [{
            Sequence: String
          }],
          //number of questions
          questions: {
            hard: Number,
            meduim: Number,
            easy: Number
          },
          passMark: {
            hard: Number,
            meduim: Number,
            easy: Number
          },
          intervention: {
            hard: Number,
            meduim: Number,
            easy: Number
          },
        }],
      }],

    }, {
      timestamps: true,
      collection: 'WorkingPath'
    });

    mongoose.model("WorkingPath", schema);
  }

  getModel() {
    this.init();
    return mongoose.model("WorkingPath");
  }

}

export default WorkingPath;