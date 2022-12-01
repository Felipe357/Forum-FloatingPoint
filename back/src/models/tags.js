const toCreateTag = (model) => {
    return `INSERT INTO tag VALUES ('${model.tag}');`;
}

module.exports = {
    toCreateTag
}