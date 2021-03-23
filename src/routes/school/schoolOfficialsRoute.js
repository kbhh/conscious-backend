import express from 'express';
import schoolOfficialsController from '../../controllers/school/schoolOfficialsController'
import profileSchema from '../../validators/Joi/schemas/school/signup_schema'
import middleware from '../../validators/Joi/middleware';
import auth from '../../auth/auth'

const router = express.Router();
const roles = ['Registrar', 'Registrar Verifier', 'Content Developer', 'Content Verifier', 'School Manager', 'School Offices'];
router.post('/register', auth('school Admin'), schoolOfficialsController.adminUserSignup);
//router.post('/register', middleware(profileSchema.SignUpSchema, 'body'), auth('school Admin'), schoolOfficialsController.adminUserSignup);
router.post('/signup', middleware(profileSchema.SelfSignUpSchema, 'body'), schoolOfficialsController.signup);
router.post('/reset', middleware(profileSchema.ResetSchema, 'body'), schoolOfficialsController.resetAccount);
router.get('/', auth('school Admin'), schoolOfficialsController.getAll)
router.post('/login', middleware(profileSchema.LoginSchema, 'body'),schoolOfficialsController.login);
router.put('/me', middleware(profileSchema.SignUpUpdateSchema, 'body'), auth(roles), schoolOfficialsController.update);
router.delete('/:id', auth('school Admin'), schoolOfficialsController.delete);
router.get('/me', auth(roles), schoolOfficialsController.getByField);

export default router;