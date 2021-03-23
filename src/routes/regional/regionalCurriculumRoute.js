import express from 'express';
import regionalCurriculum from '../../controllers/regional/regionalCurriculum';
import curriculumSchema from '../../validators/Joi/schemas/regional/curriculm_schema';
import middleware from '../../validators/Joi/middleware';
import auth from '../../auth/auth';

const router = express.Router();
router.get('/showCourse/:id', regionalCurriculum.get) // this will replay the get for a course, course level metadata, reference, chapters
router.post('/addCourse', middleware(curriculumSchema.CourseSchema,  'body'), auth('Curriculum Developer'), regionalCurriculum.registerCourse);
router.get('/showCourses', regionalCurriculum.getAll)
router.get('/showCourses/:id', regionalCurriculum.get)
router.put('/updateCourse/:id', middleware(curriculumSchema.CourseSchema,  'body'), auth('Curriculum Developer'), regionalCurriculum.update);
router.delete('/deleteCourse/:id', regionalCurriculum.delete);

//metadata
router.post('/metadata/:id',middleware(curriculumSchema.MetadataSchema, 'body'), auth('Curriculum Developer'),regionalCurriculum.add);
router.get('/metadata/:id',regionalCurriculum.get);
router.put('/metadata/:id',middleware(curriculumSchema.MetadatawithIdSchema, 'body'), auth('Curriculum Developer'),regionalCurriculum.modify)
router.delete('/metadata/:id', middleware(curriculumSchema.DeleteMetadatawithIdSchema,  'body'), auth('Curriculum Developer'), regionalCurriculum.remove);

//references
//router.get('/showReferences', regionalCurriculum.getAll)
router.post('/references/:id', middleware(curriculumSchema.ReferenceSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.add);
router.put('/references/:id', middleware(curriculumSchema.ReferenceWithAnIdSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.modify);
router.delete('/references/:id', middleware(curriculumSchema.DeleteReferenceWithAnIdSchema,  'body'), auth('Curriculum Developer'), regionalCurriculum.remove);

//Coursechapters
router.put('/coursechapters/:id', middleware(curriculumSchema.CourseChapterswithIdSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.modify)
//router.post('/addcoursechapters/:id', middleware(curriculumSchema.CourseChaptersSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.addCourseChapters);
router.post('/coursechapters/:id', middleware(curriculumSchema.CourseChaptersSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.add);
router.delete('/coursechapters/:id', middleware(curriculumSchema.DeleteCourseChapterswithIdSchema,  'body'), auth('Curriculum Developer'), regionalCurriculum.remove);

//status
router.put('/updateStatus/:id', middleware(curriculumSchema.StatusSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.update)

//CourseType
router.put('/addCourseType/:id', middleware(curriculumSchema.CourseTypeSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.update)

//chap metadata
//router.get('/showMetadata', regionalCurriculum.filter)
router.post('/ChapterMetadata/:id', middleware(curriculumSchema.ChapterMetadataSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.add);
router.put('/ChapterMetadata/:id', middleware(curriculumSchema.ChapterMetadataSchemaWithId, 'body'), auth('Curriculum Developer'), regionalCurriculum.modify);
router.delete('/ChapterMetadata/:id', middleware(curriculumSchema.DeleteChapterMetadataSchemaWithId,  'body'), auth('Curriculum Developer'), regionalCurriculum.remove);


//Topics
//router.get('/showTopics', regionalCurriculum.getAll)
router.post('/courseTopic/:id', middleware(curriculumSchema.TopicSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.add);
router.put('/courseTopic/:id', middleware(curriculumSchema.TopicSchemaWithAnIdSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.modify);
router.delete('/courseTopic/:id', middleware(curriculumSchema.DeleteTopicSchemaWithAnIdSchema,  'body'), auth('Curriculum Developer'), regionalCurriculum.remove);
//topic metadata
//router.get('/showMetadata', regionalCurriculum.filter)
router.post('/topicMetadata/:id', middleware(curriculumSchema.TopicMetadataSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.add);
router.put('/topicMetadata/:id', middleware(curriculumSchema.TopicMetadataWithAnIdSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.modify);
router.delete('/topicMetadata/:id', middleware(curriculumSchema.DeleteTopicMetadataWithAnIdSchema,  'body'), auth('Curriculum Developer'), regionalCurriculum.remove);

//SubTopics
//router.get('/showSubTopics', regionalCurriculum.getAll)
router.post('/subTopic/:id', middleware(curriculumSchema.SubTopicSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.add);
router.put('/subTopic/:id', middleware(curriculumSchema.SubTopicWithAnIdSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.modify);
router.delete('/subTopic/:id', middleware(curriculumSchema.DeleteSubTopicWithAnIdSchema,  'body'), auth('Curriculum Developer'), regionalCurriculum.remove);
//SubTopic metadata
//router.get('/showMetadata', regionalCurriculum.filter)
router.post('/subTopicMetadata/:id', middleware(curriculumSchema.SubTopicMetadataSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.add);
router.put('/subTopicMetadata/:id', middleware(curriculumSchema.SubTopicMetadataWithAnIdSchema, 'body'), auth('Curriculum Developer'), regionalCurriculum.modify);
router.delete('/subTopicMetadata/:id', middleware(curriculumSchema.DeleteSubTopicMetadataWithAnIdSchema,  'body'), auth('Curriculum Developer'), regionalCurriculum.remove);




export default router;
