const Item = require('../models/usuarios');
const con = require('../models/forumDAO');

const cadastrarUsuario = (req, res) => {
    con.query(Item.toCreateUsers(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}


const validarUsuarios = (req, res) => {
    con.query(Item.toValidateUsers(req.body), (err, result) => {
        if (err == null)
            if (result.length == 0) {
                return res.json(false).end()
            } else {
                return res.json(true).end()
            }
        else
            return res.status(500).end();
    });
}

module.exports = {
    cadastrarUsuario,
    validarUsuarios
}