const swipperWrapper = document.querySelector('.swipper-w-hotel')
const swipperServicos = document.querySelector('.wrapper-servicos')

const slidersHoteis = [
    {
        "id": 0,
        "image": "https://lh3.googleusercontent.com/proxy/5cGlmKY6xsdRUbnZEeZDTfRFwjOzgcKTBWa2hH59efRbshCo6uQSFY4pns6KbRmQgfi0m-u8FwHmF_6zTCxnV39E-1ooDHMqPmi66iwuV6gNzh8YpZ2SPcKyuKnZaJYzDuQZx2huX30odNtRnDDyqrgRHpjW7Q=s680-w680-h510",
        "titulo": "Hotel Vila Galé Marés",
        "descricao": "O hotel Vila Galé Salvador fica mesmo em frente à praia de Ondina, a poucos minutos do centro e a apenas 20 minutos do aeroporto." 
    },
    {
        "id": 1,
        "image": "https://lalarebelo.com/wp-content/uploads/2017/08/tivoli-ecoresort-praia-do-forte-bahia-lala-rebelo.jpg",
        "titulo": "Hotel Tivoli",
        "descricao": "O Tivoli está localizado na Praia do Forte, no litoral Norte baiano a cerca de 1 hora de carro do Aeroporto de Salvador (57 km)." 
    },
    {
        "id": 2,
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/378203938.jpg?k=3ec9f979ebb2bf3f2a7034a753c49bf7de8a04bac1a05162dece21dd3d050d82&o=&hp=1",
        "titulo": "Hotel Iberostar Bahia",
        "descricao": "O hotel está localizado no município de Mata de São João, a cerca de 60 km do Aeroporto de Salvador ou 81 km do Centro de Salvador." 
    },
    {
        "id": 3,
        "image": "https://lh3.googleusercontent.com/p/AF1QipPN0eX_9GenhblNsDG1Y8y_PwF2ChZiABS8hTHA=s680-w680-h510",
        "titulo": "Hotel Iberostar Praia do Forte",
        "descricao": "O hotel está localizado no município de Mata de São João, a cerca de 55 km do Aeroporto de Salvador." 
    },
    {
        "id": 4,
        "image": "https://www.puntacanaadventures.com/wp-content/uploads/2022/05/Grand-Palladium-Palace-Excursions.jpeg",
        "titulo": "Hotel Grand Palladium",
        "descricao": "O Grand Palladium Imbassaí Resort & Spa fica a apenas 60 km de Salvador e 45 km do aeroporto, sendo de fácil acesso." 
    }
]



// Slide Serviços
const slidersServicos = [
    {
        "id": 0,
        "image": "./resource/point-tour/transfer.svg",
        "titulo": "Transfer",
        "descricao": "Transporte confiável e confortável entre aeroportos, hotéis e mais."
    },
    {
        "id": 1,
        "image": "./resource/point-tour/citytour.svg",
        "titulo": "City Tour",
        "descricao": "Explore os principais pontos turísticos da cidade em uma excursão guiada."
    },
    {
        "id": 2,
        "image": "./resource/point-tour/travel.svg",
        "titulo": "Viagens",
        "descricao": "Conectando cidades e destinos com conforto e segurança."
    },
    {
        "id": 3,
        "image": "./resource/point-tour/adisposicao.svg",
        "titulo": "Á diposição",
        "descricao": "Flexibilidade total e conveniência para seus deslocamentos personalizados."
    }

]



const initSwiper = () => {

    slidersHoteis.forEach( ( values) => {
        swipperWrapper.innerHTML += `
            <div class="swiper-slide slide-hotel" id="${values.id}">
            <div class="card text-center text-light">
            <img src="${values.image}" 
                alt="" height="400px" class="card-img rounded-4">
                <div class="card-img-overlay card-conteudo">
                    <h4 class="mt-3"><b>${values.titulo}</b></h4>
                    <p>${values.descricao}</p>
                    <a href="#" class="btn bg-success text-light" 
                    data-bs-toggle="modal" data-bs-target="#modalReserva"
                    onclick="abrirModal(${values.id})"
                    >Reservar</a>
                </div>
            </div>
            </div>
        
        `
    })

    slidersServicos.forEach( data => {
        swipperServicos.innerHTML += `
        <div class="swiper-slide slide-servico rounded-4" 
        data-bs-toggle="modal" data-bs-target="#modalReserva"
        onclick="getServicos(${data.id})"
        >
        <div class="card text-center text-light">
            <div class="card-conteudo-servico">
              <img src="${data.image}" alt="" height="75px">
                <h1 class="mt-3">${data.titulo}</h1>
                <p>${data.descricao}</p>
            </div>
        </div>
      </div>
        `
    })

}

const abrirModal = (id) => {
    // Obter o hotel correspondente ao ID
    const hotel = slidersHoteis.find(hotel => hotel.id === id);
    
    // Preencher o campo de endereço de partida no modal com o endereço do hotel
    document.getElementById('destinationAddress').value = hotel.titulo;
    
    // Exibir o modal
    $('#modalReserva').modal('show');
}

const getServicos = (id) => {
    
    // Obter o serviço correspondente ao ID
    const servico = slidersServicos.find(servico => servico.id === id);
    
    // Preencher o campo de Tipo de Serviço no modal com o título do serviço
    const selectElement = document.querySelector("#serviceType")

    if( selectElement ){
        document.querySelector('#serviceType').value = servico.titulo;
        for (let i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].value === servico.titulo) {
                selectElement.selectedIndex = i;
                break;
            }
        }
    }else{
        console.log("Elemento Nao encontrado.")
    }
    

    // Exibir o modal
    $('#modalReserva').modal('show');
}


initSwiper()