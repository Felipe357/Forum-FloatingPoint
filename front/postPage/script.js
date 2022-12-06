var tri = document.querySelector("#tri")

function showComment() {
    tri.style.transform = "rotate(90deg)"
    document.querySelector(".post").setAttribute("onclick", "saveComment()")
}

function saveComment() {
    tri.style.transform = "rotate(0deg)"
    document.querySelector(".post").setAttribute("onclick", "showComment()")
}