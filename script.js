const background = document.getElementById('bg')
const loadingText = document.getElementById('loading-text')
const intro = document.getElementById('intro')

int = setInterval(backgroundimgs, 30)
let load = 0;

function backgroundimgs() {
    load++
    if (load > 99) {
        clearInterval(int)
        if (load == 100) {
            intro.classList.remove('hide')
        }
    }
    loadingText.innerText = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)

    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}



function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - out_min) + out_min
}

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date()
    const secondHandRatio = currentDate.getSeconds() / 60
    const minuteHandRatio = (secondHandRatio + currentDate.getMinutes()) / 60
    const hourHandRatio = (minuteHandRatio + currentDate.getHours()) / 12

    setClockRotation(secondHand, secondHandRatio)
    setClockRotation(minuteHand, minuteHandRatio)
    setClockRotation(hourHand, hourHandRatio)

}

function setClockRotation(hand, ratio) {
    hand.style.setProperty('--rotate', ratio * 360)
}

setClock()