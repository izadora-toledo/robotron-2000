// FORMAS DE MUDAR O TEXTO DENTRO DE UMA TAG HTML, nesse exemplo mudamos o texto que estava dentro de uma tag <p>
document.getElementById('texto').innerHTML = 'Mudando o texto desse html :)';
document.querySelector('#texto').innerHTML = 'Mudando novamente...';
document.querySelector('#texto').innerText = 'Mudando pela última vez...';