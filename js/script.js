// ATIVAR LINKS DO MENU
const links = document.querySelectorAll(".header-menu a")

function ativarLink(link) { //O argumento ira verificar algo dentro de cada link
  const url = location.href  //Info da url
  const href = link.href

  if (url.includes(href)) { //Verificamos se a url no navegador inclui o href da pagina
    link.classList.add("ativo")
  }
  // console.log(url)
  // console.log(href)
}

links.forEach(ativarLink)    //Para ativar uma funcao para cada um dos links
// console.log(links)
console.log(location)


//ATIVAR ITEMS DO ORÇAMENTO

const parametros = new URLSearchParams(location.search)     //Classe para manipular String  //Para verificar os parametros especificos. 'new URLSearchParams' retorna um array com os parametros de busca

function ativarProduto(param) {
  const elemento = document.getElementById(param)    //Buscando elementos que possuem 'param' como valores

  if(elemento) {  //Verificando se o elemento existe, se N existir ele tentara fazer ckeked de null
    elemento.checked = true    //Mudando o atributo para cheked, retorna o atributo checado
  }

  // console.log(elemento)
}

parametros.forEach(ativarProduto)

// PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll(".perguntas button")


function clickPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta)
  // console.log(pergunta)
}

function ativarPergunta(evento) {
  const pergunta = evento.currentTarget  //Para puxar o elemento que estou clicando
  const controls = pergunta.getAttribute("aria-controls")   //Para puxar o valor de aria-ccontrols 
  const resposta = document.getElementById(controls)

 
  resposta.classList.toggle('ativa')  //Adicionar uma classe na resposta
  const ativa = resposta.classList.contains("ativa")
  console.log(ativa)
  pergunta.setAttribute('aria-expanded', ativa)
  // console.log(resposta)
}

perguntas.forEach(clickPerguntas)
// console.log(perguntas)


// GALERIA DE BICICLETAS 
const galeria = document.querySelectorAll('.bicicleta-imagens img')  //Selecionada a Galeria
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(evento) {
  const img = evento.currentTarget

  const media = window.matchMedia('(min-width: 1000px)').matches //Recebe uma String que tera o mediaQuery
  // console.log(media)

  if (media) {
    galeriaContainer.prepend(img)
  }
  // console.log(img)
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem)

}



galeria.forEach(eventosGaleria)
   
// console.log(galeria, galeriaContainer)

// ANIMAÇÃO

if (window.SimpleAnime) {
  new SimpleAnime()
}

if(window.ClipboardJS) {
  new ClipboardJS('.introducao-conteudo p')
}