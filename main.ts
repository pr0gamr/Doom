controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(Render.getRenderSpriteInstance(), 16, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Bullet`, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 100, Render.getAttribute(Render.attribute.dirY) * 100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
info.onCountdownEnd(function () {
    game.setGameOverMessage(false, "YOU RAN OUT OF TIME")
    game.gameOver(false)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    sprites.destroy(sprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
game.setGameOverMessage(false, "YOU DIED")
game.setGameOverMessage(true, "YOU BEAT THE INVASION")
let spawners = 5
tiles.setCurrentTilemap(tilemap`level1`)
Render.setViewMode(ViewMode.raycastingView)
tiles.placeOnRandomTile(Render.getRenderSpriteInstance(), sprites.builtin.forestTiles10)
let mySprite = sprites.create(assets.image`Enemy`, SpriteKind.Enemy)
mySprite.follow(Render.getRenderSpriteInstance(), 20)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
info.setLife(5)
game.showLongText("PRESS A WHEN READY", DialogLayout.Full)
info.startCountdown(180)
forever(function () {
    if (spawners == 0) {
        game.gameOver(true)
    }
})
forever(function () {
    pause(2000)
    mySprite = sprites.create(assets.image`Enemy`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    mySprite.follow(Render.getRenderSpriteInstance(), 20)
})
