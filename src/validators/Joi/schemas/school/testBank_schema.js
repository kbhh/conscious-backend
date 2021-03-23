let Joi = require('joi')
const schemas = { 

  SelectCourseSchema: Joi.object().keys({ 
    courseId: Joi.string().required().error(() => 'Course is not selected')
   }),

   GradesSchema: Joi.object().keys({
    grade: Joi.string().required().error(() => 'grade name is required!'),
    mimimumMark: Joi.number().required().error(() => 'mimimumMark must be a number'),
    maximumMark: Joi.number().required().error(() => 'maximumMark must be a number')
  }),

  GradesSchemaWithId: Joi.object().keys({
    id:Joi.string().required().error(() => 'Select the grade ID'),
    grade: Joi.string().required().error(() => 'grade name is required!'),
    mimimumMark: Joi.number().required().error(() => 'mimimumMark must be a number'),
    maximumMark: Joi.number().required().error(() => 'maximumMark must be a number')
  }),
  DeletegradeSchemaWithId: Joi.object().keys({
    id:Joi.string().required().error(() => 'Select the grade ID')
  }),


//modifications on the string dates... 
  GradeWeightsSchema: Joi.object().keys({ 
    gradeid:Joi.string().required().error(() => 'select the grade'),
    testId:Joi.string().required().error(() => 'testId must be a string'),
    assignmentId:Joi.string().required().error(() => 'assignmentId must be a string'),
    weight: Joi.number().required().error(() => 'weight must be a number')
  }),
  GradeWeightsSchemaWithId: Joi.object().keys({ 
    gradeWeightsid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'select the grade'),
    testId:Joi.string().required().error(() => 'testId must be a string'),
    assignmentId:Joi.string().required().error(() => 'assignmentId must be a string'),
    weight: Joi.number().required().error(() => 'weight must be a number')
  }),
  DeleteGradeWeightsSchemaWithId: Joi.object().keys({ 
    gradeWeightsid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
    
  }),
  
  StudentSchema: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
     //studentId: Joi.string().required().error(() => 'chapterName is required!'),
     result: Joi.number().required().error(() => 'Sequence must be a number'),

  }),

  StudentSchemaWithId: Joi.object().keys({
    sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
    studentsid:Joi.string().required().error(() => 'Select Chapter'),
         //studentId: Joi.string().required().error(() => 'chapterName is required!'),
    result: Joi.number().required().error(() => 'Sequence must be a number'),
  }),
  DeleteStudentSchemaWithId: Joi.object().keys({
    sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
    studentsid:Joi.string().required().error(() => 'Select Chapter'),
    }),

   CourseSchema: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
    name: Joi.string().required().error(() => 'Sequence must be a number'),

    //courseId: Joi.string().required().error(() => 'chapterName is required!'),
        }),
 CourseSchemaWithId: Joi.object().keys({ 
  sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
         //courseId: Joi.string().required().error(() => 'chapterName is required!'),
    courseID:Joi.string().required().error(() => 'type must be a video, books, audio'),
        }),
  DeleteCourseSchemaWithId: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
         //courseId: Joi.string().required().error(() => 'chapterName is required!'),
    courseID:Joi.string().required().error(() => 'type must be a video, books, audio'),
   }),

   MarkSettingSchema: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
    easy:Joi.number().required().error(() => 'type must be a video, books, audio'),
    medium:Joi.number().required().error(() => 'type must be a video, books, audio'),
    hard:Joi.number().required().error(() => 'type must be a video, books, audio'),
    
        }),
 MarkSettingSchemaWithId: Joi.object().keys({ 
  coursesid:Joi.string().required().error(() => 'Select reference'),
  sectionid:Joi.string().required().error(() => 'Select reference'),
  gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
  easy:Joi.number().required().error(() => 'type must be a video, books, audio'),
  medium:Joi.number().required().error(() => 'type must be a video, books, audio'),
  hard:Joi.number().required().error(() => 'type must be a video, books, audio'),
         }),
  DeleteMarkSettingSchemaWithId: Joi.object().keys({ 
    coursesid:Joi.string().required().error(() => 'Select reference'),
    sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
   }),

   TestSchema: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
         //Test: Joi.string().required().error(() => 'chapterName is required!'),
        }),
 TestSchemaWithId: Joi.object().keys({ 
  sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
         //Test: Joi.string().required().error(() => 'chapterName is required!'),
    TestID:Joi.string().required().error(() => 'type must be a video, books, audio'),
        }),
  DeleteTestSchemaWithId: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
         //Test: Joi.string().required().error(() => 'chapterName is required!'),
    TestID:Joi.string().required().error(() => 'type must be a video, books, audio'),
   }),


  RewardSchema:Joi.object().keys({
    sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
    name: Joi.string().required().error(() => 'Sequence must be a number'),
    description: Joi.string().required().error(() => 'Sequence must be a number'),

  }),

  RewardSchemaWithId:Joi.object().keys({
    rewardid:Joi.string().required().error(() => 'Select the chapter'),
    sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
    name: Joi.string().required().error(() => 'Sequence must be a number'),
    description: Joi.string().required().error(() => 'Sequence must be a number'),
}),
   DeleteRewardSchemaWithId:Joi.object().keys({
    rewardid:Joi.string().required().error(() => 'Select the chapter'),
    sectionid:Joi.string().required().error(() => 'Select reference'),
    gradeid:Joi.string().required().error(() => 'type must be a video, books, audio'),
    })
  

}; 
export default schemas;
