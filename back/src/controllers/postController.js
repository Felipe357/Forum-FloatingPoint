const Item = require('../models/post');
const con = require('../models/forumDAO');

class Posts {

    constructor(usuario, postDuvida, dataPost) {
        this.usuario = usuario
        this.postDuvida = postDuvida
        this.dataPost = dataPost
    }

    comments = []

    addComments(com) {
        this.comments.push(com)
    }

    // tags = []

    // addTags(tag) {
    //     this.tags.push(tag)
    // }

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
            let post = new Posts(result[0].usuario, result[0].postDuvida, result[0].dataPost)
            con.query(`SELECT * FROM vw_Post WHERE idPost = '${result[0].idPost}'`, (errP, resultP) => {
                if (errP == null) {
                    console.log(resultP)
                    resultP.forEach((re, indice) => {
                        console.log(re)
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
        } else {
            return res.status(500).end();
        }
    })
}

module.exports = {
    cadastrarPost,
    listarPost
}