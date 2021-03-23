import mongoose from "mongoose";

class CurriculumSell {
  init() {
    const dbSchema = new mongoose.Schema({
      sellerSchoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SchoolProfile"
      },
      buyerSchoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SchoolProfile"
      },   
    // this should be amended
      soldcurriculum:[{ 
        agreementType:{
          Type:String,
          enum:['Course','Whole Curriculum',['Questions','Application']]
        },
        sold:[{
          soldID:{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: "SchoolProfile"
          },
          agreementDate:Date,
          
          }],
      }]
    }, { timestamps: true, collection: 'CurriculumSell' });

    mongoose.model("CurriculumSell", schema);
    }

  getModel() {
  this.init();
  return mongoose.model("CurriculumSell");
  }

}

export default CurriculumSell;