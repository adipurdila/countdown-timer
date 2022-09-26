// Based on the code written by Jemima Abu: https://webdesign.tutsplus.com/tutorials/how-to-build-a-javascript-countdown-timer--cms-93144

/* Set countdown date as a future date with a 24 hour format */
// let countdownDate = new Date('01 January 2023 00:00')

/* Set countdown date by adding hours to current date */
// let countdownDate = new Date().setHours(new Date().getHours() + 1)

/* Set countdown date by adding minutes to current date */
// let countdownDate = new Date().setMinutes(new Date().getMinutes() + 5)

/* Set countdown date by adding seconds to current date */
let countdownDate = new Date().setSeconds(new Date().getSeconds() + 10)

let timerInterval
const daysElem = document.querySelector("#days"),
	hoursElem = document.querySelector("#hours"),
	minutesElem = document.querySelector("#minutes"),
	secondsElem = document.querySelector("#seconds"),
	timerRunningContent = document.querySelector("#timer-running"),
	timerEndContent = document.querySelector("#timer-end")

const formatTime = (time, string) => {
	return time == 1 ? `<span>${time}</span> ${string}` : `<span>${time}</span> ${string}s`
}

const startCountdown = () => {
	const now = new Date().getTime()
	const countdown = new Date(countdownDate).getTime()

	const difference = (countdown - now) / 1000

	if (difference < 1) {
		endCountdown()
	}

	let days = Math.floor(difference / (60 * 60 * 24))
	let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60))
	let minutes = Math.floor((difference % (60 * 60)) / 60)
	let seconds = Math.floor(difference % 60)

	daysElem.innerHTML = formatTime(days, "day")
	hoursElem.innerHTML = formatTime(hours, "hour")
	minutesElem.innerHTML = formatTime(minutes, "minute")
	secondsElem.innerHTML = formatTime(seconds, "second")
}

const endCountdown = () => {
	clearInterval(timerInterval)
	timerRunningContent.classList.add('hidden')
	timerEndContent.classList.add("visible")
}

window.addEventListener("load", () => {
	startCountdown()
	timerInterval = setInterval(startCountdown, 1000)
})
