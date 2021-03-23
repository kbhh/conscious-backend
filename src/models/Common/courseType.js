import mongoose, { Schema } from "mongoose";

class CourseType {
  init() {
    const schema = new Schema({
      courseTypeName: String,//physics, chemistry
    }, { timestamps: true });

    mongoose.model("CourseType", schema);
  }

    getModel() {
    this.init();
    return mongoose.model("CourseType");
    }

}

export default CourseType;