const toCreatePost = (model) => {
    return `INSERT INTO post VALUES (default, '${model.duvida}', '${model.user}', '${model.data}');`;
}

const toReadPost = (model) => {
    return `SELECT * FROM vw_PostSimple where usuario = '${model.usuario}'`
}

module.exports = {
    toCreatePost,
    toReadPost
}