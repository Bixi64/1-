basic.showLeds(`
    # . . . .
    . # . . .
    . . # . .
    . . . # .
    . . . . #
    `)
basic.forever(function () {
    basic.pause(2000)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
})
basic.forever(function () {
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
basic.forever(function () {
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
