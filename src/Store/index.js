import {atom} from 'recoil'

export const TilePositions = atom({
    key: 'tilePos',
    default: {
        tile1: {col: 1, row: 1},
        tile2: {col: 2, row: 1},
        tile3: {col: 3, row: 1},
        tile4: {col: 1, row: 2},
        tile5: {col: 2, row: 2},
        tile6: {col: 3, row: 2},
        tile7: {col: 1, row: 3},
        tile8: {col: 2, row: 3},
        tile9: {col: 3, row: 3},
    }
})

export const TileContent = atom({
    key: 'tileContent',
    default: {
        tile1: 1,
        tile2: 2,
        tile3: 3,
        tile4: 4,
        tile5: 5,
        tile6: 6,
        tile7: 7,
        tile8: 8,
        tile9: 9,
    }
})

export const ShowArrows = atom({
    key: 'showArrows',
    default: {
        tile1: false,
        tile2: false,
        tile3: false,
        tile4: false,
        tile5: false,
        tile6: false,
        tile7: false,
        tile8: false,
        tile9: false,
    }
})