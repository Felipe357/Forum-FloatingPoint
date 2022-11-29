var senha = "felipe";
var segredo = btoa(senha);
var revelado = atob(segredo);

console.log("criptografado: " + segredo);

function lognPage() {
    window.location.href = "../login screen/index.html"
}