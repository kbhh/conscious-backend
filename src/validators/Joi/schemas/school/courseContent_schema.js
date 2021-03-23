let Joi = require('joi')
const schemas = { 

  SelectCourseSchema: Joi.object().keys({ 
    courseId: Joi.string().required().error(() => 'Course is not selected'),
    chapter:{
      chapterId: Joi.string().required().error(() => 'Chapter is not selected'),
      subTopic:[{
        subtopicId: Joi.string().required().error(() => 'subtopicId is not selected'),
      }]
    }
   }),

  CourseContentSchema: Joi.object().keys({ 
  learningStyle: Joi.string().required().error(() => 'learningStyle is required!'),
  learningStyleSequence: Joi.number().required().error(() => 'sequence must be a string')
 }),

  ContentSchema: Joi.object().keys({ 
  contentType: Joi.string().required().error(() => 'contentType must be a string'),//video, audio, book, written modules
  contentdetails: Joi.string().required().error(() => 'contentdetails must be a string'), //includes all the contents
  contentPath: Joi.string().required().error(() => 'contentType must be a string'),//pth of the content
  contentSequence: Joi.number().required().error(() => 'contentType must be a number')//Contenet Sequence
 }),

 ItemSchema: Joi.object().keys({
  itemType: Joi.string().required().error(() => 'ItemType Type must be a string'), 
  description: Joi.string().required().error(() => 'description Name is required!')
 }),

 QuestionSchema: Joi.object().keys({ 
  
  question: Joi.string().required().error(() => 'question must be a string'),
  questionPath: Joi.string().required().error(() => 'question path is required!'),
  questionType: Joi.string().required().error(() => 'questionType is required!'),
  difficulty: Joi.string().required().error(() => 'difficulty is required!')

 }),

 QuestionSchema: Joi.object().keys({ 
  answercontent: Joi.string().required().error(() => 'answerType is required!'),
  answerPath: Joi.string().required().error(() => 'answer path is required!'),
  feedback: Joi.string().required().error(() => 'explanation is required!'),
  correctAnswer: Joi.boolean().required().error(() => 'correctAnswer must be a boolean')
 }),
 

 linkAppSchema: Joi.object().keys({
  App: Joi.string().required().error(() => 'App Type must be a string'), 
 }),

}; 
export default schemas;
