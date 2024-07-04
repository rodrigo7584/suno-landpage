function enviarEmail() {
  const form = document.getElementById('multiStepForm')
  const checkbox = form.querySelector('#checkbox-agree')
  const labelMessage = form.querySelector('.label-message')

  if (checkbox.checked) {
    const formData = new FormData(form)

    labelMessage.innerHTML = 'Enviando e-mail...'
    labelMessage.style.color = '#3c7ec1'

    fetch('https://formsubmit.co/ajax/rodrigo.gandhi.oliveira@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      body: new URLSearchParams(formData).toString()
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          form.reset()
          labelMessage.innerHTML = 'E-mail enviado com sucesso'
          labelMessage.style.color = '#05b088'
          setTimeout(() => {
            window.location.href = 'index.php'
          }, 5000)
        } else {
          labelMessage.innerHTML = 'Ocorreu um erro tente mais tarde'
          labelMessage.style.color = '#cf0000'
        }
      })
      .catch(error => {
        console.error(error)
        labelMessage.innerHTML = 'Ocorreu um erro contate um administrador'
        labelMessage.style.color = '#cf0000'
      })
  } else {
    labelMessage.innerHTML = 'Você precisa concordar com os termos.'
    labelMessage.style.color = '#cf0000'
  }
}
