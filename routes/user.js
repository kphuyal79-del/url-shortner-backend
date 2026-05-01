const express = require('express');
const {registerUserController, verifyEmailController,loginUserController} = require('../controllers/auth.controller');

const router = express.Router();
router.post("/register", registerUserController);
router.get("/verify/:token", verifyEmailController);
router.post("/login", loginUserController);

module.exports = router;