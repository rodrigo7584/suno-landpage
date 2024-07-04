const tables = document.querySelectorAll('.table') //seleciona as tabelas de precos

tables.forEach(table => {
  //corre cada tabela

  const adicionalBoxes = table.querySelectorAll('.adicional-boxes') //seleciona se tem campos adicionais
  const price = table.querySelector('.price') //seleciona o campo price que tem valor padrao
  const speed = table.querySelector('.speed') //seleciona o campo speed que tem valor padrao

  adicionalBoxes.forEach(box => {
    const switches = box.querySelectorAll('.btn-switch') //seleciona cada botao dos campos adicionais

    switches.forEach(btn => {
      btn.addEventListener('click', () => {
        //se o clicado botao estiver ativo desativa todos e alimenta o topo
        if (btn.classList.contains('active')) {
          switches.forEach(btns => {
            btns.classList.remove('active')
          })
          //seta os dados do padroes que estão do html
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

  sessionStorage.setItem('speed', speed)
  sessionStorage.setItem('price', price)

  if (adicional) {
    adicional = adicional.closest('.adicional-box').querySelector('.description').innerText
    sessionStorage.setItem('adicional', adicional)
  } else {
    sessionStorage.setItem('adicional', null)
  }
  if (time) {
    time = time.innerText
    sessionStorage.setItem('time', time)
  } else {
    sessionStorage.setItem('time', null)
  }
  window.location.href = 'compra.php'
}
// Função para exibir dados na Página 2
function displayData() {
  const speed = document.querySelector('.menu .speed')
  const price = document.querySelector('.menu .price')
  const adicional = document.querySelector('.menu .adicional')
  const time = document.querySelector('.menu .time')
  const velocidade = document.querySelector('.form .velocidade')
  const preco = document.querySelector('.form .preco')

  if (velocidade) {
    velocidade.value = sessionStorage.getItem('speed')
  }

  if (speed) {
    speed.innerText = sessionStorage.getItem('speed')
  }

  if (preco) {
    preco.value = sessionStorage.getItem('price')
  }

  if (price) {
    price.innerText = sessionStorage.getItem('price')
  }

  if (adicional) {
    if (sessionStorage.getItem('adicional') !== 'null') {
      adicional.innerText = sessionStorage.getItem('adicional')
    } else {
      adicional.innerText = ''
    }
  }

  if (time) {
    if (sessionStorage.getItem('time') !== 'null') {
      time.innerText = sessionStorage.getItem('time')
    } else {
      time.innerText = ''
    }
  }
}
// Verifica se está na Página 2 e exibe os dados
if (window.location.pathname.endsWith('compra.php')) {
  window.onload = displayData
}

document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion')
  if (accordions.length > 0) {
    accordions.forEach(item => {
      const title = item.querySelector('.accordion-title')

      title.addEventListener('click', () => {
        if (item.classList.contains('active')) {
          title.nextElementSibling.style.height = '0px'
          item.classList.remove('active')
        } else {
          item.classList.add('active')
          console.log('scrollHeight:', title.nextElementSibling.scrollHeight)
          title.nextElementSibling.style.height = `${title.nextElementSibling.scrollHeight}px`
        }
      })
    })
  }
})
