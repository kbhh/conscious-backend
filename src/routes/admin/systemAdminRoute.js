import express from 'express';
import systemAdminController from '../../controllers/admin/systemAdminController'
import profileSchema from '../../validators/Joi/schemas/signup_schema'
import middleware from '../../validators/Joi/middleware';
import adminAuth from '../../auth/auth'

const router = express.Router();

router.post('/signup', middleware(profileSchema.SignUpSchema, 'body'), systemAdminController.signup);
router.get('/me',  adminAuth('Admin'), systemAdminController.getByField)
router.post('/login', systemAdminController.login);
router.put('/me', adminAuth('Admin'), middleware(profileSchema.SignUpSchema, 'body'), systemAdminController.update);
router.delete('/:id', adminAuth('Admin'), systemAdminController.delete);

export default router; 