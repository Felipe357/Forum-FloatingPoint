const toCreatePost = (model) => {
    return `INSERT INTO post VALUES (default, '${model.duvida}', '${model.user}', '${model.data}');`;
}

const toReadPost = (model) => {
    return `SELECT * FROM vw_Post where idPost = ${model.idPost}`
}

module.exports = {
    toCreatePost,
    toReadPost
}