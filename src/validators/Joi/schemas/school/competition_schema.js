let Joi = require('joi')
const schemas = {
 
  CompetitionSchema: Joi.object().keys({ 
    academicYear:{
      year: Joi.number().required().error(() => 'year is required, must be a number')
    }
  }),
   
  
  GradeSchema: Joi.object().keys({
    name: Joi.string().required().error(() => 'grade name is required!'),
  }),
  GradeSchemaWithId: Joi.object().keys({
    id:Joi.string().required().error(() => 'Select the meta ID'),
    name: Joi.string().required().error(() => 'grade name is required!'),
  }),
  DeletegradeSchemaWithId: Joi.object().keys({
    id:Joi.string().required().error(() => 'Select the grade ID')
  }),


//modifications on the string dates... 
  SectionSchema: Joi.object().keys({ 
    gradeid:Joi.string().required().error(() => 'select the grade'),
    name:Joi.string().required().error(() => 'name must be a string'),
    competitionDate:Joi.date().required().error(() => 'competitionDate must be a date'),
    startDate:Joi.date().required().error(() => 'startDate must be a date'),
    startTime:Joi.string().required().error(() => 'startTime must be a String'),
    dueDate:Joi.date().required().error(() => 'dueDate must be a date'),
    endTime:Joi.string().required().error(() => 'endTime must be a String'),
 
  }),
  SectionSchemaWithId: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select the grade'),
    name:Joi.string().required().error(() => 'name must be a string'),
    competitionDate:Joi.date().required().error(() => 'competitionDate must be a date'),
    startDate:Joi.date().required().error(() => 'startDate must be a date'),
    startTime:Joi.string().required().error(() => 'startTime must be a String'),
    dueDate:Joi.date().required().error(() => 'dueDate must be a date'),
    endTime:Joi.string().required().error(() => 'endTime must be a String'),
 
  }),
  DeleteSectionSchemaWithId: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade '),
    
  }),
  
  StudentSchema: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade '),
    studentId: Joi.string().required().error(() => 'chapterName is required!'),
    result: Joi.number().required().error(() => 'Sequence must be a number'),

  }),

  StudentSchemaWithId: Joi.object().keys({
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade '),
    studentsid:Joi.string().required().error(() => 'Select Chapter'),
    studentId: Joi.string().required().error(() => 'chapterName is required!'),
    result: Joi.number().required().error(() => 'Sequence must be a number'),
  }),
  DeleteStudentSchemaWithId: Joi.object().keys({
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade '),
    studentsid:Joi.string().required().error(() => 'Select Chapter'),
    }),

   CourseSchema: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade '),
    name: Joi.string().required().error(() => 'Sequence must be a number'),
    courseId: Joi.string().required().error(() => 'chapterName is required!'),
        }),
 CourseSchemaWithId: Joi.object().keys({ 
  sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade '),
    courseId: Joi.string().required().error(() => 'chapterName is required!'),
    courseID:Joi.string().required().error(() => 'select course'),
        }),
  DeleteCourseSchemaWithId: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade'),
    courseId: Joi.string().required().error(() => 'chapterName is required!'),
    courseID:Joi.string().required().error(() => 'select course'),
   }),

   MarkSettingSchema: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade'),
    easy:Joi.number().required().error(() => 'difficulty must be a number'),
    medium:Joi.number().required().error(() => 'difficulty must be a number'),
    hard:Joi.number().required().error(() => 'difficulty must be a number'),
    
        }),
 MarkSettingSchemaWithId: Joi.object().keys({ 
  coursesid:Joi.string().required().error(() => 'select course'),
  sectionid:Joi.string().required().error(() => 'select section'),
  gradeid:Joi.string().required().error(() => 'select grade'),
  easy:Joi.number().required().error(() => 'difficulty must be a number'),
  medium:Joi.number().required().error(() => 'difficulty must be a number'),
  hard:Joi.number().required().error(() => 'difficulty must be a number'),
         }),
  DeleteMarkSettingSchemaWithId: Joi.object().keys({ 
    coursesid:Joi.string().required().error(() => 'select course'),
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade'),
   }),

   TestSchema: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade'),
    Test: Joi.string().required().error(() => 'Test is required!'),
        }),
 TestSchemaWithId: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade'),
    Test: Joi.string().required().error(() => 'Test is required!'),
    TestID:Joi.string().required().error(() => 'select Test'),
        }),
  DeleteTestSchemaWithId: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade'),
    Test: Joi.string().required().error(() => 'Test is required!'),
    TestID:Joi.string().required().error(() => 'select Test'),
   }),


  RewardSchema:Joi.object().keys({
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade'),
    name: Joi.string().required().error(() => 'reward must be a string'),
    description: Joi.string().required().error(() => 'description must be a number'),

  }),

  RewardSchemaWithId:Joi.object().keys({
    rewardid:Joi.string().required().error(() => 'Select the chapter'),
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade'),
    name: Joi.string().required().error(() => 'reward must be a string'),
    description: Joi.string().required().error(() => 'description must be a number'),
}),
   DeleteRewardSchemaWithId:Joi.object().keys({
    rewardid:Joi.string().required().error(() => 'Select the chapter'),
    sectionid:Joi.string().required().error(() => 'select section'),
    gradeid:Joi.string().required().error(() => 'select grade'),
    })
  
};
export default schemas;
