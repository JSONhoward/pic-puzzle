export const shuffleTileContent = async (): Promise<any> => {
    const arr = await [1, 2, 3, 4, 5, 6, 7, 8, null].sort((a, b) => .5 - Math.random())
    const obj = {
        tile1: arr[0],
        tile2: arr[1],
        tile3: arr[2],
        tile4: arr[3],
        tile5: arr[4],
        tile6: arr[5],
        tile7: arr[6],
        tile8: arr[7],
        tile9: arr[8],
    }
    return obj
}