
function fecharMenu() {
    var navBar = document.querySelector('.navbar-collapse');
    var navbar_toggler = document.querySelector('.navbar-toggler')
    if(!navbar_toggler.classList.contains('collapsed')){
        navbar_toggler.classList.add('collapsed')
    }
    if (navBar.classList.contains('show')) {
        navBar.classList.remove('show');

    }

}
// Funcao de carregamento de imagens
function loading(){
    document.getElementsByClassName('box-loading')[0].style.display = 'none'
    document.getElementsByClassName('content')[0].style.display = 'block'
}

// uso de rolagem suave
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)




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