enum RadioMessage {
    message1 = 49434,
    Kick = 37972
}
let mySprite = ""
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = game.askForString("", 24)
    story.printCharacterText(mySprite)
    radio.sendString(mySprite)
})
radio.onReceivedString(function (receivedString) {
    story.printCharacterText(receivedString)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    story.showPlayerChoices("Kick", "Return", "Exit")
    if (story.checkLastAnswer("Kick")) {
        radio.sendMessage(RadioMessage.Kick)
    } else if (story.checkLastAnswer("Exit")) {
        game.over(true)
    }
})
radio.onReceivedMessage(RadioMessage.Kick, function () {
    game.over(false)
})
