input.onButtonPressed(Button.A, function () {
    servo_angle += 10
    servos.P0.setAngle(servo_angle)
    basic.pause(100)
    servos.P0.stop()
    basic.showNumber(servo_angle)
})
input.onButtonPressed(Button.AB, function () {
    servos.P0.setAngle(0)
    servo_angle = 0
    basic.showNumber(servo_angle)
    servos.P0.stop()
})
input.onButtonPressed(Button.B, function () {
    servo_angle += -10
    servos.P0.setAngle(servo_angle)
    basic.pause(100)
    servos.P0.stop()
    basic.showNumber(servo_angle)
})
let servo_angle = 0
servos.P0.setAngle(0)
servo_angle = 0
basic.showNumber(servo_angle)
servos.P0.stop()
