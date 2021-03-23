import express from 'express';
import regionalAdminController from '../../controllers/regional/regionalAdminController'
import profileSchema from '../../validators/Joi/schemas/regional/signup_schema'
import middleware from '../../validators/Joi/middleware';
import auth from '../../auth/auth'

const router = express.Router();

router.post('/register', middleware(profileSchema.SignUpSchema, 'body'), auth('Admin'), regionalAdminController.signup);
router.post('/reset', middleware(profileSchema.ResetSchema, 'body'), regionalAdminController.resetAccount);
router.get('/', auth('Admin'), regionalAdminController.getAll)
router.post('/login', regionalAdminController.login);
router.put('/me', middleware(profileSchema.SignUpUpdateSchema, 'body'), auth('REB Admin'), regionalAdminController.update);
router.delete('/:id', auth('Admin'), regionalAdminController.delete);
router.get('/me', auth('REB Admin'), regionalAdminController.getByField);

export default router;