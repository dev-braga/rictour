
function fecharMenu() {
    var navBar = document.querySelector('.navbar-collapse');
    var navbar_toggler = document.querySelector('.navbar-toggler')

    if(!navbar_toggler.classList.contains('collapsed')){
        navbar_toggler.classList.add('collapsed')
    }
    if (navBar.classList.contains('show')) {
        navBar.classList.remove('show');
        
    }

<<<<<<< HEAD
    document.body.classList.remove('navbar-open');
=======
    $('#modalReserva').modal('show');
>>>>>>> 2bef0115dabc8553cd139f37e50533f7b03a186c
}
// Funcao de carregamento de imagens
function loading(){
    document.getElementsByClassName('box-loading')[0].style.display = 'none'
    document.getElementsByClassName('content')[0].style.display = 'block'
}

// uso de rolagem suave




// Animacao texto Servicos
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-animation')
        }else{
            entry.target.classList.remove('show-animation')
        }
    })
})

const elements = document.querySelectorAll('.hidden-animation')
elements.forEach((element) => myObserver.observe(element))



document.querySelector('.navbar-toggler').addEventListener('click', function() {
    // Toggle a classe 'open' na navbar
    document.querySelector('.navbar').classList.toggle('open');

    // Verifique se a navbar está aberta antes de adicionar/remover a classe 'navbar-open' no corpo
    if (document.querySelector('.navbar').classList.contains('open')) {
        document.body.classList.add('navbar-open');
    } else {
        document.body.classList.remove('navbar-open');
    }
});


