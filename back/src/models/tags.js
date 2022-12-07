const toCreateTag = (model) => {
    return `INSERT INTO tag VALUES ('${model.tag}');`;
}

const toReadTag = () => {
    return `SELECT * FROM tags`
}

module.exports = {
    toCreateTag,
    toReadTag
}