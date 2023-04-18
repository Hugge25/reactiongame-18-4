input.onButtonPressed(Button.A, function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        Player1 += 1
        led.plot(0, Player1 - 1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        Player2 += 1
        led.plot(4, Player2 - 1)
    }
})
let Player2 = 0
let Player1 = 0
while (Player1 != 3 || Player1 != 3) {
    basic.pause(randint(3000, 5000))
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (pins.digitalReadPin(DigitalPin.P1) == 1 || pins.digitalReadPin(DigitalPin.P2) == 1) {
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (Player1 == 3) {
        basic.showString("A")
    } else if (Player2 == 3) {
        basic.showString("B")
    }
}
