let shift = 0
let values = [22, 160, 243, 243, 160]
basic.forever(function () {
    basic.pause(100)
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plotBrightness(x, y, values[(shift + y) % 5])
        }
    }
    shift += 1
})
