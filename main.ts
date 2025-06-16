let lie = game.askForString("what's up?", 100)
let lie2 = game.askForString("is it a lie? [Y/N]", 1)
if (lie2 == "y" || lie2 == "Y") {
    game.splash("" + lie + " Is a lie!")
    game.reset()
} else if (lie2 == "n" || lie2 == "N") {
    game.splash("" + lie + " Is NOT a lie!")
    game.reset()
} else {
    game.splash("we dont understand u")
    game.reset()
}
