const express = require('express');
const router = express.Router();

const user = require("../controllers/userController");
const post = require("../controllers/postController")

router.post("/forum/validaUser", user.validarUsuarios);
router.get("/forum/post/:usuario", post.listarPost);

module.exports = router;