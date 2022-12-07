function showComment(e) {
    var tri = document.getElementById(e.id).querySelector("#tri")
    tri.style.transform = "rotate(90deg)"
    document.getElementById(e.id).setAttribute("onclick", "saveComment(this)")

    var comment = document.querySelector(".comment")
    comment.style.right = "-600px"
}

function saveComment(e) {
    var tri = document.getElementById(e.id).querySelector("#tri")
    tri.style.transform = "rotate(0deg)"
    document.getElementById(e.id).setAttribute("onclick", "showComment(this)")

    var comment = document.querySelector(".comment")
    comment.style.right = "0px"
}

function carregarPost() {
    const options = { method: 'GET' }

    fetch('http://localhost:5000/forum/posts', options)
        .then(response => response.json())
        .then(data => {
            data.forEach(e => {
                console.log(e)

                var date = new Date(e.data)
                let dataFormatada = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' })

                var post = document.querySelector(".post").cloneNode(true)
                post.classList.remove("model")
                post.id = e.id
                post.querySelector("#pergunta").innerHTML = e.duvida
                post.querySelector("#nome").innerHTML = e.usuario
                post.querySelector("#data").innerHTML = dataFormatada

                var tag = {
                    "idPost": e.id
                }
                const options2 = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(tag)
                }

                fetch('http://localhost:5000/forum/readTag', options2)
                    .then(response => response.json())
                    .then(t => {
                        t.forEach(tag => {
                            console.log(tag)
                            var ta = post.querySelector(".postTag").cloneNode(true)
                            ta.classList.remove("model")
                            ta.querySelector("span").innerHTML = tag.tag

                            post.querySelector(".postTags").appendChild(ta)
                        })
                    })

                document.querySelector(".posts").appendChild(post)

            })
        })

}

function carregarTags() {
    const options = { method: 'GET' };

    fetch('http://localhost:5000/forum/tag', options)
        .then(response => response.json())
        .then(tag => {
            tag.forEach(t => {
                var tag = document.createElement("span")
                tag.innerHTML = t.tag

                document.querySelector(".tag").appendChild(tag)
            })
        })
}

function filtrarTags() {
    let input = document.getElementById('buscaTag').value
    input = input.toLowerCase();
    let x = document.querySelector(".tag").querySelectorAll("span");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "flex";
        }
    }
}