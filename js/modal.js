<<<<<<< HEAD

=======
>>>>>>> 2bef0115dabc8553cd139f37e50533f7b03a186c
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
<<<<<<< HEAD

});

function nextStep(currentStep) {

=======
});

function nextStep(currentStep) {
>>>>>>> 2bef0115dabc8553cd139f37e50533f7b03a186c
  document.getElementById('step' + currentStep).style.display = 'none';
  document.getElementById('step' + (currentStep + 1)).style.display = 'block';
  
  // Atualiza o indicador de passo
  document.getElementById('step' + currentStep + 'Indicator').classList.remove('active');
  document.getElementById('step' + (currentStep + 1) + 'Indicator').classList.add('active');
  
  if (currentStep === 2) {
    displayReviewInfo(); // Chama a função para exibir as informações de revisão quando o usuário avança para o passo 3
  }
<<<<<<< HEAD

=======
>>>>>>> 2bef0115dabc8553cd139f37e50533f7b03a186c
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
  var email = emailInput.value.trim();

  // Expressão regular para validar o formato do e-mail
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    emailError.textContent = "Por favor, insira um endereço de e-mail válido.";
    emailInput.focus(); // Coloca o foco de volta no campo de e-mail
    return false; // Impede o envio do formulário
  } else {
    emailError.textContent = "";
    return true; // Permite o envio do formulário se o e-mail for válido
  }
}

const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

// Validando os campos numericos
const numberOfAdultsInput = document.getElementById('numberOfAdults');
const numberOfChildrenInput = document.getElementById('numberOfChildren');

numberOfAdultsInput.addEventListener('change', function() {
  // Verifica se o valor excede o máximo
  if (parseInt(numberOfAdultsInput.value) > parseInt(numberOfAdultsInput.max)) {
    numberOfAdultsInput.value = numberOfAdultsInput.max;
  }
});

numberOfChildrenInput.addEventListener('change', function() {
  // Verifica se o valor excede o máximo
  if (parseInt(numberOfChildrenInput.value) > parseInt(numberOfChildrenInput.max)) {
    numberOfChildrenInput.value = numberOfChildrenInput.max;
  }
});

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
<<<<<<< HEAD
  // Coletar informações pessoais
  var fullName = personalInfoForm.elements["fullName"].value;
  var email = personalInfoForm.elements["email"].value;
  var whatsapp = personalInfoForm.elements["whatsapp"].value;
  var serviceType = personalInfoForm.elements["serviceType"].value;
=======

  if (personalInfoForm.checkValidity() && travelInfoForm.checkValidity()) {
    // Coletar informações pessoais
    var fullName = personalInfoForm.elements["fullName"].value;
    var email = personalInfoForm.elements["email"].value;
    var whatsapp = personalInfoForm.elements["whatsapp"].value;
    var serviceType = personalInfoForm.elements["serviceType"].value;
>>>>>>> 2bef0115dabc8553cd139f37e50533f7b03a186c

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
<<<<<<< HEAD
    var message = "*Olá! Segue abaixo as informações da viagem:*\n\n" +
=======
    var message = "*Olá! Segue abaixo as informações da viagem:\n\n*" +
>>>>>>> 2bef0115dabc8553cd139f37e50533f7b03a186c
                  "*Nome Completo:* " + fullName + "\n" +
                  "*Email:* " + email + "\n" +
                  "*WhatsApp:* " + whatsapp + "\n\n" +
                  "*Tipo de Serviço:* " + serviceType + "\n\n" +
<<<<<<< HEAD
                  "*Informações da Viagem:*\n" +
=======
                  "*Informações da Viagem:\n*" +
>>>>>>> 2bef0115dabc8553cd139f37e50533f7b03a186c
                  "*Quantidade de Adultos:* " + numberOfAdults + "\n" +
                  "*Quantidade de Crianças:* " + numberOfChildren + "\n" +
                  "*Necessita de Cadeira Infantil:* " + (needChildSeat ? "Sim" : "Não") + "\n" +
                  "*Tipo de Veículo:* " + vehicleType + "\n" +
                  "*Tipo de Viagem:* " + roundTrip + "\n" +
                  "*Data de Partida:* " + departureDate + "\n";
                  if (returnDate !== "") {
<<<<<<< HEAD
                    message = "*Data de Retorno:* " + returnDate + "\n";
                  }
            
=======
                    message += "*Data de Retorno:* " + returnDate + "\n";
                  }
              
