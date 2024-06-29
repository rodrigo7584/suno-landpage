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
  if (n == 1 && !validateForm()) return false
  steps[currentStep].classList.remove('active')
  currentStep += n
  if (currentStep >= steps.length) {
    document.getElementById('multiStepForm').submit()
    return false
  }
  showStep(currentStep)
}

function validateForm() {
  const steps = document.getElementsByClassName('step')
  const inputs = steps[currentStep].querySelectorAll('input[required]')
  let valid = true

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      input.classList.add('invalid')
      valid = false
    } else {
      input.classList.remove('invalid')
    }
  })

  return valid
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

function showData() {
  const form = document.getElementById('multiStepForm')
  const formData = new FormData(form)

  const fieldMappings = [
    { name: 'preco', displayName: 'Preço:' },
    { name: 'velocidade', displayName: 'Velocidade:' },
    { name: 'endereco', displayName: 'Endereço:' },
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

$(document).ready(function () {
  $('#numero').inputmask({ mask: '9[9][9][9]', greedy: false })
  $('#telefone').inputmask('(99)99999-9999')
  $('#nascimento').inputmask('99/99/9999')
  $('#cep').inputmask('99999-999')
  $('#cpf-cnpj').inputmask({
    mask: ['999.999.999-99', '99.999.999-9999/99'],
    keepStatic: true
  })
})

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
