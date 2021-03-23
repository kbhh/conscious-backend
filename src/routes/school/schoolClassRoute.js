import express from 'express';
import schoolClasses from '../../controllers/school/schoolClasses';
import schoolClassSchema from '../../validators/Joi/schemas/school/schoolClass_schema';
import middleware from '../../validators/Joi/middleware';
import auth from '../../auth/auth';

const router = express.Router();


router.post('/addShift', middleware(schoolClassSchema.ShiftSchema, 'body'), schoolClasses.addSchoolClass);
router.get('/showShifts', schoolClasses.getAll)
router.get('/showShift/:id', schoolClasses.getById)
router.put('/updateShift/:id', middleware(schoolClassSchema.ShiftSchema, 'body'), auth('Registrar'), schoolClasses.update);
router.delete('/deleteShift/:id', schoolClasses.delete);


//Add Class
//router.get('/showClasss', schoolClasses.filter)
router.post('/addClass/:id', middleware(schoolClassSchema.ClassSchema,'body'), auth('Registrar'), schoolClasses.addClass);
router.put('/addClass/:id', middleware(schoolClassSchema.ClassSchemaWithId,'body'), auth('Registrar'), schoolClasses.updateClass);
router.delete('/deleteClass/:id', middleware(schoolClassSchema.DeleteClassSchemaWithId, 'body'), auth('Registrar'), schoolClasses.deleteClass);

//Add Section
//router.get('/showSections', schoolClasses.filter)
router.post('/addSection/:id', middleware(schoolClassSchema.SectionSchema,'body'), auth('Registrar'), schoolClasses.addSection);
router.put('/addSection/:id', middleware(schoolClassSchema.SectionSchemaWithId,'body'), auth('Registrar'), schoolClasses.updateSection);
router.delete('/deleteSection/:id', middleware(schoolClassSchema.DeleteSectionSchemaWithId, 'body'), auth('Registrar'), schoolClasses.deleteSection);

//Add Student
//router.get('/showStudents', schoolClasses.filter)
router.post('/addStudent/:id', middleware(schoolClassSchema.StudentSchema,'body'), auth('Registrar'), schoolClasses.addStudents);
router.put('/addStudent/:id', middleware(schoolClassSchema.StudentSchemaWithId,'body'), auth('Registrar'), schoolClasses.updateStudents);
router.delete('/deleteStudent/:id', middleware(schoolClassSchema.DeleteStudentSchemaWithId, 'body'), auth('Registrar'), schoolClasses.deleteStudents);

//Add Course
//router.get('/showCourses', schoolClasses.filter)
router.post('/addCourse/:id', middleware(schoolClassSchema.CourseSchema,'body'), auth('Registrar'), schoolClasses.addCourses);
router.put('/addCourse/:id', middleware(schoolClassSchema.CourseSchemaWithId,'body'), auth('Registrar'), schoolClasses.updateCourses);
router.delete('/deleteCourse/:id', middleware(schoolClassSchema.DeleteCourseSchemaWithId, 'body'), auth('Registrar'), schoolClasses.deleteCourses);

//Add Workingpaths
//router.get('/showWorkingpathss', schoolClasses.filter)
router.post('/addWorkingpaths/:id', middleware(schoolClassSchema.WorkingpathsSchema,'body'), auth('Registrar'), schoolClasses.addWorkingpaths);
router.put('/addWorkingpaths/:id', middleware(schoolClassSchema.WorkingpathsSchemaWithId,'body'), auth('Registrar'), schoolClasses.updateWorkingpaths);
router.delete('/deleteWorkingpaths/:id', middleware(schoolClassSchema.DeleteWorkingpathsSchemaWithId, 'body'), auth('Registrar'), schoolClasses.deleteWorkingpaths);

//Add Controlpoints
//router.get('/showControlpointss', schoolClasses.filter)
router.post('/addControlpoints/:id', middleware(schoolClassSchema.ControlpointsSchema,'body'), auth('Registrar'), schoolClasses.addControlpoints);
router.put('/addControlpoints/:id', middleware(schoolClassSchema.ControlpointsSchemaWithId,'body'), auth('Registrar'), schoolClasses.updateControlpoints);
router.delete('/deleteControlpoints/:id', middleware(schoolClassSchema.DeleteControlpointsSchemaWithId, 'body'), auth('Registrar'), schoolClasses.deleteControlpoints);

//Add Assignment
//router.get('/showAssignments', schoolClasses.filter)
router.post('/addAssignment/:id', middleware(schoolClassSchema.AssignmentSchema,'body'), auth('Registrar'), schoolClasses.addAssignments);
router.put('/addAssignment/:id', middleware(schoolClassSchema.AssignmentSchemaWithId,'body'), auth('Registrar'), schoolClasses.updateAssignments);
router.delete('/deleteAssignment/:id', middleware(schoolClassSchema.DeleteAssignmentSchemaWithId, 'body'), auth('Registrar'), schoolClasses.deleteAssignment);



//Add Teacher
//router.get('/showTeachers', schoolClasses.filter)
router.post('/addTeacher/:id', middleware(schoolClassSchema.TeacherSchema,'body'), auth('Registrar'), schoolClasses.addTeacher);
router.put('/addTeacher/:id', middleware(schoolClassSchema.TeacherSchemaWithId,'body'), auth('Registrar'), schoolClasses.updateTeacher);
router.delete('/deleteTeacher/:id', middleware(schoolClassSchema.DeleteTeacherSchemaWithId, 'body'), auth('Registrar'), schoolClasses.deleteTeacher);

//Add Reward
//router.get('/showRewards', schoolClasses.filter)
router.post('/addReward/:id', middleware(schoolClassSchema.RewardSchema,'body'), auth('Registrar'), schoolClasses.addReward);
router.put('/addReward/:id', middleware(schoolClassSchema.RewardSchemaWithId,'body'), auth('Registrar'), schoolClasses.updateReward);
router.delete('/deleteReward/:id', middleware(schoolClassSchema.DeleteRewardSchemaWithId, 'body'), auth('Registrar'), schoolClasses.deleteReward);


export default router;
