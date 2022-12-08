var id

function showComment(e) {

    var v = document.querySelector(".aberto")

    if (v !== null) {
         saveComment(id)
         setTimeout(() => {
            showComment(e)
         }, 1000)
    } else {
        id = e

        var tri = document.getElementById(e.id).querySelector("#tri")
        tri.style.transform = "rotate(90deg)"
        document.getElementById(e.id).setAttribute("onclick", "saveComment(this)")

        var comment = document.getElementById(e.id).querySelector(".comment")
        comment.style.right = "-600px"
        comment.querySelector(".infoComment").style.opacity = "1"

        setTimeout(() => {
            carregaComment(e.id)
        }, 700)
    }



}

function saveComment(e) {

    var v = document.querySelector(".aberto")
    v.classList.remove("aberto")

    esconderComment(e.id)

    setTimeout(() => {
        var tri = document.getElementById(e.id).querySelector("#tri")
        tri.style.transform = "rotate(0deg)"
        document.getElementById(e.id).setAttribute("onclick", "showComment(this)")

        var comment = document.getElementById(e.id).querySelector(".comment")
        comment.style.right = "0px"
        comment.querySelector(".infoComment").style.opacity = "0"
    }, 900)

}

function carregarPost() {
    const options = { method: 'GET' }

    fetch('http://localhost:5000/forum/posts', options)
        .then(response => response.json())
        .then(data => {
            data.forEach(e => {

                var date = new Date(e.data)
                let dataFormatada = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' })

                var post = document.querySelector(".post").cloneNode(true)
                post.classList.remove("model")
                post.id = e.id
                post.querySelector(".comment").id = e.id
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

function carregaComment(e) {

    var info = document.getElementById(e).querySelector(".infoComment")

    info.classList.add("aberto")

    var dados = info.querySelectorAll(".dadosComment")

    var ta = dados.length

    info.style.height = ta.toString() + ta.toString() + "0%"

}

function esconderComment(e) {

    var info = document.getElementById(e).querySelector(".infoComment")
    info.style.height = "100%"

}