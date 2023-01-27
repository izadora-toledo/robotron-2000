// Vamos transferir o JavaScript que foi escrito no código HTML, para um arquivo javascript específico pra facilitar as devidas manutenções e alterações do código js.
// O exemplo que estamos usando no html é -> <img class="robo" src="img/robotron.png" alt="Robotron" onclick="alert('Bem vindo, eu sou o OPTIMUS PRIME, prazer.')">
// Lembrando de chamar esse arquivo no nosso html usando o SRC pra informar onde encontrar este arquivo -> <script src="js/main.js"></script>
// Esse arquivo do js deve ficar no final do nosso HTML para evitar problemas de carregamento de tela.


document.querySelector('#robotron').addEventListener("click", digaOi)
function digaOi () {
    alert('Olá!');
}
