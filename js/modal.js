// Quando o modal é aberto
$('#modalReserva').on('show.bs.modal', function () {
  // Adiciona uma classe ao corpo que desativa o overflow
  $('body').addClass('modal-open-no-scroll');
  $('body').addClass('navbar-collapsed-menu');
});

// Quando o modal é fechado
$('#modalReserva').on('hidden.bs.modal', function () {
  // Remove a classe do corpo que desativa o overflow
  $('body').removeClass('modal-open-no-scroll');
  $('body').removeClass('navbar-collapsed-menu');
});

function nextStep(currentStep) {
  document.getElementById('step' + currentStep).style.display = 'none';
  document.getElementById('step' + (currentStep + 1)).style.display = 'block';
  
  // Atualiza o indicador de passo
  document.getElementById('step' + currentStep + 'Indicator').classList.remove('active');
  document.getElementById('step' + (currentStep + 1) + 'Indicator').classList.add('active');
  
  if (currentStep === 2) {
    displayReviewInfo(); // Chama a função para exibir as informações de revisão quando o usuário avança para o passo 3
  }
}

function prevStep(currentStep) {
  document.getElementById('step' + currentStep).style.display = 'none';
  document.getElementById('step' + (currentStep - 1)).style.display = 'block';
  
  // Atualiza o indicador de passo
  document.getElementById('step' + currentStep + 'Indicator').classList.remove('active');
  document.getElementById('step' + (currentStep - 1) + 'Indicator').classList.add('active');
}

function validateEmail() {
  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('emailError');
  var email = emailInput.value;

  if (!email.includes('@')) {
    emailError.textContent = "Por favor, insira um endereço de e-mail válido.";
    emailInput.setCustomValidity(''); // Invalida o campo para impedir o envio do formulário
  } else {
    emailError.textContent = "";
    emailInput.setCustomValidity('valid'); // Define o campo como válido
  }
}

function handleTripOptions() {
  var roundTripCheckbox = document.getElementById('roundTrip');
  var oneWayTripCheckbox = document.getElementById('oneWayTrip');

  if (roundTripCheckbox.checked) {
    oneWayTripCheckbox.disabled = true;
  } else if (oneWayTripCheckbox.checked) {
    roundTripCheckbox.disabled = true;
  } else {
    roundTripCheckbox.disabled = false;
    oneWayTripCheckbox.disabled = false;
  }

  toggleReturnDateField(); // Chama a função para ocultar ou exibir o campo de data de retorno
}

function calculate() {
  var personalInfoForm = document.getElementById("personalInfoForm");
  var travelInfoForm = document.getElementById("travelInfoForm");

  if (personalInfoForm.checkValidity() && travelInfoForm.checkValidity()) {
    // Coletar informações pessoais
    var fullName = personalInfoForm.elements["fullName"].value;
    var email = personalInfoForm.elements["email"].value;
    var whatsapp = personalInfoForm.elements["whatsapp"].value;
    var serviceType = personalInfoForm.elements["serviceType"].value;

    // Coletar informações da viagem
    var numberOfAdults = travelInfoForm.elements["numberOfAdults"].value;
    var numberOfChildren = travelInfoForm.elements["numberOfChildren"].value;
    var needChildSeat = travelInfoForm.elements["needChildSeat"].checked;
    var vehicleType = determineVehicleType(numberOfAdults, numberOfChildren, needChildSeat);
    var roundTrip = travelInfoForm.elements["roundTrip"].checked ? "Ida e Volta" : "Apenas Ida";
    var departureDate = travelInfoForm.elements["departureDate"].value;
    var returnDate = travelInfoForm.elements["returnDate"].value;
    var departureAddress = travelInfoForm.elements["departureAddress"].value;
    var destinationAddress = travelInfoForm.elements["destinationAddress"].value;

    // Se a opção "Só Ida" estiver marcada, defina a data de retorno como vazia
    if (travelInfoForm.elements["oneWayTrip"].checked) {
      returnDate = "";
    }

    // Criar a mensagem para enviar via WhatsApp
    var message = "*Olá! Segue abaixo as informações da viagem:\n\n*" +
                  "*Nome Completo:* " + fullName + "\n" +
                  "*Email:* " + email + "\n" +
                  "*WhatsApp:* " + whatsapp + "\n\n" +
                  "*Tipo de Serviço:* " + serviceType + "\n\n" +
                  "*Informações da Viagem:\n*" +
                  "*Quantidade de Adultos:* " + numberOfAdults + "\n" +
                  "*Quantidade de Crianças:* " + numberOfChildren + "\n" +
                  "*Necessita de Cadeira Infantil:* " + (needChildSeat ? "Sim" : "Não") + "\n" +
                  "*Tipo de Veículo:* " + vehicleType + "\n" +
                  "*Tipo de Viagem:* " + roundTrip + "\n" +
                  "*Data de Partida:* " + departureDate + "\n";
                  if (returnDate !== "") {
                    message += "*Data de Retorno:* " + returnDate + "\n";
                  }
              
                  message += "*Endereço de Partida:* " + departureAddress + "\n" +
                             "*Endereço de Destino:* " + destinationAddress;    
    // URL para enviar mensagem via WhatsApp
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(whatsapp) + "&text=" + encodeURIComponent(message);

    // Redirecionar para o WhatsApp
    window.open(whatsappURL);
  } else {
    var errorMessage = document.getElementById("travelInfoError");
    errorMessage.textContent = "Por favor, preencha todos os campos antes de prosseguir.";
  }
}

