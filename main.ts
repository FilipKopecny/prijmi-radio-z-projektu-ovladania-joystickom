radio.onReceivedValue(function (name, value) {
    basic.clearScreen()
    if (name == "XLed") {
        XLed = value
    }
    if (name == "YLed") {
        YLed = value
    }
    led.plot(XLed, YLed)
})
let YLed = 0
let XLed = 0
radio.setGroup(1)
