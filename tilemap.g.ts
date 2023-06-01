// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000000010100010000000000000000000000000101000100000001010101010100000001010001000000000100000001000000010100010101010100000000010000000101000000000000000000000100000001010000000100000001010101010000010100000001000000000000000100000101000000010101010101000001000001010000000000000000000000010000010101000000000000000000000000000101000001000101010100000000000001010000010000000001000000000000010102000100000000010000000000000101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 . . . 2 2 2 2 2 2 . . . 2 
2 . 2 . . . . 2 . . . 2 . . . 2 
2 . 2 2 2 2 2 . . . . 2 . . . 2 
2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 . . . 2 2 2 2 2 . . 2 
2 . . . 2 . . . . . . . 2 . . 2 
2 . . . 2 2 2 2 2 2 . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 2 . . . . . . . . . . . . . 2 
2 . . 2 . 2 2 2 2 . . . . . . 2 
2 . . 2 . . . . 2 . . . . . . 2 
2 . . 2 . . . . 2 . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.builtin.forestTiles10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
