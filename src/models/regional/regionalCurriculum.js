import mongoose from "mongoose";

class RegionalCurriculumModel {
  init() {
    const schema = new mongoose.Schema({
      courseName: String, //Grade Eight Maths
      metadata: [{ //to be written after the cover page
        title: String, //Objective, introduction, acknowledgment
        description: String,
        path: String,
        metadataSequence: Number

      }],
      status: //course level status
      {
        type: String,
        default: 'Pending'
      },
      courseType: { //Maths type ID
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseType"
      },
      reference: [{ // Those general resources that can be used for all the course 
        referenceType: {
          type: String,
          enum: ['video', 'books', 'Audio', 'Text']
        },
        reference: String, //links to books, audio and video 
      }],

      grade: String, //Grade eight
      field: {
        type: String,
        enum: ['natural', 'social', 'both']
      },
      description: String,
      chapters: [{
        chapterName: String,
        chapterSequence: Number, //Chapter level sequeunce
        metadata: [{ //to be written after the cover page
          title: String, //Objective, introduction, acknowledgment
          description: String,
          path: String,
          metadataSequence: Number
        }],
        topic: [{
          topicName: String,
          topicSequence: Number,

          metadata: [{ //to be written after the cover page
            title: String, //Objective, introduction, acknowledgment
            description: String,
            path: String,
            metadataSequence: Number
          }],
          subTopic: [{
            subTopicName: String,
            subTopicSequence: Number,
            metadata: [{ //to be written after the cover page
              title: String, //Objective, introduction, acknowledgment
              description: String,
              path: String,
              metadataSequence: Number
            }],

          }]
        }]
      }],
      //let's leave the competencies for now
      // competency: [{
      //   competency: [{
      //     competencyName: String,//Addition
      //     objective: String,
      //     subCompetency: [{
      //       subCompetencyName: String //two numbers addition
      //     }

      //     ]
      //   }
      //   ],
      //   status:
      //   {
      //     type: String,
      //     default: 'Pending'
      //   },//active, inactive,pending        

      // }]
    }, {
      timestamps: true,
      collection: 'CourseCurriculum'
    });

    mongoose.model("CourseCurriculum", schema);
  }

  getModel() {
    this.init();
    return mongoose.model("CourseCurriculum");
  }

}

export default RegionalCurriculumModel;