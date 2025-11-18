namespace SpriteKind {
    export const towerman = SpriteKind.create()
}
sprites.onCreated(SpriteKind.towerman, function (sprite) {
    tiles.placeOnRandomTile(sprite, sprites.castle.tileDarkGrass2)
})
function digSite (digSiteNum: number) {
    if (digSiteNum == 0) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (digSiteNum == 1) {
        tiles.setCurrentTilemap(tilemap`level3`)
    } else if (digSiteNum == 2) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (digSiteNum == 3) {
        tiles.setCurrentTilemap(tilemap`level5`)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    info.changeScoreBy(5)
    game.splash("you found a dig site!!!")
    tiles.setTileAt(location, sprites.castle.tilePath5)
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
    sprites.destroy(otherSprite)
})
sprites.onDestroyed(SpriteKind.towerman, function (sprite) {
    pause(5000)
    tower_man = sprites.create(assets.image`myImage0`, SpriteKind.towerman)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    digSite(1)
    tiles.setTileAt(location, sprites.castle.tilePath5)
    digSiteNum = 1
    direction = "right"
    enemyMovement1 = true
})
let marv: Sprite = null
let hary: Sprite = null
let direction = ""
let digSiteNum = 0
let tower_man: Sprite = null
let enemyMovement1 = false
enemyMovement1 = false
let digSiteOneIsConquered = false
let digSiteTwoIsConquered = false
let digSiteThreeIsConquered = false
digSite(0)
info.setScore(0)
let me = sprites.create(assets.image`kevin`, SpriteKind.Player)
game.setDialogCursor(assets.image`myImage0`)
game.showLongText("Welcome to the First LEGO League Archaeology Defense Game! There are three unique dig sites based off of real archaeological sites.", DialogLayout.Full)
game.showLongText("Your goal is to load into these sites and place protections around the map, from information stations to more active deterrents.", DialogLayout.Full)
game.showLongText("When you defend all three sites from looters, vandals, and those unintentionally disrupting a dig site, you win the game. Good luck!", DialogLayout.Full)
tiles.placeOnTile(me, tiles.getTileLocation(0, 31))
scene.cameraFollowSprite(me)
controller.moveSprite(me)
tower_man = sprites.create(assets.image`myImage0`, SpriteKind.towerman)
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Right)) {
            if (value.tileKindAt(TileDirection.Bottom, sprites.castle.tileGrass2)) {
                value.setVelocity(0, -50)
            } else if (value.tileKindAt(TileDirection.Top, sprites.castle.tileGrass2)) {
                value.setVelocity(0, 50)
            } else {
                value.setVelocity(-50, 0)
            }
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            if (value.tileKindAt(TileDirection.Bottom, sprites.castle.tileGrass2)) {
                value.setVelocity(0, -50)
            } else if (value.tileKindAt(TileDirection.Top, sprites.castle.tileGrass2)) {
                value.setVelocity(0, 50)
            } else {
                value.setVelocity(50, 0)
            }
        } else if (value.isHittingTile(CollisionDirection.Bottom)) {
            if (value.tileKindAt(TileDirection.Right, sprites.castle.tileGrass2)) {
                value.setVelocity(-50, 0)
            } else if (value.tileKindAt(TileDirection.Left, sprites.castle.tileGrass2)) {
                value.setVelocity(50, 0)
            } else {
                value.setVelocity(0, -50)
            }
        } else if (value.isHittingTile(CollisionDirection.Top)) {
            if (value.tileKindAt(TileDirection.Right, sprites.castle.tileGrass2)) {
                value.setVelocity(-50, 0)
            } else if (value.tileKindAt(TileDirection.Left, sprites.castle.tileGrass2)) {
                value.setVelocity(50, 0)
            } else {
                value.setVelocity(0, 50)
            }
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (digSiteNum == 1) {
        if (Math.percentChance(50)) {
            hary = sprites.create(assets.image`hary`, SpriteKind.Enemy)
            tiles.placeOnRandomTile(hary, sprites.castle.tilePath4)
            hary.setVelocity(50, 0)
        } else {
            marv = sprites.create(assets.image`marv`, SpriteKind.Enemy)
            tiles.placeOnRandomTile(marv, sprites.castle.tilePath4)
            marv.setVelocity(50, 0)
        }
    }
})
