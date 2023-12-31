let Pausebtn = document.getElementById("pausebtn")
let Startbtn = document.getElementById("startbtn")
let Resetbtn = document.getElementById("resetbtn")

let Seconds = document.getElementById("seconds")
let Minutes = document.getElementById("minutes")
let Hours = document.getElementById("hours")

//let Milisec = 000
let Sec = 00
let Min = 00
let Hr = 00

let Interval

Startbtn.addEventListener("click", startfunction)
Resetbtn.addEventListener("click", resetfunction)



function startfunction() {

    Startbtn.removeEventListener("click", startfunction)
    Pausebtn.addEventListener("click", pausefunction)
    Interval = setInterval(secondfunction, 1000)

}


function secondfunction() {
    Sec++
    Seconds.textContent = Sec

    if (Sec < 10) {
        Seconds.textContent = "0" + Sec
    }

    if (Sec >= 60) {
        minute()
        Sec = 0
    }

}

function minute() {
    Min++
    Minutes.textContent = Min

    if (Min < 10) {
        Minutes.textContent = "0" + Min
    }

    if (Min >= 60) {
        hour()
        Min = 0
    }

}

function hour() {
    Hr++
    Hours.textContent = Hr
    if (Hr < 10) {
        Hours.textContent = "0" + Hr
    }
}

function resetfunction() {
    clearInterval(Interval)

    Sec = 00
    Min = 00
    Hr = 00
    Seconds.textContent = "00"
    Minutes.textContent = "00"
    Hours.textContent = "00"

    pausebtn.textContent = "Pause"
    Pausebtn.removeEventListener("click", pausefunction)
    Pausebtn.removeEventListener("click", playfunction)
    
    Startbtn.addEventListener("click", startfunction)
}

function pausefunction() {
    clearInterval(Interval)
    pausebtn.textContent = "Play"
    Pausebtn.removeEventListener("click", pausefunction)
    Pausebtn.addEventListener("click", playfunction)
}

function playfunction() {
    Interval = setInterval(secondfunction, 1000)
    Pausebtn.removeEventListener("click", playfunction)
    Pausebtn.addEventListener("click", pausefunction)
    pausebtn.textContent = "Pause"
}