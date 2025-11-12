namespace SpriteKind {
    export const towerman = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    info.changeScoreBy(5)
    game.splash("you found a dig site!!!")
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (enemyMovement1) {
        sprite.setVelocity(50, 0)
        if (sprite.tileKindAt(TileDirection.Right, sprites.castle.tileGrass2)) {
            if (sprite.tileKindAt(TileDirection.Top, sprites.castle.tileGrass2)) {
                sprite.setVelocity(0, 50)
            } else if (sprite.tileKindAt(TileDirection.Bottom, sprites.castle.tileGrass2)) {
                sprite.setVelocity(0, -50)
            }
        } else {
            if (sprite.tileKindAt(TileDirection.Left, sprites.castle.tileGrass2)) {
                if (sprite.tileKindAt(TileDirection.Top, sprites.castle.tileGrass2)) {
                    sprite.setVelocity(0, 50)
                } else if (sprite.tileKindAt(TileDirection.Bottom, sprites.castle.tileGrass2)) {
                    if (sprite.tileKindAt(TileDirection.Right, sprites.castle.tilePath5)) {
                        sprite.setVelocity(50, 0)
                    } else {
                        sprite.setVelocity(0, -50)
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.towerman, function (sprite, otherSprite) {
    game.setDialogCursor(assets.image`myImage0`)
    game.showLongText("hello.", DialogLayout.Bottom)
    game.setDialogCursor(assets.image`kevin`)
    game.showLongText("hi. can you take pictures of the looters?", DialogLayout.Bottom)
    if (Math.percentChance(25)) {
        game.setDialogCursor(assets.image`myImage0`)
        game.showLongText("looters, turn back or your pictures will be taken!!", DialogLayout.Bottom)
        game.setDialogCursor(assets.image`marv`)
        game.showLongText("ok, but ill be back!!!", DialogLayout.Bottom)
    } else {
        game.setDialogCursor(assets.image`myImage0`)
        game.showLongText("looters, turn back or your pictures will be taken!!", DialogLayout.Bottom)
        game.setDialogCursor(assets.image`hary`)
        game.showLongText("noooo!!!", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    info.changeScoreBy(1)
})
let marv: Sprite = null
let hary: Sprite = null
let enemyMovement1 = false
enemyMovement1 = false
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level1`)
let me = sprites.create(assets.image`kevin`, SpriteKind.Player)
tiles.placeOnTile(me, tiles.getTileLocation(30, 29))
scene.cameraFollowSprite(me)
controller.moveSprite(me)
let tower_man = sprites.create(assets.image`myImage0`, SpriteKind.towerman)
tiles.placeOnRandomTile(tower_man, sprites.castle.tileDarkGrass2)
// Enables enemy movement; can be used as a trigger when we encounter the site
enemyMovement1 = true
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(50)) {
        hary = sprites.create(assets.image`hary`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(hary, sprites.castle.tilePath4)
        hary.setVelocity(50, 0)
    } else {
        marv = sprites.create(assets.image`marv`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(marv, sprites.castle.tilePath4)
        marv.setVelocity(50, 0)
    }
})
