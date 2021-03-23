import express from 'express';
import workingPathController from '../../controllers/regional/workingPathController';
import courseContentSchema from '../../validators/Joi/schemas/regional/courseContent_schema';
import middleware from '../../validators/Joi/middleware';
import auth from '../../auth/auth';

const router = express.Router();

router.post('/addCourse', workingPathController.insert);
router.get('/getCourses', workingPathController.getAll);
router.get('/getCourse/:id', workingPathController.getByField);
router.put('/updateCourse/:id', workingPathController.update);
router.delete('deleteCourse/:id', workingPathController.delete);

router.post('/addWorkingPath/:id', workingPathController.add);
router.get('/getWorkingPath/:id', workingPathController.get);
router.put('/updateWokingPath/:id', workingPathController.modify);
router.delete('/deleteWorkingPath/:id', workingPathController.remove);

export default router;


