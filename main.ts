scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    info.changeScoreBy(5)
    game.splash("you found a dig site!!!")
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile6`, function (sprite, location) {
    game.showLongText("picture taken!!!", DialogLayout.Full)
    game.setDialogCursor(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e f f f f f f e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f f f b f f f f b f f f f . 
        . f f f f 1 f d d f 1 f f f f . 
        . . f f f d d d d d d f f f . . 
        . . . f f f f f f f f f f . . . 
        . . e f f f f f f f f f f f . . 
        . . f d f f f f f f f f d f . . 
        . . f f f f f 5 5 f f f f f . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c c 3 3 b b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c c 
        . . . c b c c b 5 5 b c c c . . 
        . . . c c c d 5 5 b c . . . . . 
        `)
    game.showLongText("get out of here!!!", DialogLayout.Bottom)
    game.setDialogCursor(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e f f f f f f e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f f f b f f f f b f f f f . 
        . f f f f 1 f d d f 1 f f f f . 
        . . f f f d d d d d d f f f . . 
        . . . f f f f f f f f f f . . . 
        . . e f f f f f f f f f f f . . 
        . . f d f f f f f f f f d f . . 
        . . f f f f f 5 5 f f f f f . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    game.showLongText("nonononononononononononononono!!!", DialogLayout.Top)
})
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level1`)
let me = sprites.create(assets.image`myImage0`, SpriteKind.Player)
tiles.placeOnTile(me, tiles.getTileLocation(30, 29))
scene.cameraFollowSprite(me)
controller.moveSprite(me)
let hary = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f f f f f f f f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e f f f f f f e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f f f b f f f f b f f f f . 
    . f f f f 1 f d d f 1 f f f f . 
    . . f f f d d d d d d f f f . . 
    . . . f f f f f f f f f f . . . 
    . . e f f f f f f f f f f f . . 
    . . f d f f f f f f f f d f . . 
    . . f f f f f 5 5 f f f f f . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(hary, sprites.castle.tilePath4)
