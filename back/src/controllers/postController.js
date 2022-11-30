const Item = require('../models/post');
const con = require('../models/forumDAO');

class Posts {

    constructor(usuario, postDuvida, dataPost, tag) {
        this.usuario = usuario
        this.postDuvida = postDuvida
        this.dataPost = dataPost
        this.tag = tag
    }

    comments = []

    addComments(com) {
        this.comments.push(com)
    }

}

class Comments {

    constructor(usuarioComment, resposta, dataComment) {
        this.usuarioComment = usuarioComment
        this.resposta = resposta
        this.dataComment = dataComment
    }

    answerComments = {}

    addAnswer(ans) {
        this.answerComments = ans
    }

}
 
const cadastrarPost = (req, res) => {
    con.query(Item.toCreatePost(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}


const listarPost = (req, res) => {
    con.query(Item.toReadPost(req.params), (err, result) => {
        if (err == null) {
            console.log(result.length)
            if (result.length === 0) {
                let resposta = "Infelizmente não conseguimos encontrar a pergunta selecionada"
                res.json(resposta).end()
            } else {
                let post = new Posts(result[0].usuario, result[0].postDuvida, result[0].dataPost, result[0].tag)
                con.query(`SELECT * FROM vw_Post WHERE idPost = '${result[0].idPost}'`, (errP, resultP) => {
                    if (errP == null) {
                        resultP.forEach((re, indice) => {
                            let comment = new Comments(re.usuarioComment, re.resposta, re.dataComment)
                            con.query(`SELECT * FROM vw_Comment WHERE idComment = ${re.idComment}`, (errC, resultC) => {
                                if (errC == null) {
                                    comment.addAnswer(resultC[0])
                                    post.addComments(comment)
                                    if (indice == resultP.length - 1) {
                                        res.json(post).end()
                                    }
                                } else {
                                    res.json(errC).end()
                                }
                            })
                        })
                    } else {
                        res.json(errP).end()
                    }
                })
            }

        } else {
            return res.status(500).end();
        }
    })
}

module.exports = {
    cadastrarPost,
    listarPost
}