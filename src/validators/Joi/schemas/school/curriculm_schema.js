let Joi = require('joi')
const schemas = {  
  CourseSchema: Joi.object().keys({ 
    courseName: Joi.string().required().error(() => 'courseName is required!'),
    grade: Joi.string().required().error(() => 'grade must be a string'),
    field: Joi.string().required().error(() => 'field must be a string'),
    description: Joi.string().required().error(() => 'description must be a string')
   
  }),

  prerequestCourseIdSchema: Joi.object().keys({ 
    prerequisiteCourseId:Joi.string().required().error(() => 'Select the prerequisiteCourse'),

  }),

   StatusSchema: Joi.object().keys({
    status:Joi.string().required().error(() => 'status must be a string')
  }),

  CourseTypeSchema: Joi.object().keys({
    type:Joi.string().required().error(() => 'course type is not selected')
  }),

  MetadataSchema: Joi.object().keys({
    path: Joi.string().required().error(() => 'path must be a string'),
    metadataSequence: Joi.number().required().error(() => 'Sequence must be a number'),

  }),
  MetadatawithIdSchema: Joi.object().keys({
    metadataId:Joi.string().required().error(() => 'Select the metadata ID'),
    path: Joi.string().required().error(() => 'path must be a string'),
    metadataSequence: Joi.number().required().error(() => 'Sequence must be a number')
  }),
  DeleteMetadatawithIdSchema: Joi.object().keys({
    metadataId:Joi.string().required().error(() => 'Select the metadata ID')
  }),

  ReferenceSchema: Joi.object().keys({ 
    referenceType:Joi.string().required().error(() => 'type must be a video, books, audio'),
    reference:Joi.string().required().error(() => 'reference must be a string'),
 
  }),
  ReferenceWithAnIdSchema: Joi.object().keys({ 
    referenceId:Joi.string().required().error(() => 'Select reference'),
    referenceType:Joi.string().required().error(() => 'type must be a video, books, audio'),
    reference:Joi.string().required().error(() => 'reference must be a string'),
 
  }),
  DeleteReferenceWithAnIdSchema: Joi.object().keys({ 
    referenceId:Joi.string().required().error(() => 'Select reference')
  }),
  

  CourseChaptersSchema: Joi.object().keys({ 
     chapterName: Joi.string().required().error(() => 'chapterName is required!'),
     chapterSequence: Joi.number().required().error(() => 'Sequence must be a number'),
     prerequisiteChapterId: Joi.string().required().error(() => 'prerequisiteChapter is required')
  }),
  CourseChapterswithIdSchema: Joi.object().keys({
    chapterId:Joi.string().required().error(() => 'Select Chapter'),
    chapterName: Joi.string().required().error(() => 'chapterName is required!'),
    chapterSequence: Joi.number().required().error(() => 'Sequence must be a number'),
    prerequisiteChapterId: Joi.string().required().error(() => 'prerequisiteChapter is required')

  }),
  DeleteCourseChapterswithIdSchema: Joi.object().keys({
    chapterId:Joi.string().required().error(() => 'Select Chapter'),
   }),

  ChapterMetadataSchema: Joi.object().keys({ 
      chapterId:Joi.string().required().error(() => 'Select the chapter ID'),
      path: Joi.string().required().error(() => 'path must be a string'),
      metadataSequence: Joi.number().required().error(() => 'Sequence must be a number'),

  }),
  ChapterMetadataSchemaWithId: Joi.object().keys({ 
  chapterId:Joi.string().required().error(() => 'Select the chapter ID'),
  chapterMetadataId:Joi.string().required().error(() => 'Select the metadata ID'),
  path: Joi.string().required().error(() => 'path must be a string'),
  metadataSequence: Joi.number().required().error(() => 'Sequence must be a number')

  }),
  DeleteChapterMetadataSchemaWithId: Joi.object().keys({ 
  chapterId:Joi.string().required().error(() => 'Select the chapter'),
  chapterMetadataId:Joi.string().required().error(() => 'Select the metadata')
  }),


  TopicSchema:Joi.object().keys({
    chapterId:Joi.string().required().error(() => 'Select the chapter'),
    topicName: Joi.string().required().error(() => 'topicName must be a string'),
    topicSequence: Joi.number().required().error(() => 'Sequence must be a number'),
    prerequisiteTopicId: Joi.string().required().error(() => 'prerequisiteTopic is required')

  }),
  TopicSchemaWithAnIdSchema:Joi.object().keys({
     chapterId:Joi.string().required().error(() => 'Select the chapter'),
     topicId:Joi.string().required().error(() => 'Select the Topic'),
     topicName: Joi.string().required().error(() => 'topicName must be a string'),
     topicSequence: Joi.number().required().error(() => 'Sequence must be a number'),
     prerequisiteTopicId: Joi.string().required().error(() => 'prerequisiteTopic is required')

   }),
  DeleteTopicSchemaWithAnIdSchema:Joi.object().keys({
     chapterId:Joi.string().required().error(() => 'Select the chapter'),
     topicId:Joi.string().required().error(() => 'Select the Topic'),
    }),
 

  TopicMetadataSchema: Joi.object().keys({ 
      chapterId:Joi.string().required().error(() => 'Select the chapter'),
      topicId:Joi.string().required().error(() => 'Select the Topic'),
      path: Joi.string().required().error(() => 'path is required!'),
      metadataSequence: Joi.number().required().error(() => 'Sequence must be a number')
    }),
  TopicMetadataWithAnIdSchema: Joi.object().keys({ 
      chapterId:Joi.string().required().error(() => 'Select the chapter'),
      topicId:Joi.string().required().error(() => 'Select the Topic'),
      topicMetadataId:Joi.string().required().error(() => 'Select the metadata ID'),
      path: Joi.string().required().error(() => 'path is required!'),
      metadataSequence: Joi.number().required().error(() => 'Sequence must be a number')
    }),
  DeleteTopicMetadataWithAnIdSchema: Joi.object().keys({ 
      chapterId:Joi.string().required().error(() => 'Select the chapter'),
      topicId:Joi.string().required().error(() => 'Select the Topic'),
      topicMetadataId:Joi.string().required().error(() => 'Select the metadata ID')
   }),

  
  SubTopicSchema:Joi.object().keys({
     chapterId:Joi.string().required().error(() => 'Select the chapter'),
     topicId:Joi.string().required().error(() => 'Select the Topic'),
     subTopicName: Joi.string().required().error(() => 'subTopicName must be a string'),
     subTopicSequence: Joi.number().required().error(() => 'Sequence must be a number'),
     prerequisiteSubTopicId: Joi.string().required().error(() => 'prerequisiteSubTopic is required')

 
    }),
  SubTopicWithAnIdSchema:Joi.object().keys({
     chapterId:Joi.string().required().error(() => 'Select the chapter'),
     topicId:Joi.string().required().error(() => 'Select the Topic'),
     subTopicId:Joi.string().required().error(() => 'Select the subTopic'),
     subTopicName: Joi.string().required().error(() => 'subTopicName must be a string'),
     subTopicSequence: Joi.number().required().error(() => 'Sequence must be a number'),
     prerequisiteSubTopicId: Joi.string().required().error(() => 'prerequisiteSubTopic is required')

    }),
  DeleteSubTopicWithAnIdSchema:Joi.object().keys({
     chapterId:Joi.string().required().error(() => 'Select the chapter'),
     topicId:Joi.string().required().error(() => 'Select the Topic'),
     subTopicId:Joi.string().required().error(() => 'Select the subTopic'),
   }),
 
 
  SubTopicMetadataSchema: Joi.object().keys({
     chapterId:Joi.string().required().error(() => 'Select the chapter'),
     topicId:Joi.string().required().error(() => 'Select the Topic'),
     subTopicId:Joi.string().required().error(() => 'Select the subTopic'), 
     path: Joi.string().required().error(() => 'path must be a string'),
     metadataSequence: Joi.number().required().error(() => 'Sequence must be a number')
   }),
   SubTopicMetadataWithAnIdSchema: Joi.object().keys({
     chapterId:Joi.string().required().error(() => 'Select the chapter'),
     topicId:Joi.string().required().error(() => 'Select the Topic'),
     subTopicId:Joi.string().required().error(() => 'Select the subTopic'), 
     subTopicMetadataId:Joi.string().required().error(() => 'Select the metadata'),
     path: Joi.string().required().error(() => 'path must be a string'),
     metadataSequence: Joi.number().required().error(() => 'Sequence must be a number')
   }),
  DeleteSubTopicMetadataWithAnIdSchema: Joi.object().keys({
    chapterId:Joi.string().required().error(() => 'Select the chapter'),
    topicId:Joi.string().required().error(() => 'Select the Topic'),
    subTopicId:Joi.string().required().error(() => 'Select the subTopic'), 
    subTopicMetadataId:Joi.string().required().error(() => 'Select the metadata'),
   }),

  
};
export default schemas;
