import mongoose, { Schema } from "mongoose";


class MarkModel {

  initSchema() {
    const schema = new Schema({
      firstname: {
        type: String,
        default:'Abel Nigusse',
        required: true,
      },
      assignment: {
        type: Number,
        required: true,
      },
      groupWork: {
        type: Number,
        required: true,
      },
      midExam: {
        type: Number,
        required: true,
      },
      finalExam: {
        type: Number,
        required: true,
      },
      totalMark: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        default:' He is an excellent Student',
        required: false,
      }
    }, { timestamps: true });
    
    mongoose.model("marks", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("marks");
  }
}

export default MarkModel;
