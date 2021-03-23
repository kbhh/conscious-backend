import express from 'express';
import schoolAdminController from '../../controllers/school/schoolAdminController'
import profileSchema from '../../validators/Joi/schemas/school/signup_schema'
import middleware from '../../validators/Joi/middleware';
import auth from '../../auth/auth'

const router = express.Router();

router.post('/register', middleware(profileSchema.SignUpSchema, 'body'), auth('Admin'), schoolAdminController.signup);
router.post('/reset', middleware(profileSchema.ResetSchema, 'body'), schoolAdminController.resetAccount);
router.get('/', auth('Admin'), schoolAdminController.getAll)
router.post('/login', schoolAdminController.login);
router.put('/me', middleware(profileSchema.SignUpUpdateSchema, 'body'), auth('School Admin'), schoolAdminController.update);
router.delete('/:id', auth('Admin'), schoolAdminController.delete);
router.get('/me', auth('School Admin'), schoolAdminController.getByField);

export default router;