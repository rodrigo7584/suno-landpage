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

  localStorage.setItem('velocidade', speed)

  const price = chosenTable.querySelector('.price').innerText
  let time = chosenTable.querySelector('.time')
  let adicional = chosenTable.querySelector('.btn-switch.active')
  if (adicional) {
    adicional = adicional.closest('.adicional-box').querySelector('.description').innerText
  }
  if (time) {
    time = time.innerText
  }

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
