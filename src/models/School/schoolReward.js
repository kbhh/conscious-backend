import mongoose from "mongoose";

class SchoolReward {
  init() {
    const dbSchema = new mongoose.Schema({
      rewards:[{ 
        rewardYear:Number,
        // class based 
        grade:{
          name:String,
          reward:String,
          Student:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "SchoolClass",
          }]
        },
        //section
        grade:{
          name:String,
          section:{
            name:String,
            reward:String,
            Student:[{
              type: mongoose.Schema.Types.ObjectId,
              ref: "SchoolClass",
            }]
          }
         
        },
        school:{
          reward:String,
          Student:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "SchoolClass",
          }]
        }
        
      }],  

    }, { timestamps: true, collection: 'SchoolReward' });
    
    mongoose.model("SchoolReward", schema);
    }


  getModel() {
  this.init();
  return mongoose.model("SchoolReward");
  }

}

export default SchoolReward;