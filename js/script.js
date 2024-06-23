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
  const btn = chosenTable.querySelector('.btn-switch.active')
  let adicional = ''
  if (btn) {
    adicional = btn
      .closest('.adicional-box')
      .querySelector('.description').innerText
  }
  if (time) {
    time = time.innerText
  }

  console.log(
    `velocidade:${speed}|preço:${price}|tempo:${time}|tem adicional:${adicional}`
  )

  // const data = {
  //   speed: speed
  // }

  // const queryString = new URLSearchParams(data).toString()
  // window.location.href = 'compra.html?' + queryString
}

// Função para obter parâmetros da query string
function getQueryParams() {
  const params = new URLSearchParams(window.location.search)
  return {
    speed: params.get('speed')
  }
}

// Função para exibir dados na Página 2
function displayData() {
  const data = getQueryParams()
  const dataDisplay = document.getElementById('dataDisplay')

  if (dataDisplay) {
    dataDisplay.innerHTML = `
          <p>speed: ${data.speed}</p>
      `
  }
}
// Verifica se está na Página 2 e exibe os dados
if (window.location.pathname.endsWith('compra.html')) {
  window.onload = displayData
}
