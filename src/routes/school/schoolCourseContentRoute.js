import express from 'express';
import schoolCourseContent from '../../controllers/school/schoolCourseContentController';
import courseContentSchema from '../../validators/Joi/schemas/school/courseContent_schema';
import middleware from '../../validators/Joi/middleware';
import auth from '../../auth/auth';

const router = express.Router();
//select the course, chapter and subtopic
router.post('/SelectCourseContent', middleware(courseContentSchema.SelectCourseSchema,'body'), schoolCourseContent.insert);
router.get('/ShowCourseContent',  auth('Content Developer'), schoolCourseContent.getAll)
router.put('/UpdateCourseContent/:id', middleware(courseContentSchema.SelectCourseSchema,'body'), auth('Content Developer'), schoolCourseContent.update);
router.delete('/DeleteCourseContent/:id',  auth('Content Developer'), schoolCourseContent.delete);

//add Learning Styles,sequences
router.post('/AddCourseContent', middleware(courseContentSchema.CourseContentSchema,'body'), schoolCourseContent.insert);
router.get('/ShowCourseContent',  auth('Content Developer'), schoolCourseContent.getAll)
router.put('/UpdateCourseContent/:id', middleware(courseContentSchema.CourseContentSchema,'body'), auth('Content Developer'), schoolCourseContent.update);
router.delete('/DeleteCourseContent/:id',  auth('Content Developer'), schoolCourseContent.delete);

//add content detail and content type
router.get('/ShowContent',  auth('Content Developer'), schoolCourseContent.getAll)
router.put('/UpdateContent/:id', middleware(courseContentSchema.ContentSchema,'body'), auth('Content Developer'), schoolCourseContent.update);
router.delete('/DeleteContent/:id',  auth('Content Developer'), schoolCourseContent.delete);

//Add Item Type...can be Assignment, quiz, test
router.get('/ShowItemType',  auth('Content Developer'), schoolCourseContent.getAll)
router.put('/UpdateItemType/:id', middleware(courseContentSchema.ItemSchema,'body'), auth('Content Developer'), schoolCourseContent.update);
router.delete('/DeleteItemType/:id',  auth('Content Developer'), schoolCourseContent.delete);

//Add Questions, Question Types, Answers, points, number of attempts
router.get('/ShowQuestions',  auth('Content Developer'), schoolCourseContent.getAll)
router.put('/UpdateQuestions/:id', middleware(courseContentSchema.QuestionSchema,'body'), auth('Content Developer'), schoolCourseContent.update);
router.delete('/DeleteQuestions/:id',  auth('Content Developer'), schoolCourseContent.delete);

//link apps
router.get('/AddApp',  auth('Content Developer'), schoolCourseContent.getAll)
router.put('/UpdateApp/:id', middleware(courseContentSchema.linkAppSchema,'body'), auth('Content Developer'), schoolCourseContent.update);
router.delete('/DeleteApp/:id',  auth('Content Developer'), schoolCourseContent.delete);

export default router;
