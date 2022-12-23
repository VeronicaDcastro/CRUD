document.addEventListener("DOMContentLoaded", function() { mostrarUsuarios(); });
let botaoUsuario = document.querySelectorAll('#btn-group')
let excluirPost = document.querySelector('#excluir')
let editarPost = document.querySelector('#editar')



function mostrarUsuarios() {
  var select = document.getElementsByClassName('dropdown-menu')[0];

  const requisicao = fetch('https://jsonplaceholder.typicode.com/users');

requisicao.then((resposta) => resposta.json())
  .then((objetoResposta) => {select.innerHTML = "<a class='dropdown-item' value='0' href='#' >selecione...</a>";objetoResposta.forEach((elemento) => {
      
      select.innerHTML += ("<a  class='dropdown-item' onClick='carregarPosts(" + elemento.id + ", \""+elemento.name+"\")' value="+elemento.id+" email='"+elemento.email+"' >"+elemento.name+"</a>");
 })});
} 

function carregarPosts(userId, nome) {
  let btnDropDown = document.getElementById('dropdownMenuButton');

  btnDropDown.innerText = nome;
  const requisicaoPost = fetch('https://jsonplaceholder.typicode.com/posts');
  requisicaoPost.then((respostaPost) => respostaPost.json())
  .then((respostaPost) => {
    let postsUsuario = respostaPost.filter((post)=>(post.userId == userId));
    var htmlPosts = '';
    postsUsuario.forEach((post)=>{
      htmlPosts += criaElementoPost(post.id,post.title);
    });
    let containerPost = document.getElementById('container-posts');
    containerPost.innerHTML = htmlPosts;
    // console.log(tituloPost);
  })
}
function criaElementoPost(idPost,tituloPost) { 
  
  let elemento = '<div class="container" style="color: #0379AB;">' ;
      elemento +=            '<div class="botoes">';
      elemento +=            '<button role="textbox" class="botao2" style="margin-left: 30px;">';
      elemento +=                '<i class="fa-solid fa-play" ></i>';
      elemento +=                tituloPost;
      elemento +=                '<a href="#" onClick="deletaPost('+idPost+')"><img src="img/trash-can-outline.png"></img></a>';
      elemento +=                '<img src="img/pencil-outline.png"></img>';
      elemento +=            '</button>';
      elemento +=            '</div>';
      elemento +=        '</div>';
    return elemento;

}
function deletaPost(idPost) {
  if (window.confirm('quer mesmo apagar?')) {
    console.log('sim');
  }else{
    console.log('nao');
  }
}


