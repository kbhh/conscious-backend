import mongoose, { Schema } from "mongoose";


class LearningStyle {
  init() {
    const schema = new Schema({
      style: {
        type: String,
        required: true,
      },
    }, { timestamps: true });

    mongoose.model("LearningStyle", schema);
  }

  getModel() {
    this.init();
    return mongoose.model("LearningStyle");
  }
}

export default LearningStyle;
