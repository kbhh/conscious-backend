import express from 'express';
import schoolCompetition from '../../controllers/school/schoolCompetition';
import competitionSchema from '../../validators/Joi/schemas/school/competition_schema';
import middleware from '../../validators/Joi/middleware';
import auth from '../../auth/auth';

const router = express.Router();


router.post('/addCompetition', middleware(competitionSchema.CompetitionSchema, 'body'), auth('Content Developer'), schoolCompetition.insert);
router.get('/showCompetitions', schoolCompetition.getAll)
router.get('/showCompetition/:id', schoolCompetition.getById)
router.put('/updateCompetition/:id', middleware(competitionSchema.CompetitionSchema, 'body'), auth('Content Developer'), schoolCompetition.update);
router.delete('/deleteCompetition/:id', schoolCompetition.delete);



//Add grade
//router.get('/showGrades', schoolCompetition.filter)
router.post('/addGrade/:id', middleware(competitionSchema.GradeSchema,'body'), auth('Content Developer'), schoolCompetition.addGrade);
router.put('/addGrade/:id', middleware(competitionSchema.GradeSchemaWithId,'body'), auth('Content Developer'), schoolCompetition.updateGrade);
router.delete('/deleteGrade/:id', middleware(competitionSchema.DeletegradeSchemaWithId, 'body'), auth('Content Developer'), schoolCompetition.deleteGrade);

//Add Section
//router.get('/showSections', schoolCompetition.filter)
router.post('/addSection/:id', middleware(competitionSchema.SectionSchema,'body'), auth('Content Developer'), schoolCompetition.addSection);
router.put('/addSection/:id', middleware(competitionSchema.SectionSchemaWithId,'body'), auth('Content Developer'), schoolCompetition.updateSection);
router.delete('/deleteSection/:id', middleware(competitionSchema.DeleteSectionSchemaWithId, 'body'), auth('Content Developer'), schoolCompetition.deleteSection);

//Add Student
//router.get('/showStudents', schoolCompetition.filter)
router.post('/addStudent/:id', middleware(competitionSchema.StudentSchema,'body'), auth('Content Developer'), schoolCompetition.addStudents);
router.put('/addStudent/:id', middleware(competitionSchema.StudentSchemaWithId,'body'), auth('Content Developer'), schoolCompetition.updateStudents);
router.delete('/deleteStudent/:id', middleware(competitionSchema.DeleteStudentSchemaWithId, 'body'), auth('Content Developer'), schoolCompetition.deleteStudents);

//Add Course
//router.get('/showCourses', schoolCompetition.filter)
router.post('/addCourse/:id', middleware(competitionSchema.CourseSchema,'body'), auth('Content Developer'), schoolCompetition.addCourses);
router.put('/addCourse/:id', middleware(competitionSchema.CourseSchemaWithId,'body'), auth('Content Developer'), schoolCompetition.updateCourses);
router.delete('/deleteCourse/:id', middleware(competitionSchema.DeleteCourseSchemaWithId, 'body'), auth('Content Developer'), schoolCompetition.deleteCourses);

//Add MarkSetting
//router.get('/showMarkSettings', schoolCompetition.filter)
router.post('/addMarkSetting/:id', middleware(competitionSchema.MarkSettingSchema,'body'), auth('Content Developer'), schoolCompetition.addMarkSetting);
router.put('/addMarkSetting/:id', middleware(competitionSchema.MarkSettingSchemaWithId,'body'), auth('Content Developer'), schoolCompetition.updateMarkSetting);
router.delete('/deleteMarkSetting/:id', middleware(competitionSchema.DeleteMarkSettingSchemaWithId, 'body'), auth('Content Developer'), schoolCompetition.deleteMarkSetting);

//Add Test
//router.get('/showTests', schoolCompetition.filter)
router.post('/addTest/:id', middleware(competitionSchema.TestSchema,'body'), auth('Content Developer'), schoolCompetition.addTest);
router.put('/addTest/:id', middleware(competitionSchema.TestSchemaWithId,'body'), auth('Content Developer'), schoolCompetition.updateTest);
router.delete('/deleteTest/:id', middleware(competitionSchema.DeleteTestSchemaWithId, 'body'), auth('Content Developer'), schoolCompetition.deleteTest);

//Add Reward
//router.get('/showRewards', schoolCompetition.filter)
router.post('/addReward/:id', middleware(competitionSchema.RewardSchema,'body'), auth('Content Developer'), schoolCompetition.addReward);
router.put('/addReward/:id', middleware(competitionSchema.RewardSchemaWithId,'body'), auth('Content Developer'), schoolCompetition.updateReward);
router.delete('/deleteReward/:id', middleware(competitionSchema.DeleteRewardSchemaWithId, 'body'), auth('Content Developer'), schoolCompetition.deleteReward);


export default router;
