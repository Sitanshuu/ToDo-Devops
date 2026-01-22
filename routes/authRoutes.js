const router = require("express").Router();
const { registerUser, loginUser, getUser, logoutUser } = require("../controllers/AuthController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", getUser);
router.post("/logout", logoutUser);

module.exports = router;