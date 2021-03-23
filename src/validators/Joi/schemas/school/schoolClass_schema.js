let Joi = require('joi')
const schemas = {

  ShiftSchema: Joi.object().keys({ 
      name: Joi.string().required().error(() => 'Shift name is required!'),
      educationYear: Joi.number().required().error(() => ' educationYear is required!'),
      semester: Joi.number().required().error(() => ' semester is required!'),      
  }),

  
  ClassSchema: Joi.object().keys({
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    name: Joi.string().required().error(() => 'Class name is required!'),  
  }),
  ClassSchemaWithId: Joi.object().keys({
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    classid:Joi.string().required().error(() => 'Select the class ID'),
    name: Joi.string().required().error(() => 'Class name is required!'),
  }),
  DeleteClassSchemaWithId: Joi.object().keys({
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    classid:Joi.string().required().error(() => 'Select the class ID'),
  }),


  SectionSchema: Joi.object().keys({ 
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    classid:Joi.string().required().error(() => 'Select the class ID'),
    section:Joi.string().required().error(() => 'section must be a string')
  }),
  SectionSchemaWithId: Joi.object().keys({ 
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select the class'),
    section:Joi.string().required().error(() => 'section must be a string')

  }),
  DeleteSectionSchemaWithId: Joi.object().keys({ 
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    
  }),
  
  StudentSchema: Joi.object().keys({ 
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    studentId: Joi.string().required().error(() => 'select student'),

  }),

  StudentSchemaWithId: Joi.object().keys({
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    stid:Joi.string().required().error(() => 'student id is required'),
    studentId: Joi.string().required().error(() => 'select student'),
  }),
  DeleteStudentSchemaWithId: Joi.object().keys({
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    stid:Joi.string().required().error(() => 'student id is required'),
    }),

    CourseSchema: Joi.object().keys({ 
      shiftid: Joi.string().required().error(() => 'shift is not selected!'),
      sectionid:Joi.string().required().error(() => 'Select section'),
      classid:Joi.string().required().error(() => 'select class'),
      courseId: Joi.string().required().error(() => 'courseId is required!'),
  
    }),
  
    CourseSchemaWithId: Joi.object().keys({
      shiftid: Joi.string().required().error(() => 'shift is not selected!'),
      sectionid:Joi.string().required().error(() => 'Select section'),
      classid:Joi.string().required().error(() => 'select class'),
      crid:Joi.string().required().error(() => 'course id is required'),
      courseId: Joi.string().required().error(() => 'courseId is required!'),
    }),
    DeleteCourseSchemaWithId: Joi.object().keys({
      shiftid: Joi.string().required().error(() => 'shift is not selected!'),
      sectionid:Joi.string().required().error(() => 'Select section'),
      classid:Joi.string().required().error(() => 'select class'),
      crid:Joi.string().required().error(() => 'course id is required'),
      }),

   //modifications on the string dates... 


   WorkingpathsSchema: Joi.object().keys({ 
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    courseid:Joi.string().required().error(() => 'course id is required'),
    workingPathId: Joi.string().required().error(() => 'workingPathId is required!'),
    // startDate:Joi.date().required().error(() => 'startDate must be a date'),
    startTime:Joi.string().required().error(() => 'startTime must be a String'),
    // dueDate:Joi.date().required().error(() => 'dueDate must be a date'),
    endTime:Joi.string().required().error(() => 'endTime must be a String')
    }),

  WorkingpathsSchemaWithId: Joi.object().keys({ 
    wpid:Joi.string().required().error(() => 'workingPath not selected '),
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    courseid:Joi.string().required().error(() => 'course id is required'),
    workingPathId: Joi.string().required().error(() => 'workingPathId is required!'),
    // startDate:Joi.date().required().error(() => 'startDate must be a date'),
    startTime:Joi.string().required().error(() => 'startTime must be a String'),
    // dueDate:Joi.date().required().error(() => 'dueDate must be a date'),
    endTime:Joi.string().required().error(() => 'endTime must be a String')
     }),

  DeleteWorkingpathsSchemaWithId: Joi.object().keys({ 
    wpid:Joi.string().required().error(() => 'workingPath not selected '),
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    courseid:Joi.string().required().error(() => 'course id is required'),
    }),

   ControlpointsSchema: Joi.object().keys({ 
    wpid:Joi.string().required().error(() => 'workingPath not selected '),
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    courseid:Joi.string().required().error(() => 'course id is required'),
    cpId: Joi.string().required().error(() => 'cpId is required!'),
    // startDate:Joi.date().required().error(() => 'startDate must be a date'),
    startTime:Joi.string().required().error(() => 'startTime must be a String'),
    // dueDate:Joi.date().required().error(() => 'dueDate must be a date'),
    endTime:Joi.string().required().error(() => 'endTime must be a String')
   }),

  ControlpointsSchemaWithId: Joi.object().keys({ 
    cpid:Joi.string().required().error(() => 'cpid not selected '),
    wpid:Joi.string().required().error(() => 'workingPath not selected '),
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    courseid:Joi.string().required().error(() => 'course id is required'),
    cpId: Joi.string().required().error(() => 'cpId is required!'),
    // startDate:Joi.date().required().error(() => 'startDate must be a date'),
    startTime:Joi.string().required().error(() => 'startTime must be a String'),
    // dueDate:Joi.date().required().error(() => 'dueDate must be a date'),
    endTime:Joi.string().required().error(() => 'endTime must be a String')
   }),
  DeleteControlpointsSchemaWithId: Joi.object().keys({ 
    cpid:Joi.string().required().error(() => 'cpid not selected '),
    wpid:Joi.string().required().error(() => 'workingPath not selected '),
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    courseid:Joi.string().required().error(() => 'course id is required'),
    }),

   AssignmentSchema: Joi.object().keys({ 
    wpid:Joi.string().required().error(() => 'workingPath not selected '),
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    courseid:Joi.string().required().error(() => 'course id is required'),
    assignmentId: Joi.string().required().error(() => 'assignmentId is required!'),
    // startDate:Joi.date().required().error(() => 'startDate must be a date'),
    startTime:Joi.string().required().error(() => 'startTime must be a String'),
    // dueDate:Joi.date().required().error(() => 'dueDate must be a date'),
    endTime:Joi.string().required().error(() => 'endTime must be a String')
    }),
 AssignmentSchemaWithId: Joi.object().keys({ 
    assid:Joi.string().required().error(() => 'assid not selected '),
    wpid:Joi.string().required().error(() => 'workingPath not selected '),
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    courseid:Joi.string().required().error(() => 'course id is required'),
    assignmentId: Joi.string().required().error(() => 'assignmentId is required!'),
    // startDate:Joi.date().required().error(() => 'startDate must be a date'),
    startTime:Joi.string().required().error(() => 'startTime must be a String'),
    // dueDate:Joi.date().required().error(() => 'dueDate must be a date'),
    endTime:Joi.string().required().error(() => 'endTime must be a String')
   }),
  DeleteAssignmentSchemaWithId: Joi.object().keys({ 
    assid:Joi.string().required().error(() => 'assid not selected '),
    wpid:Joi.string().required().error(() => 'workingPath not selected '),
    shiftid: Joi.string().required().error(() => 'shift is not selected!'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    courseid:Joi.string().required().error(() => 'course id is required'),
     }),






   TeachersSchema: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    Teachers: Joi.string().required().error(() => 'chapterName is required!'),
        }),
 TeachersSchemaWithId: Joi.object().keys({ 
  sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    Teachers: Joi.string().required().error(() => 'chapterName is required!'),
    TeachersID:Joi.string().required().error(() => 'type must be a video, books, audio'),
        }),
  DeleteTeachersSchemaWithId: Joi.object().keys({ 
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'type must be a video, books, audio'),
    Teachers: Joi.string().required().error(() => 'chapterName is required!'),
    TeachersID:Joi.string().required().error(() => 'type must be a video, books, audio'),
   }),


  RewardSchema:Joi.object().keys({
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    name: Joi.string().required().error(() => 'Sequence must be a number'),
    description: Joi.string().required().error(() => 'Sequence must be a number'),

  }),

  RewardSchemaWithId:Joi.object().keys({
    rewardid:Joi.string().required().error(() => 'Select the reward'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    name: Joi.string().required().error(() => 'Sequence must be a number'),
    description: Joi.string().required().error(() => 'Sequence must be a number'),
}),
   DeleteRewardSchemaWithId:Joi.object().keys({
    rewardid:Joi.string().required().error(() => 'Select the reward'),
    sectionid:Joi.string().required().error(() => 'Select section'),
    classid:Joi.string().required().error(() => 'select class'),
    })
  
};
export default schemas;