>>>>>>> 2bef0115dabc8553cd139f37e50533f7b03a186c
                  message += "*Endereço de Partida:* " + departureAddress + "\n" +
                             "*Endereço de Destino:* " + destinationAddress;    
    // URL para enviar mensagem via WhatsApp
    var whatsappURL = "https://api.whatsapp.com/send?phone=5571981459595" + "&text=" + encodeURIComponent(message);

    // Redirecionar para o WhatsApp
<<<<<<< HEAD

  window.open(whatsappURL);
=======
    window.open(whatsappURL);
  } else {
    var errorMessage = document.getElementById("travelInfoError");
    errorMessage.textContent = "Por favor, preencha todos os campos antes de prosseguir.";
  }
>>>>>>> 2bef0115dabc8553cd139f37e50533f7b03a186c
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
<<<<<<< HEAD
  }
  else if(totalPassengers > 10){
    if (needChildSeat) {
      return "A combinar (com cadeira infantil)";
    } else {
      return "A combinar";
    }
=======
>>>>>>> 2bef0115dabc8553cd139f37e50533f7b03a186c
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

// Checando os forms do step 1 
function checkFieldsAndEnableButton() {
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const whatsappInput = document.getElementById('whatsapp');
  const serviceTypeInput = document.getElementById('serviceType');
  const btnNext = document.querySelector('.btn-next');

  if (fullNameInput.value !== "" && emailInput.value !== "" && whatsappInput.value !== "" && serviceTypeInput.value !== "") {
      btnNext.disabled = false;
  } else {
      btnNext.disabled = true;
  }
}
// Adiciona um ouvinte de evento de entrada a cada campo de entrada
const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
    input.addEventListener('input', checkFieldsAndEnableButton);
});
checkFieldsAndEnableButton()


// Checando os forms do step 2
function checkFieldsAndEnableButton2() {
  const numberOfAdults = document.getElementById('numberOfAdults');
  const numberOfChildren = document.getElementById('numberOfChildren');
  const needChildSeat = document.getElementById('needChildSeat');
  const roundTrip = document.getElementById('roundTrip');
  const oneWayTrip = document.getElementById('oneWayTrip');
  const departureDate = document.getElementById('departureDate');
  const returnDate = document.getElementById('returnDate');
  const departureAddress = document.getElementById('departureAddress');
  const destinationAddress = document.getElementById('destinationAddress');
  const btnNext2 = document.querySelector('.btn-next-2');

  // Verifica se todos os campos estão preenchidos
  if (numberOfAdults.value !== "" &&
      numberOfChildren.value !== "" &&
      needChildSeat.value !== "" &&
      departureDate.value !== "" &&
      (roundTrip.checked && returnDate.value !== "" || oneWayTrip.checked) &&
      departureAddress.value !== "" &&
      destinationAddress.value !== "") {
      btnNext2.disabled = false; // Habilita o botão se todos os campos estiverem preenchidos
  } else {
      btnNext2.disabled = true; // Desabilita o botão se algum campo estiver vazio
  }
}

// Adiciona um ouvinte de evento de entrada a cada campo de entrada
const inputs2 = document.querySelectorAll('input, select');
inputs2.forEach(input => {
  input.addEventListener('input', checkFieldsAndEnableButton2);
});

// Chama a função para verificar se todos os campos estão preenchidos e habilitar o botão inicialmente
checkFieldsAndEnableButton2();

// Função para limpar os campos de preenchimento
function clearEraseDate() {
  // Limpa os campos do formulário de informações pessoais
  document.getElementById('fullName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('whatsapp').value = '';
  document.getElementById('serviceType').value = '';

  // Limpa os campos do formulário de informações de viagem
  document.getElementById('numberOfAdults').value = '';
  document.getElementById('numberOfChildren').value = '';
  document.getElementById('needChildSeat').checked = false;
  document.getElementById('roundTrip').checked = false;
  document.getElementById('oneWayTrip').checked = false;
  document.getElementById('departureDate').value = '';
  document.getElementById('returnDate').value = '';
  document.getElementById('departureAddress').value = '';
  document.getElementById('destinationAddress').value = '';


  document.getElementById("reviewInfo").innerHTML = "";
  
  // Habilita os botões novamente
  document.querySelector('.btn-next').disabled = true;
  document.querySelector('.btn-next-2').disabled = true;
}

// Quando o modal é fechado
$('#modalReserva').on('hidden.bs.modal', function () {
  // Remove a classe do corpo que desativa o overflow
  $('body').removeClass('modal-open-no-scroll');
  $('body').removeClass('navbar-collapsed-menu');

  // Limpa os campos do formulário
  clearFormFields();

  // Volta para o primeiro modal
  $('#modalReserva').modal('hide'); // Fecha o modal atual
  $('#modalReserva').modal('show'); // Mostra o primeiro modal novamente
});



