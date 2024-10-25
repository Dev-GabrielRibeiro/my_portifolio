
const imagem = document.querySelector('.imagem');
const mostrarTec = document.querySelector('.imgs');

imagem.addEventListener('click', ()=> {
    if(mostrarTec.classList.contains('mostrar')){
        mostrarTec.classList.remove('mostrar');
    }else{
        mostrarTec.classList.add('mostrar');
    }
});