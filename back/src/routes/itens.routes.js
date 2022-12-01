const express = require('express')
const router = express.Router()

const user = require("../controllers/userController")
const post = require("../controllers/postController")
const comment = require("../controllers/comentariosController")
const tag = require("../controllers/tagController")

router.post("/forum/validaUser", user.validarUsuarios)
router.post("/forum/cadastrarUser", user.cadastrarUsuario)

router.post("/forum/cadastrarPost", post.cadastrarPost)
router.get("/forum/posts", post.listarTodos)
router.post("/forum/postsTag", post.cadastrarPostTag)
router.get("/forum/post/:idPost", post.listarPost)

router.post("/forum/comment", comment.cadastrarComentarios)
router.post("/forum/answerComment", comment.cadastrarRespostaComentario)

router.post("/forum/tag", tag.cadastrarTag)

module.exports = router