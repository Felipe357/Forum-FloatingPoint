const toCreateComment = (model) => {
    return `INSERT INTO comment VALUES (default, ${model.idPost}, '${model.resposta}', '${model.usuario}', '${model.data}');`;
}

const toCreateAnswerComment = (model) => {
    return `INSERT INTO answerComment VALUES (default, ${model.idComment}, '${model.resposta}', '${model.usuario}', '${model.data}');`;
}

module.exports = {
    toCreateComment,
    toCreateAnswerComment
}