import Service from '../common/Service';
const mongoose=require('mongoose')
class CurriculumService extends Service {
  constructor(model) {
    super(model);
  }
  async registerCourse(data) {
    try 
    {
        let message=''
        let CourseName = data.courseName;     
        let Grade = data.grade; 
        let Field = data.field;     
        let courseNameExist = await this.getByField({courseName:CourseName, grade:Grade, field:Field})       
        
        if(courseNameExist.record)
        {
                if (message === '')
                {
                  message=' CourseName is '
                }
                else
                {
                  message=message + ' and CourseNames are '
                }
               
        }
        if(message !== '')
        {           
            message = message + ' already exist '
            return{
                error: true,
                message: message,
                statusCode: 200,
                record:null
            }
           
        } 
        else
        {
          let record = await this.insert(data);
          return record
        }
      } catch (errormessage) { 
        return{
          error: true,
          message: message,
          statusCode: 200,
          record: null
        }

      }
    } 
      
};

export default CurriculumService;