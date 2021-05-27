const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const countdown = document.getElementById('countdown')
const year = document.getElementById('year')
const spinner = document.querySelector('.spinner')

// get the current year
const currentYear = new Date().getFullYear()
// put current year + 1, so every year is next year for countdown
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

// Update countdown
function updateCountDown() {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    // console.log(difference)

    const d = Math.floor(difference / 1000 / 60 / 60 / 24)
    // console.log(d)
    const h = Math.floor(difference / 1000 / 60 / 60) % 24
    // console.log(h)
    const m = Math.floor(difference / 1000 / 60) % 60
    // console.log(m)
    const s = Math.floor(difference / 1000) % 60
    // console.log(s)

    days.innerHTML = d
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m < 10 ? '0' + m : m
    seconds.innerHTML = s < 10 ? '0' + s : s

    // set background year
    year.innerHTML = currentYear + 1
}
// updateCountDown()

// Show spinner
setTimeout(() => {
    spinner.remove()
    countdown.style.display = 'flex'
}, 1000);

setInterval(updateCountDown, 1000)


