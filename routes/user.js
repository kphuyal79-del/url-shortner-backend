const express = require('express');
const {registerUserController, refreshTokenController,logoutController,verifyEmailController,loginUserController} = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();
router.post("/register", registerUserController);
router.get("/verify/:token", verifyEmailController);
router.post("/login", loginUserController);
router.post("/refresh-token", refreshTokenController);
router.post("/logout", authMiddleware, logoutController);
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ user: req.user });
});
module.exports = router;