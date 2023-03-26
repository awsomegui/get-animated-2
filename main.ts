sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.baDing.play()
    simplified.moveToRandomHoleOnGrid(myMole)
    animation.runImageAnimation(
    myHammer,
    assets.animation`hammerAnimation`,
    50,
    false
    )
})
let myHammer: Sprite = null
let myMole: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
carnival.startCountdownGame(15, carnival.WinTypes.Score)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom)
game.onUpdateInterval(1000, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
