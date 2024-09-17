//form
let currentStep = 0
showStep(currentStep)

function showStep(n) {
  const steps = document.getElementsByClassName('step')
  if (steps.length > 0) {
    steps[n].classList.add('active')
    if (n == 0) {
      document.getElementById('prevBtn').style.display = 'none'
    } else {
      document.getElementById('prevBtn').style.display = 'inline'
    }
    if (n == steps.length - 1) {
      document.getElementById('nextBtn').innerText = 'Enviar'
      document.getElementById('nextBtn').setAttribute('onclick', 'enviarEmail()')
      showData()
    } else {
      document.getElementById('nextBtn').innerText = 'Continuar'
      document.getElementById('nextBtn').setAttribute('type', 'button')
      document.getElementById('nextBtn').setAttribute('onclick', 'nextPrev(1)')
    }
  }
}

function nextPrev(n) {
  const steps = document.getElementsByClassName('step')
  if (currentStep === 0 && validateCep()) return false
  if (n == 1 && !validateForm()) return false
  steps[currentStep].classList.remove('active')
  currentStep += n
  showStep(currentStep)
  setStep()
}

function validateCep() {
  // const btnSearchCep = document.querySelector('.btn-busca-cep')
  const hiddenCep = document.querySelector('input[type="hidden"].cep')
  if (hiddenCep.value.length < 3) {
    // btnSearchCep.classList.add('invalid')
    return true
  } else {
    // btnSearchCep.classList.remove('invalid')
    return false
  }
}

function setActivePayday(label) {
  const allLabels = document.querySelectorAll('.vencimento-opcao')
  allLabels.forEach(lbl => lbl.classList.remove('active'))
  label.classList.add('active')
}
function setActivePayType(label) {
  const allLabels = document.querySelectorAll('.tipo-pagamento-opcao')
  allLabels.forEach(lbl => lbl.classList.remove('active'))
  label.classList.add('active')
}

function buscarCepAutomaticamente() {
  const cepInput = document.getElementById('cep')
  const cep = cepInput.value.replace(/\D/g, '')

  if (cep.length === 8) {
    buscarEndereco() // Chama a função de busca quando o CEP tem 8 dígitos
  }
}

function buscarEndereco() {
  const cep = document.getElementById('cep').value.replace(/\D/g, '')
  const url = `https://viacep.com.br/ws/${cep}/json/`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        document.querySelector('.resultadoBuscaCep').innerHTML =
          '<li><span>CEP não encontrado.</span></li>'
      } else {
        document.querySelector('#multiStepForm .cep').value = data.cep
        document.querySelector('#multiStepForm .rua').value = data.logradouro
        document.querySelector('#multiStepForm .bairro').value = data.bairro
        document.querySelector('#multiStepForm .cidade').value = data.localidade
        document.querySelector('#multiStepForm .uf').value = data.uf

        document.querySelector('.resultadoBuscaCep').innerHTML = `
                  <li><span>CEP:</span> ${data.cep}</li>
                  <li><span>Rua:</span> ${data.logradouro}</li>
                  <li><span>Bairro:</span> ${data.bairro}</li>
                  <li><span>Cidade:</span> ${data.localidade}</li>
                  <li><span>Estado:</span> ${data.uf}</li>
              `
      }
    })
    .catch(error => {
      document.querySelector('.resultadoBuscaCep').innerHTML =
        '<li><span>Erro ao buscar o cep</span></li>'
      console.error('Erro:', error)
    })
}

function showData() {
  const form = document.getElementById('multiStepForm')
  const formData = new FormData(form)

  const fieldMappings = [
    { name: 'preco', displayName: 'Preço:' },
    { name: 'velocidade', displayName: 'Velocidade:' },
    { name: 'endereco', displayName: 'Endereço:' },
    { name: 'rua', displayName: 'Rua:' },
    { name: 'bairro', displayName: 'Bairro:' },
    { name: 'cidade', displayName: 'Cidade:' },
    { name: 'numero', displayName: 'Número:' },
    { name: 'complemento', displayName: 'Complemento:' },
    { name: 'nome', displayName: 'Nome Completo:' },
    { name: 'telefone', displayName: 'Telefone:' },
    { name: 'email', displayName: 'E-mail:' },
    { name: 'data-nascimento', displayName: 'Data de Nascimento' },
    { name: 'nome-mae', displayName: 'Nome da mãe:' },
    { name: 'cpf-cnpj', displayName: 'CPF ou CNPJ:' },
    { name: 'vencimento', displayName: 'Dia do vencimento:' },
    { name: 'tipo-pagamento', displayName: 'Forma de Pagamento:' }
  ]

  const output = document.getElementById('output')
  output.innerHTML = '' // Limpa qualquer conteúdo anterior

  for (const [name, value] of formData.entries()) {
    const field = fieldMappings.find(field => field.name === name)
    if (field) {
      const listItem = document.createElement('li')
      listItem.innerHTML = `<span>${field.displayName}</span> ${value}`
      output.appendChild(listItem)
    }
  }
}

function validateForm() {
  const steps = document.getElementsByClassName('step')
  const inputs = steps[currentStep].querySelectorAll('input[required], input[data-input-type]')
  let valid = true

  inputs.forEach(input => {
    if (input.hasAttribute('required') && input.value.trim() === '') {
      input.classList.add('invalid')
      valid = false
    } else if (
      input.getAttribute('data-input-type') &&
      input.getAttribute('data-valid') !== 'true'
    ) {
      input.classList.add('invalid')
      valid = false
    } else {
      input.classList.remove('invalid')
    }
  })

  return valid
}

function setStep() {
  const stepsList = document.querySelectorAll('.plan-steps li')
  const stepsForm = document.querySelector('#multiStepForm .step.active').getAttribute('data-step')

  stepsList.forEach(step => {
    step.classList.remove('active')
  })
  const stepsListActive = document.querySelector(`.plan-steps li[data-step="${stepsForm}"]`)
  // console.log(stepsListActive)

  stepsListActive.classList.add('active')
}
