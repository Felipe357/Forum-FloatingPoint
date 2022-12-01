const Item = require('../models/comentarios');
const con = require('../models/forumDAO');

const cadastrarComentarios = (req, res) => {
    con.query(Item.toCreateComment(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(err).end();
        } else {
            res.status(500).json(err).end();
        }
    })
}

const cadastrarRespostaComentario = (req, res) => {
    con.query(Item.toCreateAnswerComment(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json("Resposta registrada com sucesso").end();
        } else {
            res.status(500).json(err).end();
        }
    })
}


module.exports = {
    cadastrarComentarios,
    cadastrarRespostaComentario
}