import express from 'express';
import schoolCurriculum from '../../controllers/school/schoolCurriculum';
import curriculumSchema from '../../validators/Joi/schemas/school/curriculm_schema';
import middleware from '../../validators/Joi/middleware';
import auth from '../../auth/auth';

const router = express.Router();
//, auth('Curriculum Developer') ignored
router.get('/showCourse/:id', schoolCurriculum.get) // this will replay the get for a course, course level metadata, reference, chapters

router.post('/addCourse', middleware(curriculumSchema.CourseSchema,  'body'), auth('Curriculum Developer'), schoolCurriculum.registerCourse);
router.get('/showCourses', schoolCurriculum.getAll)
router.put('/updateCourse/:id', middleware(curriculumSchema.CourseSchema,  'body'), auth('Curriculum Developer'), schoolCurriculum.update);
router.delete('/deleteCourse/:id', schoolCurriculum.delete);

//metadata
router.post('/metadata/:id',middleware(curriculumSchema.MetadataSchema, 'body'), auth('Curriculum Developer'),schoolCurriculum.add);
router.get('/metadata/:id',schoolCurriculum.get);
router.put('/metadata/:id',middleware(curriculumSchema.MetadatawithIdSchema, 'body'), auth('Curriculum Developer'),schoolCurriculum.modify)
router.delete('/metadata/:id', middleware(curriculumSchema.DeleteMetadatawithIdSchema,  'body'), auth('Curriculum Developer'), schoolCurriculum.remove);

//references
//router.get('/showReferences', schoolCurriculum.getAll)
router.post('/references/:id', middleware(curriculumSchema.ReferenceSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.add);
router.put('/references/:id', middleware(curriculumSchema.ReferenceWithAnIdSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.modify);
router.delete('/references/:id', middleware(curriculumSchema.DeleteReferenceWithAnIdSchema,  'body'), auth('Curriculum Developer'), schoolCurriculum.remove);

//Coursechapters
router.put('/coursechapters/:id', middleware(curriculumSchema.CourseChapterswithIdSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.modify)
//router.post('/addcoursechapters/:id', middleware(curriculumSchema.CourseChaptersSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.addCourseChapters);
router.post('/coursechapters/:id', middleware(curriculumSchema.CourseChaptersSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.add);
router.delete('/coursechapters/:id', middleware(curriculumSchema.DeleteCourseChapterswithIdSchema,  'body'), auth('Curriculum Developer'), schoolCurriculum.remove);

//status
router.put('/updateStatus/:id', middleware(curriculumSchema.StatusSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.update)

//CourseType
router.put('/addCourseType/:id', middleware(curriculumSchema.CourseTypeSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.update)

//chap metadata
//router.get('/showMetadata', schoolCurriculum.filter)
router.post('/ChapterMetadata/:id', middleware(curriculumSchema.ChapterMetadataSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.add);
router.put('/ChapterMetadata/:id', middleware(curriculumSchema.ChapterMetadataSchemaWithId, 'body'), auth('Curriculum Developer'), schoolCurriculum.modify);
router.delete('/ChapterMetadata/:id', middleware(curriculumSchema.DeleteChapterMetadataSchemaWithId,  'body'), auth('Curriculum Developer'), schoolCurriculum.remove);


//Topics
//router.get('/showTopics', schoolCurriculum.getAll)
router.post('/courseTopic/:id', middleware(curriculumSchema.TopicSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.add);
router.put('/courseTopic/:id', middleware(curriculumSchema.TopicSchemaWithAnIdSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.modify);
router.delete('/courseTopic/:id', middleware(curriculumSchema.DeleteTopicSchemaWithAnIdSchema,  'body'), auth('Curriculum Developer'), schoolCurriculum.remove);
//topic metadata
//router.get('/showMetadata', schoolCurriculum.filter)
router.post('/topicMetadata/:id', middleware(curriculumSchema.TopicMetadataSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.add);
router.put('/topicMetadata/:id', middleware(curriculumSchema.TopicMetadataWithAnIdSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.modify);
router.delete('/topicMetadata/:id', middleware(curriculumSchema.DeleteTopicMetadataWithAnIdSchema,  'body'), auth('Curriculum Developer'), schoolCurriculum.remove);

//SubTopics
//router.get('/showSubTopics', schoolCurriculum.getAll)
router.post('/subTopic/:id', middleware(curriculumSchema.SubTopicSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.add);
router.put('/subTopic/:id', middleware(curriculumSchema.SubTopicWithAnIdSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.modify);
router.delete('/subTopic/:id', middleware(curriculumSchema.DeleteSubTopicWithAnIdSchema,  'body'), auth('Curriculum Developer'), schoolCurriculum.remove);
//SubTopic metadata
//router.get('/showMetadata', schoolCurriculum.filter)
router.post('/subTopicMetadata/:id', middleware(curriculumSchema.SubTopicMetadataSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.add);
router.put('/subTopicMetadata/:id', middleware(curriculumSchema.SubTopicMetadataWithAnIdSchema, 'body'), auth('Curriculum Developer'), schoolCurriculum.modify);
router.delete('/subTopicMetadata/:id', middleware(curriculumSchema.DeleteSubTopicMetadataWithAnIdSchema,  'body'), auth('Curriculum Developer'), schoolCurriculum.remove);




export default router;
