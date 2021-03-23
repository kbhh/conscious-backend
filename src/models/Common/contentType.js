class ContentType {
  init() {
    const schema = new Schema({
      contentType: {
        type: String,
        required: true,
      },
    }, { timestamps: true });

    mongoose.model("ContentType", schema);
  }

  getModel() {
    this.init();
    return mongoose.model("ContentType");
  }
}

export default ContentType;
