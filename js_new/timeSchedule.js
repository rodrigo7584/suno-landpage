function formatDate(date) {
  let day = date.getDate()
  let month = date.getMonth() + 1 // Months are zero-indexed
  let year = date.getFullYear()

  if (day < 10) day = '0' + day
  if (month < 10) month = '0' + month

  return `${day}/${month}/${year}`
}

function addDates(dates, startDate, days, count) {
  for (let i = 0; i < count; i++) {
    dates.push(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + days))
  }
}

function getFutureDates() {
  const now = new Date()
  const hours = now.getHours()
  const dates = []

  if (hours < 11) {
    // Até 11 horas
    addDates(dates, now, 1, 2)
    addDates(dates, now, 2, 2)
    addDates(dates, now, 3, 2)
  } else if (hours < 17) {
    // Depois das 11 horas até as 5 horas
    addDates(dates, now, 1, 1)
    addDates(dates, now, 2, 2)
    addDates(dates, now, 3, 2)
  } else {
    // Depois das 5 horas
    addDates(dates, now, 2, 2)
    addDates(dates, now, 3, 2)
    addDates(dates, now, 4, 2)
  }

  return dates
}

function groupDates(dates) {
  const groupedDates = {}

  dates.forEach(date => {
    const formattedDate = formatDate(date)
    if (!groupedDates[formattedDate]) {
      groupedDates[formattedDate] = 0
    }
    groupedDates[formattedDate]++
  })

  return groupedDates
}

function createRadioGroupHTML(date, count, index) {
  let radioGroupHTML = ''

  if (count === 1) {
    radioGroupHTML += `
                    <div class="date-radio-group">
                      <div class="date-radio-option">
                        <input type="radio" name="instalacao-${index}" value="${date} Tarde (12h às 18h)" checked>
                        <label for="instalacao-${index}-tarde">Tarde (12h às 18h)</label>
                      </div>
                    </div>`
  } else if (count === 2) {
    radioGroupHTML += `
                    <div class="date-radio-group">
                      <div class="date-radio-option">
                        <input type="radio" name="instalacao-${index}" value="${date} Manhã (08h às 18h)" id="instalacao-${index}-manha" checked>
                        <label for="instalacao-${index}-manha">Manhã (08h às 12h)</label>
                      </div>
                      <div class="date-radio-option">
                        <input type="radio" name="instalacao-${index}" value="${date} Tarde (12h às 18h)" id="instalacao-${index}-tarde">
                        <label for="instalacao-${index}-tarde">Tarde (12h às 18h)</label>
                      </div>
                    </div>`
  }

  return radioGroupHTML
}

const datesDiv = document.getElementById('dates')

function displayDates() {
  if (datesDiv) {
    const dates = getFutureDates()
    const groupedDates = groupDates(dates)

    let html = ''
    let index = 0

    for (const [date, count] of Object.entries(groupedDates)) {
      html += `
                    <div class="date-group">
                      <div class="date-header">
                        <img src="./img/icon-calendar.svg" class="icon">
                        <span> ${date} </span>
                      </div>
                        ${createRadioGroupHTML(date, count, index)}
                    </div>`
      index++
    }

    datesDiv.innerHTML = html
  }
}

displayDates()
