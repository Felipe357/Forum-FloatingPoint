const express = require('express');
const router = express.Router();

const user = require("../controllers/userController");

router.post("/forum/validaUser", user.validarUsuarios);

module.exports = router;