import express from 'express';
import regionalOfficialsController from '../../controllers/regional/regionalOfficialsController'
import profileSchema from '../../validators/Joi/schemas/regional/signup_schema'
import middleware from '../../validators/Joi/middleware';
import auth from '../../auth/auth'

const router = express.Router();
const roles = ['Registrar', 'Registrar Verifier','Curriculum Developer', 'Content Developer', 'Content Verifier', 'School Registrar', 'School Verifier'];
router.post('/register', auth('REB Admin'), regionalOfficialsController.adminUserSignup);
//router.post('/register', middleware(profileSchema.SignUpSchema, 'body'), auth('REB Admin'), regionalOfficialsController.adminUserSignup);
router.post('/signup', middleware(profileSchema.SelfSignUpSchema, 'body'), regionalOfficialsController.signup);
router.post('/reset', middleware(profileSchema.ResetSchema, 'body'), regionalOfficialsController.resetAccount);
router.get('/', auth('REB Admin'), regionalOfficialsController.getAll)
router.post('/login', middleware(profileSchema.LoginSchema, 'body'),regionalOfficialsController.login);
router.put('/me', middleware(profileSchema.SignUpUpdateSchema, 'body'), auth(roles), regionalOfficialsController.update);
router.put('/profileimage',auth(roles), regionalOfficialsController.uploadProfileImg, regionalOfficialsController.updateProfileImg);
router.delete('/:id', auth('REB Admin'), regionalOfficialsController.delete);
router.get('/me', auth(roles), regionalOfficialsController.getByField);

export default router;
