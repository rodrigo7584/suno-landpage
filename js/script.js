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
    adicional = adicional
      .closest('.adicional-box')
      .querySelector('.description').innerText
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
  window.location.href = 'compra.html?' + queryString
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
  if (velocidade) {
    velocidade.value = data.speed
  }

  if (speed) {
    speed.innerText = data.speed
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
if (window.location.pathname.endsWith('compra.html')) {
  window.onload = displayData
}
//form
let currentStep = 0
showStep(currentStep)

function showStep(n) {
  const steps = document.getElementsByClassName('step')
  steps[n].classList.add('active')
  if (n == 0) {
    document.getElementById('prevBtn').style.display = 'none'
  } else {
    document.getElementById('prevBtn').style.display = 'inline'
  }
  if (n == steps.length - 1) {
    document.getElementById('nextBtn').innerText = 'Enviar'
    document.getElementById('nextBtn').setAttribute('type', 'submit')
  } else {
    document.getElementById('nextBtn').innerText = 'Continuar'
    document.getElementById('nextBtn').setAttribute('type', 'button')
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
  const allLabels = document.querySelectorAll('.payday-option')
  allLabels.forEach(lbl => lbl.classList.remove('active'))
  label.classList.add('active')
}
function setActivePayType(label) {
  const allLabels = document.querySelectorAll('.paytype-option')
  allLabels.forEach(lbl => lbl.classList.remove('active'))
  label.classList.add('active')
}