function determineVehicleType(numberOfAdults, numberOfChildren, needChildSeat) {
  var totalPassengers = parseInt(numberOfAdults) + parseInt(numberOfChildren);

  if (totalPassengers <= 4) {
    if (needChildSeat) {
      return "Sedan (com cadeira infantil)";
    } else {
      return "Sedan";
    }
  } else if (totalPassengers <= 6) {
    if (needChildSeat) {
      return "Minivan (com cadeira infantil)";
    } else {
      return "Minivan";
    }
  } else if (totalPassengers <= 10)
  if (needChildSeat) {
    return "Van (Com Cadeira Infatil)";
    } else {
      return "Van";
  }
}

function displayReviewInfo() {
  var personalInfoForm = document.getElementById("personalInfoForm");
  var travelInfoForm = document.getElementById("travelInfoForm");

  // Exibir informações pessoais
  var fullName = personalInfoForm.elements["fullName"].value;
  var email = personalInfoForm.elements["email"].value;
  var whatsapp = personalInfoForm.elements["whatsapp"].value;
  var serviceType = personalInfoForm.elements["serviceType"].value;

  document.getElementById("reviewInfo").innerHTML =
    "<h5>Informações Pessoais:</h5>" +
    "<p><strong>Nome Completo:</strong> " + fullName + "</p>" +
    "<p><strong>Email:</strong> " + email + "</p>" +
    "<p><strong>WhatsApp:</strong> " + whatsapp + "</p>" +
    "<p><strong>Tipo de Serviço:</strong> " + serviceType + "</p>";

  // Exibir informações da viagem
  var numberOfAdults = travelInfoForm.elements["numberOfAdults"].value;
  var numberOfChildren = travelInfoForm.elements["numberOfChildren"].value;
  var needChildSeat = travelInfoForm.elements["needChildSeat"].checked;
  var vehicleType = determineVehicleType(numberOfAdults, numberOfChildren, needChildSeat);
  var roundTrip = travelInfoForm.elements["roundTrip"].checked ? "Ida e Volta" : "Apenas Ida";
  var departureDate = travelInfoForm.elements["departureDate"].value;
  var returnDate = travelInfoForm.elements["returnDate"].value;
  var departureAddress = travelInfoForm.elements["departureAddress"].value;
  var destinationAddress = travelInfoForm.elements["destinationAddress"].value;

  // Se a opção "Só Ida" estiver marcada, defina a data de retorno como vazia
  if (travelInfoForm.elements["oneWayTrip"].checked) {
    returnDate = "";
  }

  document.getElementById("reviewInfo").innerHTML +=
    "<h5>Detalhes da Viagem:</h5>" +
    "<p><strong>Quantidade de Adultos:</strong> " + numberOfAdults + "</p>" +
    "<p><strong>Quantidade de Crianças:</strong> " + numberOfChildren + "</p>" +
    "<p><strong>Necessita de Cadeira Infantil:</strong> " + (needChildSeat ? "Sim" : "Não") + "</p>" +
    "<p><strong>Tipo de Veículo:</strong> " + vehicleType + "</p>" +
    "<p><strong>Tipo de Viagem:</strong> " + roundTrip + "</p>" +
    "<p><strong>Data de Partida:</strong> " + departureDate + "</p>" +
    "<p><strong>Data de Retorno:</strong> " + returnDate + "</p>" +
    "<p><strong>Endereço de Partida:</strong> " + departureAddress + "</p>" +
    "<p><strong>Endereço de Destino:</strong> " + destinationAddress + "</p>";
}

function toggleReturnDateField() {
  var returnDateField = document.getElementById("returnDateField");
  var oneWayTripCheckbox = document.getElementById("oneWayTrip");

  if (oneWayTripCheckbox.checked) {
    returnDateField.style.display = "none";
  } else {
    returnDateField.style.display = "block";
  }
}
