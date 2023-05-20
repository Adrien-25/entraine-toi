import express from 'express';
import { registerController, loginController, forgotPasswordController, updateProfileController } from "../controllers/authController.js"
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';

// ROUTER OBJECT
const router = express.Router();

// REGISTER || POST
router.post('/register', registerController);

// LOGIN || POST
router.post('/login', loginController);

// FORGOT PASSWORD || POST 
router.post('/forgot-password', forgotPasswordController);

// PROTECTED USER ROUTE AUTH || GET 
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

// PROTECTED ADMIN ROUTE AUTH || GET 
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
})

// UPDATE PROFILE || GET 
router.put('/profile', requireSignIn, updateProfileController);

export default router;