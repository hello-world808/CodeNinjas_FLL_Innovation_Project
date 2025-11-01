// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`28001000010101010101010101010101111313131201010101010101010101010101010101010101010101010101010101010101010101010f0101011001010101010101010101010101010101010101010101010101010101010101010101010f0101011001010101010101010101010101010101010101010101010101010101010101010101010e0e010e0e010101010101010101010101010101010101010101010101010101010101010101010101010d0101010101010101010101010101010101010101010101010101010101010101010101010101010d0101010101010101010101010101020202020202020202010101010101010101010101010101010d0101010101010101010101010102030303030303030302020101010101010101010101010101010d010101010101010101010101020303030303030303030302020101010101010101010101010101020101010101010101010101020203030303030303030303030301010b010101010101010101010102020101010101010101010202030303030303030303030303080a09090909090f0f0f0101010101010201010101010101010202030303030303030303030303030301010c0101010101090909010101010202020101010108020203030303030303030303030303030301010101010101010101090909010101010202020101010103030303030303030303030303030303010101010101010101010101090901010101010202020202030303030303030303030306060505050101010101010101010101010109090909090909090909010303030303030303030707060605040401010101010101010101010101010101010101010101010203030303030303030307070606050404`, img`
............22222.......................
............2...2.......................
............2...2.......................
............22.22.......................
.............2.2........................
.............2.2.............222222222..
.............2.2............2........22.
.............2.2...........2..........22
.222.........2.22.........22............
2222222222...2..2........22............2
.........222.22.222.....22..............
22222222...2222...222.222...............
.......222...2222...2222................
.........222..22222.....................
...........22...........................
............222222222222................
`, [myTiles.transparency16,sprites.castle.tileGrass2,myTiles.tile1,sprites.builtin.forestTiles10,sprites.dungeon.chestClosed,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen,myTiles.tile2,sprites.castle.tilePath5,sprites.castle.tilePath4,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11,myTiles.tile12,myTiles.tile13], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile11":
            case "tile13":return tile13;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
