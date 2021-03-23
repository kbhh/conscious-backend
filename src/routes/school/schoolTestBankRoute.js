import express from 'express';
import schoolTestBank from '../../controllers/school/schoolTestBank';
import testBankSchema from '../../validators/Joi/schemas/school/testBank_schema';
import middleware from '../../validators/Joi/middleware';
import auth from '../../auth/auth';

const router = express.Router();

//select the course, chapter and subtopic
router.post('/SelectCourse', middleware(testBankSchema.SelectCourseSchema,'body'), schoolTestBank.insert);
router.get('/ShowCourse', schoolTestBank.getAll)
router.put('/UpdateCourse/:id', middleware(testBankSchema.SelectCourseSchema,'body'), schoolTestBank.update);
router.delete('/DeleteCourse/:id', schoolTestBank.delete);

//add Grades, min and max marks
router.post('/AddGrades', middleware(testBankSchema.GradesSchema,'body'), schoolTestBank.insert);
router.put('/UpdateGrades/:id', middleware(testBankSchema.GradesSchemaWithId,'body'), auth(' Developer'), schoolTestBank.update);
router.delete('/DeleteGrades/:id', middleware(testBankSchema.DeletegradeSchemaWithId, 'body'), schoolTestBank.delete);///deleted all the course


//add Grade weights,test id and assignment id
router.post('/AddGradeWeights', middleware(testBankSchema.GradeWeightsSchema,'body'), schoolTestBank.insert);
router.put('/UpdateGradeWeights/:id', middleware(testBankSchema.GradeWeightsSchemaWithId,'body'), auth('Content Developer'), schoolTestBank.update);
router.delete('/DeleteGradeWeights/:id', middleware(testBankSchema.DeleteGradeWeightsSchemaWithId, 'body'), schoolTestBank.delete);///deleted all the course




//add content detail and content type
router.get('/ShowContent',  auth('Content Developer'), schoolTestBank.getAll)
router.put('/UpdateContent/:id', middleware(testBankSchema.ContentSchema,'body'), auth('Content Developer'), schoolTestBank.update);
router.delete('/DeleteContent/:id',  auth('Content Developer'), schoolTestBank.delete);

//Add Item Type...can be Assignment, quiz, test
router.get('/ShowItemType',  auth('Content Developer'), schoolTestBank.getAll)
router.put('/UpdateItemType/:id', middleware(testBankSchema.ItemSchema,'body'), auth('Content Developer'), schoolTestBank.update);
router.delete('/DeleteItemType/:id',  auth('Content Developer'), schoolTestBank.delete);

//Add Questions, Question Types, Answers, points, number of attempts
router.get('/ShowQuestions',  auth('Content Developer'), schoolTestBank.getAll)
router.put('/UpdateQuestions/:id', middleware(testBankSchema.QuestionSchema,'body'), auth('Content Developer'), schoolTestBank.update);
router.delete('/DeleteQuestions/:id',  auth('Content Developer'), schoolTestBank.delete);

//link apps
router.get('/AddApp',  auth('Content Developer'), schoolTestBank.getAll)
router.put('/UpdateApp/:id', middleware(testBankSchema.linkAppSchema,'body'), auth('Content Developer'), schoolTestBank.update);
router.delete('/DeleteApp/:id',  auth('Content Developer'), schoolTestBank.delete);

export default router;
