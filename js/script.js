const tables = document.querySelectorAll('.table')
tables.forEach(table => {
  const adicionalBoxes = table.querySelectorAll('.adicional-boxes')
  const price = table.querySelector('.price')
  const speed = table.querySelector('.speed')

  adicionalBoxes.forEach(box => {
    const switches = box.querySelectorAll('.btn-switch')
    switches.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) {
          switches.forEach(btns => {
            btns.classList.remove('active')
          })

          price.innerText = price.dataset.price
          speed.innerText = speed.dataset.speed
        } else {
          switches.forEach(btns => {
            btns.classList.remove('active')
          })
          btn.classList.add('active')

          price.innerText = btn.dataset.price
          speed.innerText = btn.dataset.speed
        }
      })
    })
  })
})

// Função para enviar dados
function sendData(table) {
  const chosenTable = document.querySelector(`.${table}`)

  const speed = chosenTable.querySelector('.speed').innerText
  const price = chosenTable.querySelector('.price').innerText
  let time = chosenTable.querySelector('.time')
  let adicional = chosenTable.querySelector('.btn-switch.active')
  if (adicional) {
    adicional = adicional.closest('.adicional-box').querySelector('.description').innerText
  }
  if (time) {
    time = time.innerText
  }

  // console.log(
  //   `velocidade:${speed}|preço:${price}|tempo:${time}|adicional:${adicional}`
  // )

  const data = {
    price: price,
    speed: speed,
    time: time,
    adicional: adicional
  }
  const queryString = new URLSearchParams(data).toString()
  window.location.href = 'compra.php?' + queryString
}

// Função para obter parâmetros da query string
function getQueryParams() {
  const params = new URLSearchParams(window.location.search)
  return {
    price: params.get('price'),
    speed: params.get('speed'),
    time: params.get('time'),
    adicional: params.get('adicional')
  }
}

// Função para exibir dados na Página 2
function displayData() {
  const data = getQueryParams()
  const speed = document.querySelector('.menu .speed')
  const price = document.querySelector('.menu .price')
  const adicional = document.querySelector('.menu .adicional')
  const time = document.querySelector('.menu .time')
  const velocidade = document.querySelector('.form .velocidade')
  const preco = document.querySelector('.form .preco')

  if (velocidade) {
    velocidade.value = data.speed
  }

  if (speed) {
    speed.innerText = data.speed
  }

  if (preco) {
    preco.value = data.price
  }

  if (price) {
    price.innerText = data.price
  }

  if (adicional) {
    if (data.adicional !== 'null') {
      adicional.innerText = data.adicional
    } else {
      adicional.innerText = ''
    }
  }

  if (time) {
    if (data.time !== 'null') {
      time.innerText = data.time
    } else {
      time.innerText = ''
    }
  }
}
// Verifica se está na Página 2 e exibe os dados
if (window.location.pathname.endsWith('compra.php')) {
  window.onload = displayData
}
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
      listItem.innerHTML = `<span>${field.displayName}<span> ${value}`
      output.appendChild(listItem)
    }
  }
}

$(document).ready(function () {
  $('#numero').inputmask({ mask: '9[9][9][9]', greedy: false })
  $('#telefone').inputmask('(99)99999-9999')
  $('#nascimento').inputmask('99/99/9999')
  $('#cpf-cnpj').inputmask({
    mask: ['999.999.999-99', '99.999.999-9999/99'],
    keepStatic: true
  })
})

var swiper = new Swiper('.tables', {
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
})
