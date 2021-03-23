import Service from '../common/Service';
const mongoose=require('mongoose')
class CompetitionService extends Service {
  constructor(model) {
    super(model);
  }


    
  async addGrade(req) {
    console.log(req);
           
          try 
      {    
          let courseExist = await this.getById(req.params.id, ['academicYear'])
          if(courseExist.record)
          {
            try{
              let courseRecord= courseExist.record
              courseRecord.academicYear.grade.push(req.body)
              let record = await this.insert(courseRecord);
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
  async updateGrade(req) {
      try 
      {    
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              let courseRecord= courseExist.record
              let id = req.body.id
              req.body._id=id
              let grade = courseRecord.academicYear.grade.id(id)
              courseRecord.academicYear.grade.remove(grade)
              courseRecord.academicYear.grade.push(req.body)
              let record = await this.insert(courseRecord);
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
  async deleteGrade(req) {
    try 
    {    
        let courseExist = await this.getById(req.params.id, ['academicYear'])    
        if(courseExist.record)
        {
          try{
            let courseRecord= courseExist.record
            let id = req.body.id
            req.body._id=id
            let grade = courseRecord.academicYear.grade.id(id)
            courseRecord.academicYear.grade.remove(grade)
            let record = await this.insert(courseRecord);
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

  async addSection(req) {
      console.log(req);
             
            try 
        {    
            let courseExist = await this.getById(req.params.id, ['academicYear'])
            if(courseExist.record)
            {
              try{
                let courseRecord= courseExist.record
                const {gradeid} = req.body
                courseRecord.academicYear.grade.id(gradeid).section.push(req.body)
                let record = await this.insert(courseRecord);
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
    async updateSection(req) {
      try 
      {   
        console.log("here");
         
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              console.log("here");
              let courseRecord= courseExist.record
              let gradeid = req.body.gradeid
              req.body._gradeid=gradeid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              console.log("here");

              let section = courseRecord.academicYear.grade.id(gradeid).section.id(sectionid)
              console.log("here");

              courseRecord.academicYear.grade.id(gradeid).section.remove(section)
              console.log("here");

              courseRecord.academicYear.grade.id(gradeid).section.push(req.body)
              let record = await this.insert(courseRecord);
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
    async deleteSection(req) {

      try 
      {    
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              let courseRecord= courseExist.record
              let gradeid = req.body.gradeid
              req.body._gradeid=gradeid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let section = courseRecord.academicYear.grade.id(gradeid).section.id(sectionid)
              courseRecord.academicYear.grade.id(gradeid).section.remove(section)
              let record = await this.insert(courseRecord);
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

    async addStudents(req) {
      console.log(req);
             
            try 
        {    
            let courseExist = await this.getById(req.params.id, ['academicYear'])
            if(courseExist.record)
            {
              try{
                let courseRecord= courseExist.record
                const {gradeid, sectionid} = req.body
                console.log("here");
                
                courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).students.push(req.body)
                console.log("here");

                let record = await this.insert(courseRecord);
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
    async updateStudents(req) {
      try 
      {   
        console.log("here");
         
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              console.log("here");
              let courseRecord= courseExist.record
              let gradeid = req.body.gradeid
              req.body._gradeid=gradeid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let studentsid = req.body.studentsid
              req.body._studentsid=studentsid
              console.log("here");

              let students = courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).students.id(studentsid)
              console.log("here");

              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).students.remove(students)
              console.log("here");

              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).students.push(req.body)
              let record = await this.insert(courseRecord);
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
    async deleteStudents(req) {
      try 
      {   
        console.log("here");
         
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              console.log("here");
              let courseRecord= courseExist.record
              let gradeid = req.body.gradeid
              req.body._gradeid=gradeid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let studentsid = req.body.studentsid
              req.body._studentsid=studentsid
              console.log("here");

              let students = courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).students.id(studentsid)
              console.log("here");

              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).students.remove(students)
              console.log("here");

              let record = await this.insert(courseRecord);
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


    async addCourses(req) {
      console.log(req);
             
            try 
        {    
            let courseExist = await this.getById(req.params.id, ['academicYear'])
            if(courseExist.record)
            {
              try{
                let courseRecord= courseExist.record
                const {gradeid,sectionid} = req.body
                courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.courses.push(req.body)
                let record = await this.insert(courseRecord);
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
    async updateCourses(req) {
      try 
      {    
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              let courseRecord= courseExist.record
              let gradeid = req.body.gradeid
              req.body._gradeid=gradeid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let Coursesid = req.body.Coursesid
              req.body._Coursesid=Coursesid
              let coursesid = req.body.coursesid
              req.body._coursesid=coursesid
              let courses = courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).courses.id(coursesid)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).courses.remove(courses)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).courses.push(req.body)
              let record = await this.insert(courseRecord);
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
    async deleteCourses(req) {
      try 
      {    
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              let courseRecord= courseExist.record
              let gradeid = req.body.gradeid
              req.body._gradeid=gradeid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let Coursesid = req.body.Coursesid
              req.body._Coursesid=Coursesid
              let coursesid = req.body.coursesid
              req.body._coursesid=coursesid
              let courses = courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).courses.id(coursesid)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).courses.remove(courses)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).courses.push(req.body)
              let record = await this.insert(courseRecord);
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

    async addMarkSetting(req) {
      console.log(req);
             
            try 
        {    
            let courseExist = await this.getById(req.params.id, ['academicYear'])
            if(courseExist.record)
            {
              try{
                let courseRecord= courseExist.record
                const {gradeid,sectionid,Courseid} = req.body
                courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Courseid).test.push(req.body)
                let record = await this.insert(courseRecord);
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
    async updateMarkSetting(req) {
      try 
      {    
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              let courseRecord= courseExist.record
              let gradeid = req.body.gradeid
              req.body._gradeid=gradeid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let Coursesid = req.body.Coursesid
              req.body._Coursesid=Coursesid
              let markSettingid = req.body.markSettingid
              req.body._markSettingid=markSettingid
              let markSetting = courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).markSetting.id(markSettingid)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).markSetting.remove(markSetting)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).markSetting.push(req.body)
              let record = await this.insert(courseRecord);
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
    async deleteMarkSetting(req) {
      try 
      {    
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              let courseRecord= courseExist.record
              let gradeid = req.body.gradeid
              req.body._gradeid=gradeid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let Coursesid = req.body.Coursesid
              req.body._Coursesid=Coursesid
              let markSettingid = req.body.markSettingid
              req.body._markSettingid=markSettingid
              let markSetting = courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).markSetting.id(markSettingid)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).markSetting.remove(markSetting)
              let record = await this.insert(courseRecord);
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
    
    async addTest(req) {
      console.log(req);
             
            try 
        {    
            let courseExist = await this.getById(req.params.id, ['academicYear'])
            if(courseExist.record)
            {
              try{
                let courseRecord= courseExist.record
                const {gradeid,sectionid,Courseid} = req.body
                courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Courseid).test.push(req.body)
                let record = await this.insert(courseRecord);
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
    async updateTest(req) {
      try 
      {    
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              let courseRecord= courseExist.record
              let gradeid = req.body.gradeid
              req.body._gradeid=gradeid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let Coursesid = req.body.Coursesid
              req.body._Coursesid=Coursesid
              let testid = req.body.testid
              req.body._testid=testid
              let test = courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).test.id(testid)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).test.remove(test)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).test.push(req.body)
              let record = await this.insert(courseRecord);
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
    async deleteTest(req) {
      try 
      {    
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              let courseRecord= courseExist.record
              let gradeid = req.body.gradeid
              req.body._gradeid=gradeid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let Coursesid = req.body.Coursesid
              req.body._Coursesid=Coursesid
              let testid = req.body.testid
              req.body._testid=testid
              let test = courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).test.id(testid)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).Courses.id(Coursesid).test.remove(test)
              let record = await this.insert(courseRecord);
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


    async addReward(req) {
      console.log(req);
             
            try 
        {    
            let courseExist = await this.getById(req.params.id, ['academicYear'])
            if(courseExist.record)
            {
              try{
                let courseRecord= courseExist.record
                const {gradeid, sectionid} = req.body
                console.log("here");
                
                courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).rewards.push(req.body)
                console.log("here");

                let record = await this.insert(courseRecord);
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
    async updateReward(req) {
      try 
      {    
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              let courseRecord= courseExist.record
              let gradeid = req.body.gradeid
              req.body._gradeid=gradeid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let rewardid = req.body.rewardid
              req.body._rewardid=rewardid
              let rewards = courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).rewards.id(rewardid)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).rewards.remove(rewards)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).rewards.push(req.body)
              let record = await this.insert(courseRecord);
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
    async deleteReward(req) {
      try 
      {    
          let courseExist = await this.getById(req.params.id, ['academicYear'])    
          if(courseExist.record)
          {
            try{
              let courseRecord= courseExist.record
              let gradeid = req.body.gradeid
              req.body._gradeid=gradeid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let rewardid = req.body.rewardid
              req.body._rewardid=rewardid
              let rewards = courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).rewards.id(rewardid)
              courseRecord.academicYear.grade.id(gradeid).section.id(sectionid).rewards.remove(rewards)
              let record = await this.insert(courseRecord);
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

export default CompetitionService;