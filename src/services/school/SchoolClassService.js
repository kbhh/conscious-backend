import Service from '../common/Service';
const mongoose=require('mongoose')
class SchoolClassService extends Service {
  constructor(model) {
    super(model);
  }


    
  async addClass(req) {
    console.log(req);
           
          try 
      {    
          let classExist = await this.getById(req.params.id, ['shift'])
          if(classExist.record)
          {
            try{
              let classRecord= classExist.record
              const {shiftid} = req.body
              console.log("req");
              console.log(req.body);


              classRecord.shift.id(shiftid).class.push(req.body)
              console.log("req");

              let record = await this.insert(classRecord);
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
  async updateClass(req) {
      try 
      {    
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let clas = classRecord.shift.id(shiftid).class.id(classid)
              classRecord.shift.id(shiftid).class.remove(clas)
              classRecord.shift.id(shiftid).class.push(req.body)
              let record = await this.insert(classRecord);
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
  async deleteClass(req) {
      try 
      {    
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let clas = classRecord.shift.id(shiftid).class.id(classid)
              classRecord.shift.id(shiftid).class.remove(clas)
              let record = await this.insert(classRecord);
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
             
            try 
        {    
            let classExist = await this.getById(req.params.id,['shift'])
            if(classExist.record)
            {
              try{
                console.log("req");

                let classRecord= classExist.record
                const {shiftid,classid} = req.body
                console.log("req");
                console.log(req.body);

                classRecord.shift.id(shiftid).class.id(classid).section.push(req.body)
                console.log(req.body);

                let record = await this.insert(classRecord);
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
         
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              console.log("here");
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let sectionid = req.body.sectionid
              req.body._id=sectionid
            

              let section = classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid)
              console.log("here");
              classRecord.shift.id(shiftid).class.id(classid).section.remove(section)
              classRecord.shift.id(shiftid).class.id(classid).section.push(req.body)
              let record = await this.insert(classRecord);
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
        console.log("here");
         
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              console.log("here");
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let sectionid = req.body.sectionid
              req.body._id=sectionid
            

              let section = classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid)
              console.log("here");
              classRecord.shift.id(shiftid).class.id(classid).section.remove(section)
              let record = await this.insert(classRecord);
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
            let classExist = await this.getById(req.params.id, ['shift'])
            if(classExist.record)
            {
              try{
                let classRecord= classExist.record
                const {classid, sectionid, shiftid} = req.body
                console.log("here");
                
                classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).students.push(req.body)
                console.log("here");

                let record = await this.insert(classRecord);
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
         
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              console.log("here");
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let sectionid = req.body.sectionid
              req.body._id=sectionid
              let stid = req.body.stid
              req.body._id=stid
            

              let student = classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).students.id(stid)
              console.log("here");
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).students.remove(student)
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).students.push(req.body)
              let record = await this.insert(classRecord);
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
         
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              console.log("here");
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let sectionid = req.body.sectionid
              req.body._id=sectionid
              let stid = req.body.stid
              req.body._id=stid
            

              let student = classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).students.id(stid)
              console.log("here");
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).students.remove(student)
              let record = await this.insert(classRecord);
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
            let classExist = await this.getById(req.params.id, ['shift'])
            if(classExist.record)
            {
              try{
                let classRecord= classExist.record
                const {classid, sectionid, shiftid} = req.body
                console.log("here");
                
                classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.push(req.body)
                console.log("here");

                let record = await this.insert(classRecord);
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
        console.log("here");
         
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              console.log("here");
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let sectionid = req.body.sectionid
              req.body._id=sectionid
              let crid = req.body.crid
              req.body._id=crid
            

              let course = classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(crid)
              console.log("here");
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.remove(course)
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.push(req.body)
              let record = await this.insert(classRecord);
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
        console.log("here");
         
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              console.log("here");
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let sectionid = req.body.sectionid
              req.body._id=sectionid
              let crid = req.body.crid
              req.body._id=crid
            

              let course = classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(crid)
              console.log("here");
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.remove(course)
              let record = await this.insert(classRecord);
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

    async addWorkingpaths(req) {
      console.log(req);
             
            try 
        {    
            let classExist = await this.getById(req.params.id, ['shift'])
            if(classExist.record)
            {
              try{
                let classRecord= classExist.record
                const {classid, sectionid, shiftid,courseid} = req.body
                console.log("here");
                
                classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.push(req.body)
                console.log("here");

                let record = await this.insert(classRecord);
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
    async updateWorkingpaths(req) {
      try 
      {   
        console.log("here");
         
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              console.log("here");
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let sectionid = req.body.sectionid
              req.body._id=sectionid
              let courseid = req.body.courseid
              req.body._id=courseid
              let wpid = req.body.wpid
              req.body._id=wpid
            

              let wp = classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid)
              console.log("here");
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.remove(wp)
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.push(req.body)
              let record = await this.insert(classRecord);
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
    async deleteWorkingpaths(req) {
      try 
      {   
        console.log("here");
         
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              console.log("here");
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let sectionid = req.body.sectionid
              req.body._id=sectionid
              let courseid = req.body.courseid
              req.body._id=courseid
              let wpid = req.body.wpid
              req.body._id=wpid
            

              let wp = classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid)
              console.log("here");
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.remove(wp)
              let record = await this.insert(classRecord);
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


    async addControlpoints(req) {
      console.log(req);
             
            try 
        {    
            let classExist = await this.getById(req.params.id, ['shift'])
            if(classExist.record)
            {
              try{
                let classRecord= classExist.record
                const {classid, sectionid, shiftid,courseid,wpid} = req.body
                console.log("here");
                
                classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid).cp.push(req.body)
                console.log("here");

                let record = await this.insert(classRecord);
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
    async updateControlpoints(req) {
      try 
      {   
        console.log("here");
         
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              console.log("here");
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let sectionid = req.body.sectionid
              req.body._id=sectionid
              let courseid = req.body.courseid
              req.body._id=courseid
              let wpid = req.body.wpid
              req.body._id=wpid
              let cpid = req.body.cpid
              req.body._id=cpid
            

              let cp = classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid).cp.id(cpid)
              console.log("here");
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid).cp.remove(cp)
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid).cp.push(req.body)
              let record = await this.insert(classRecord);
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
    async deleteControlpoints(req) {
      try 
      {   
        console.log("here");
         
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              console.log("here");
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let sectionid = req.body.sectionid
              req.body._id=sectionid
              let courseid = req.body.courseid
              req.body._id=courseid
              let wpid = req.body.wpid
              req.body._id=wpid
              let cpid = req.body.cpid
              req.body._id=cpid
            

              let cp = classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid).cp.id(cpid)
              console.log("here");
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid).cp.remove(cp)
              let record = await this.insert(classRecord);
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

    async addAssignments(req) {
      console.log(req);
             
            try 
        {    
            let classExist = await this.getById(req.params.id, ['shift'])
            if(classExist.record)
            {
              try{
                let classRecord= classExist.record
                const {classid, sectionid, shiftid,courseid,wpid} = req.body
                console.log("here");
                
                classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid).assignment.push(req.body)
                console.log("here");

                let record = await this.insert(classRecord);
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
    async updateAssignments(req) {
      try 
      {   
        console.log("here");
         
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              console.log("here");
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let sectionid = req.body.sectionid
              req.body._id=sectionid
              let courseid = req.body.courseid
              req.body._id=courseid
              let wpid = req.body.wpid
              req.body._id=wpid
              let assid = req.body.assid
              req.body._id=assid
            

              let assignment = classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid).assignment.id(assid)
              console.log("here");
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid).assignment.remove(assignment)
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid).assignment.push(req.body)
              let record = await this.insert(classRecord);
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
    async deleteAssignments(req) {
      try 
      {   
        console.log("here");
         
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              console.log("here");
              let classRecord= classExist.record
              let shiftid = req.body.shiftid
              req.body._id=shiftid
              let classid = req.body.classid
              req.body._id=classid
              let sectionid = req.body.sectionid
              req.body._id=sectionid
              let courseid = req.body.courseid
              req.body._id=courseid
              let wpid = req.body.wpid
              req.body._id=wpid
              let assid = req.body.assid
              req.body._id=assid
            

              let assignment = classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid).assignment.id(assid)
              console.log("here");
              classRecord.shift.id(shiftid).class.id(classid).section.id(sectionid).courses.id(courseid).workingpaths.id(wpid).assignment.remove(assignment)
              let record = await this.insert(classRecord);
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
            let classExist = await this.getById(req.params.id, ['shift'])
            if(classExist.record)
            {
              try{
                let classRecord= classExist.record
                const {classid, sectionid} = req.body
                console.log("here");
                
                classRecord.shift.class.id(classid).section.id(sectionid).rewards.push(req.body)
                console.log("here");

                let record = await this.insert(classRecord);
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
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              let classRecord= classExist.record
              let classid = req.body.classid
              req.body._classid=classid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let rewardid = req.body.rewardid
              req.body._rewardid=rewardid
              let rewards = classRecord.shift.class.id(classid).section.id(sectionid).rewards.id(rewardid)
              classRecord.shift.class.id(classid).section.id(sectionid).rewards.remove(rewards)
              classRecord.shift.class.id(classid).section.id(sectionid).rewards.push(req.body)
              let record = await this.insert(classRecord);
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
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              let classRecord= classExist.record
              let classid = req.body.classid
              req.body._classid=classid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let rewardid = req.body.rewardid
              req.body._rewardid=rewardid
              let rewards = classRecord.shift.class.id(classid).section.id(sectionid).rewards.id(rewardid)
              classRecord.shift.class.id(classid).section.id(sectionid).rewards.remove(rewards)
              let record = await this.insert(classRecord);
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


    async addTeacher(req) {
      console.log(req);
             
            try 
        {    
            let classExist = await this.getById(req.params.id, ['shift'])
            if(classExist.record)
            {
              try{
                let classRecord= classExist.record
                const {classid,sectionid,Courseid} = req.body
                classRecord.shift.class.id(classid).section.id(sectionid).Courses.id(Courseid).teacher.push(req.body)
                let record = await this.insert(classRecord);
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
    async updateTeacher(req) {
      try 
      {    
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              let classRecord= classExist.record
              let classid = req.body.classid
              req.body._classid=classid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let Coursesid = req.body.Coursesid
              req.body._Coursesid=Coursesid
              let teacherid = req.body.teacherid
              req.body._teacherid=teacherid
              let teacher = classRecord.shift.class.id(classid).section.id(sectionid).Courses.id(Coursesid).teacher.id(teacherid)
              classRecord.shift.class.id(classid).section.id(sectionid).Courses.id(Coursesid).teacher.remove(teacher)
              classRecord.shift.class.id(classid).section.id(sectionid).Courses.id(Coursesid).teacher.push(req.body)
              let record = await this.insert(classRecord);
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
    async deleteTeacher(req) {
      try 
      {    
          let classExist = await this.getById(req.params.id, ['shift'])    
          if(classExist.record)
          {
            try{
              let classRecord= classExist.record
              let classid = req.body.classid
              req.body._classid=classid
              let sectionid = req.body.sectionid
              req.body._sectionid=sectionid
              let Coursesid = req.body.Coursesid
              req.body._Coursesid=Coursesid
              let teacherid = req.body.teacherid
              req.body._teacherid=teacherid
              let teacher = classRecord.shift.class.id(classid).section.id(sectionid).Courses.id(Coursesid).teacher.id(teacherid)
              classRecord.shift.class.id(classid).section.id(sectionid).Courses.id(Coursesid).teacher.remove(teacher)
              let record = await this.insert(classRecord);
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

export default SchoolClassService;