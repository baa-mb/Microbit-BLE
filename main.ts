bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteString("goodbye")
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("hello")
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
bluetooth.startUartService()
bluetooth.startButtonService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
