import express from 'express';
import regionalCourseContent from '../../controllers/regional/regionalCourseContentController';
import courseContentSchema from '../../validators/Joi/schemas/regional/courseContent_schema';
import middleware from '../../validators/Joi/middleware';
import auth from '../../auth/auth';

const router = express.Router();

//add course
router.post('/addCourse', auth('Content Developer'), middleware(courseContentSchema.courseSchema,'body'), regionalCourseContent.insert);
router.get('/showCourse/:id', auth('Content Developer'), regionalCourseContent.getByField)
router.get('/showCourses', auth('Content Developer'), regionalCourseContent.getAll)
router.put('/updateCourse/:id', auth('Content Developer'), regionalCourseContent.update);
router.delete('/deleteCourse/:id', auth('Content Developer'), regionalCourseContent.delete);

//add chapter,topic,subTopic,content,working path...
router.post('/addChapter/:id', auth('Content Developer'), middleware(courseContentSchema.chapterSchema, 'body', 'query'), regionalCourseContent.add)
router.get('/showChapter/:id', auth('Content Developer'), regionalCourseContent.get)
router.put('/updateChapter/:id', auth('Content Developer'), regionalCourseContent.modify);
router.delete('/deleteChapter/:id', auth('Content Developer'), regionalCourseContent.remove);

router.post('/addTopic/:id', auth('Content Developer'), regionalCourseContent.add)
router.get('/showTopic/:id', auth('Content Developer'), regionalCourseContent.get)
router.put('/updateTopic/:id', auth('Content Developer'), regionalCourseContent.modify);
router.delete('/deleteTopic/:id', auth('Content Developer'), regionalCourseContent.remove);

router.post('/addSubTopic/:id', auth('Content Developer'), regionalCourseContent.add)
router.get('/showSubTopic/:id', auth('Content Developer'), regionalCourseContent.get)
router.put('/updateSubTopic/:id', auth('Content Developer'), regionalCourseContent.modify);
router.delete('/deleteSubTopic/:id', auth('Content Developer'), regionalCourseContent.remove);

router.post('/addContent/:id', auth('Content Developer'), regionalCourseContent.add)
router.get('/showContent/:id', auth('Content Developer'), regionalCourseContent.get)
router.put('/updateContent/:id', auth('Content Developer'), regionalCourseContent.modify);
router.delete('/deleteContent/:id', auth('Content Developer'), regionalCourseContent.remove);

export default router;
