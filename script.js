/*função para listar na tela*/
function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = '<img src="' + filme + '">'
  listaFilmes.innerHTML = listaFilmes.innerHTML  + elementoFilme
}

/*function sempre ()*/      
/*document.querySelector seleciona o que tiver com o id = algo, exemplo, no HTML estamos com um input com id="filme"*/

function adicionarFilme() 
{
  var campoFilmeFavorito = document.querySelector('#filme')  /*traz tudo dentro do input*/
  var filmeFavorito = campoFilmeFavorito.value  /*Ignora dentro do input e só mostra o valor*/
  if (filmeFavorito.endsWith('.jpg')) {  /*endsWith = se terminar com*/
    listarFilmesNaTela(filmeFavorito)  /*lista os filmes na tela*/
  } else {
    alert("Isso nao é uma imagem! :(")  /*se nao é invalido*/
  }
  campoFilmeFavorito.value = ""  /*limpa o input para inserir mais informações*/
}


