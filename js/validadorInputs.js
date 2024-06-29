function initInputName() {
  const inputName = document.querySelectorAll('input[data-input-type="name"]')

  if (inputName.length > 0) {
    inputName.forEach(input => {
      // Adiciona um evento de foco ao input
      input.addEventListener('focus', function () {
        // Verifica a validade do input quando ele ganha foco
        validateInputName(input)
      })

      // Adiciona um evento de input ao input para validar enquanto o usuário digita
      input.addEventListener('input', function () {
        validateInputName(input)
      })
    })
  }
}

function validateInputName(input) {
  const valor = input.value.trim()
  // Verifica se o valor do input corresponde ao padrão desejado
  const regex = /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}(?:\s[a-zA-Z]*)*$/
  if (!regex.test(valor)) {
    input.classList.add('invalid')
    input.setAttribute('data-valid', 'false')
  } else {
    input.classList.remove('invalid')
    input.setAttribute('data-valid', 'true')
  }
}

function initInputCellphone() {
  const inputsCellphone = document.querySelectorAll('input[data-input-type="cellphone"]')
  if (inputsCellphone.length > 0) {
    inputsCellphone.forEach(input => {
      input.addEventListener('input', function (event) {
        const input = event.target
        let valor = input.value.replace(/\D/g, '') // Remove caracteres não numéricos

        let formattedValue = ''

        // Formato: (99) 9999-9999 ou (99) 99999-9999
        if (valor.length > 0) {
          formattedValue += '(' + valor.substring(0, 2)
        }
        if (valor.length > 2) {
          formattedValue += ') ' + valor.substring(2, 6)
        }
        if (valor.length > 6) {
          formattedValue += '-' + valor.substring(6, 10)
        }
        if (valor.length > 10) {
          formattedValue =
            '(' +
            valor.substring(0, 2) +
            ') ' +
            valor.substring(2, 7) +
            '-' +
            valor.substring(7, 11)
        }

        input.value = formattedValue

        if (input.value.length <= 13) {
          input.classList.add('invalid')
          input.setAttribute('data-valid', 'false')
        } else {
          input.classList.remove('invalid')
          input.setAttribute('data-valid', 'true')
        }
      })
    })
  }
}

function initInputCep() {
  const inputCep = document.querySelectorAll('input[data-input-type="cep"]')

  if (inputCep.length > 0) {
    inputCep.forEach(input => {
      input.addEventListener('input', function (event) {
        const input = event.target
        let valor = input.value.replace(/\D/g, '') // Remove caracteres não numéricos

        let formattedValue = ''

        if (valor.length > 0) {
          formattedValue += valor.substring(0, 5)
        }
        if (valor.length > 5) {
          formattedValue += '-' + valor.substring(5, 8)
        }

        input.value = formattedValue

        if (input.value.length === 9) {
          input.classList.remove('invalid')
          input.setAttribute('data-valid', 'true')
        } else {
          input.classList.add('invalid')
          input.setAttribute('data-valid', 'false')
        }
      })
    })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  initInputName()
  initInputCellphone()
  initInputCep()
})
