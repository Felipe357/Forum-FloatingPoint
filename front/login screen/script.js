var senha = "felipe";
var segredo = btoa(senha);
var revelado = atob(segredo);

console.log("criptografado: " + segredo);

function viewPage() {
    window.location.href = "../viewpoint/index.html"
}