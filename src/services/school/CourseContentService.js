import Service from '../common/Service';
class CourseContentService extends Service {
  constructor(model) {
    super(model);
  }

  async AddLearningStyle(req) {
    try 
    {    
      let courseExist = await this.getById(req.params.id)
            if(courseExist.record)
            {
  
              try{
                let newid = new mongoose.mongo.ObjectId(); 
                console.log("new id created");
                
                const {chapterId, subtopicId, learningStyle,learningStyleSequence} = req.body
                console.log("request body");
                
                let courseRecord= courseExist.record
                console.log("course is on record");
                let Contents = {
                  _id:newid,
                  learningStyle: learningStyle,
                  learningStyleSequence:learningStyleSequence
                  
                }
                console.log("Topic fields got filled ");
                let tobeEditied=courseRecord.chapter.id(chapterId).subTopic.id(subtopicId)
                console.log("found chapter id");
                
                tobeEditied.contents=Contents
                console.log("set Topic");
                
                // courseRecord.chapters.push(Contents)
                console.log("the data is pushed");
                let record = await this.insert(courseRecord);
                console.log("it's recorded");
                return record
                
              }
          catch(errormessage){
            return{
              error: true,
              message: errormessage,
              statusCode: 200,
              record: null
            }
          }
        }
        else
        {
          return{
            error: true,
            message: 'Please select the item to be updated',
            statusCode: 200,
            record: null
          }
        }
        
      } catch (errormessage) { 
        return{
          error: true,
          message: errormessage,
          statusCode: 200,
          record: null
        }

      }
  } 

};

export default CourseContentService;
