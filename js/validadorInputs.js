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
  const regex = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}(?:\s[a-zA-Z]*)*$/
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
            valor.substring(2, 3) +
            ' ' +
            valor.substring(3, 7) +
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
function validateEmail(input) {
  const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{3,}\.com(\.[a-zA-Z]{2})?$/
  if (emailRegex.test(input.value)) {
    input.classList.remove('invalid')
    input.setAttribute('data-valid', 'true')
    return true
  } else {
    input.classList.add('invalid')
    input.setAttribute('data-valid', 'false')
    return false
  }
}
function initInputEmail() {
  const inputEmail = document.querySelectorAll('input[data-input-type="email"]')

  if (inputEmail.length > 0) {
    inputEmail.forEach(input => {
      input.addEventListener('input', function (event) {
        validateEmail(event.target)
      })
    })
  }
}
function validateHouseNumber(input) {
  // Remove todos os caracteres não numéricos
  input.value = input.value.replace(/\D/g, '')

  // Verifica se o input contém apenas números, não é "0", e tem no máximo 3 dígitos
  if (input.value.length <= 4 && input.value !== '0') {
    input.classList.remove('invalid')
    input.setAttribute('data-valid', 'true')
    return true
  } else {
    input.classList.add('invalid')
    input.setAttribute('data-valid', 'false')
    return false
  }
}

function initInputHouseNumber() {
  const inputNumber = document.querySelectorAll('input[data-input-type="houseNumber"]')

  if (inputNumber.length > 0) {
    inputNumber.forEach(input => {
      input.addEventListener('input', function (event) {
        validateHouseNumber(event.target)
      })
    })
  }
}

function validateDate(input) {
  // Remove todos os caracteres não numéricos
  input.value = input.value.replace(/\D/g, '')

  let valor = input.value
  let formattedValue = ''

  // Formata o valor em dd/mm/yyyy
  if (valor.length > 0) {
    formattedValue += valor.substring(0, 2)
  }
  if (valor.length > 2) {
    formattedValue += '/' + valor.substring(2, 4)
  }
  if (valor.length > 4) {
    formattedValue += '/' + valor.substring(4, 8)
  }

  input.value = formattedValue

  // Verifica se a data está no formato correto
  if (formattedValue.length === 10) {
    const [dia, mes, ano] = formattedValue.split('/').map(Number)

    if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 1900) {
      input.classList.remove('invalid')
      input.setAttribute('data-valid', 'true')
      return true
    } else {
      input.classList.add('invalid')
      input.setAttribute('data-valid', 'false')
      return false
    }
  } else {
    input.classList.add('invalid')
    input.setAttribute('data-valid', 'false')
    return false
  }
}

function initInputDate() {
  const inputDate = document.querySelectorAll('input[data-input-type="date"]')

  if (inputDate.length > 0) {
    inputDate.forEach(input => {
      input.addEventListener('input', function (event) {
        validateDate(event.target)
      })
    })
  }
}
function formatCpfCnpj(value) {
  // Remove todos os caracteres não numéricos
  value = value.replace(/\D/g, '')

  let formattedValue = ''

  if (value.length <= 11) {
    // Formatar como CPF: 999.999.999-99
    if (value.length > 0) {
      formattedValue += value.substring(0, 3)
    }
    if (value.length > 3) {
      formattedValue = value.substring(0, 3) + '.' + value.substring(3, 6)
    }
    if (value.length > 6) {
      formattedValue =
        value.substring(0, 3) + '.' + value.substring(3, 6) + '.' + value.substring(6, 9)
    }
    if (value.length > 9) {
      formattedValue =
        value.substring(0, 3) +
        '.' +
        value.substring(3, 6) +
        '.' +
        value.substring(6, 9) +
        '-' +
        value.substring(9, 11)
    }
  } else {
    // Formatar como CNPJ: 99.999.999/9999-99
    if (value.length > 0) {
      formattedValue += value.substring(0, 2)
    }
    if (value.length > 2) {
      formattedValue = value.substring(0, 2) + '.' + value.substring(2, 5)
    }
    if (value.length > 5) {
      formattedValue =
        value.substring(0, 2) + '.' + value.substring(2, 5) + '.' + value.substring(5, 8)
    }
    if (value.length > 8) {
      formattedValue =
        value.substring(0, 2) +
        '.' +
        value.substring(2, 5) +
        '.' +
        value.substring(5, 8) +
        '/' +
        value.substring(8, 12)
    }
    if (value.length > 12) {
      formattedValue =
        value.substring(0, 2) +
        '.' +
        value.substring(2, 5) +
        '.' +
        value.substring(5, 8) +
        '/' +
        value.substring(8, 12) +
        '-' +
        value.substring(12, 14)
    }
  }

  return formattedValue
}

function validateCpfCnpj(input) {
  const value = input.value.replace(/\D/g, '')

  // Verifica se é um CPF válido (11 dígitos) ou um CNPJ válido (14 dígitos)
  if (value.length === 11 || value.length === 14) {
    input.classList.remove('invalid')
    input.setAttribute('data-valid', 'true')
    return true
  } else {
    input.classList.add('invalid')
    input.setAttribute('data-valid', 'false')
    return false
  }
}

function initInputCpfCnpj() {
  const inputCpfCnpj = document.querySelectorAll('input[data-input-type="cpf-cnpj"]')

  if (inputCpfCnpj.length > 0) {
    inputCpfCnpj.forEach(input => {
      input.addEventListener('input', function (event) {
        const formattedValue = formatCpfCnpj(event.target.value)
        event.target.value = formattedValue
        validateCpfCnpj(event.target)
      })
    })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  initInputCpfCnpj()
  initInputDate()
  initInputHouseNumber()
  initInputName()
  initInputCellphone()
  initInputCep()
  initInputEmail()
})
