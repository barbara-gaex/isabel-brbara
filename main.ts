input.onButtonPressed(Button.A, function () {
    let Contador = 0
    basic.showNumber(Contador)
})
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
let Fijar_contador = 0
basic.forever(function () {
    basic.pause(1000)
    Fijar_contador += 1
})
