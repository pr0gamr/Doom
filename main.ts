controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(Render.getRenderSpriteInstance(), 16, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        5 5 
        5 5 
        `, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 50, Render.getAttribute(Render.attribute.dirY) * 50)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    sprites.destroy(sprite)
})
let projectile: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Render.setViewMode(ViewMode.raycastingView)
tiles.placeOnRandomTile(Render.getRenderSpriteInstance(), sprites.builtin.forestTiles10)
let mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Enemy)
mySprite.follow(Render.getRenderSpriteInstance(), 20)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles10)
