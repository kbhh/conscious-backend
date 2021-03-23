import mongoose from "mongoose";

class SchoolCurriculumModel {
  init() {
    const schema = new mongoose.Schema({
      courseName: String,//Grade Eight Maths
      metadata: [{//to be written after the cover page
        title: String,//Objective, introduction, acknowledgment
        description: String,
        metadataSequence: Number

      }],
      prerequiste: [{ //pre-requiste course ID
        courseId: {//Maths type ID
          type: mongoose.Schema.Types.ObjectId,
          ref: "CourseType"
        }
      }],
      status://course level status
      {
        type: String,
        default: 'Pending'
      },
      courseType: {//Maths type ID
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseType"
      },
      reference:[{ // Those general resources that can be used for all the course 
        referenceType:{
          type:String,
          enum:['video','books','Audio','Text']
        },
        reference:String, //links to books, audio and video 
      }],

      grade: String,//Grade eight
      field: {
        type: String,
        enum: ['natural', 'social', 'both']
      },
      //description: String,
      chapters: [{
        chapterName: String,
        chapterSequence: Number, //Chapter level sequeunce
        prerequisteChapterId: [{ // If the student fails to pass this competency, he/she will be given additional resources from those pre-requistes 
          type: mongoose.Schema.Types.ObjectId,
          ref: "RegionalCurriculum"
        }],
        metadata: [{//to be written after the cover page
          title: String,//Objective, introduction, acknowledgment
          description: String,
          metadataSequence: Number
        }],
        topic: [{
          topicName: String,
          topicSequence: Number,
          prerequisteTopicId: [{ // If the student fails to pass this competency, he/she will be given additional resources from those pre-requistes 
            type: mongoose.Schema.Types.ObjectId,
            ref: "RegionalCurriculum"
          }],
          metadata: [{//to be written after the cover page
            title: String,//Objective, introduction, acknowledgment
            description: String,
            path:String,
            metadataSequence: Number
          }],
          subTopic:
            [
              {
                subTopicName: String,
                subtopicSequence: Number,
                prerequisteSubTopicId: [{ // If the student fails to pass this competency, he/she will be given additional resources from those pre-requistes 
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "RegionalCurriculum"
                }],
                metadata: [{//to be written after the cover page
                  title: String,//Objective, introduction, acknowledgment
                  description: String,
                  metadataSequence: Number
                }],
               
              }
            ]
        }]
      }],

    }, { timestamps: true, collection: 'SchoolCurriculum' });

    mongoose.model("SchoolCurriculum", schema);
  }

  getModel() {
    this.init();
    return mongoose.model("SchoolCurriculum");
  }

}

export default SchoolCurriculumModel;
