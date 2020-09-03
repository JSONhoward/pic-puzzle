import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useRecoilValue, useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil'
import { FaSpinner } from 'react-icons/fa'

import Tile from './Tile/Tile'
import { TilePositions, ShowArrows, TileContent, LoadingState, puzzleImage, TileMoves } from '../../Store'
import { shuffleTileContent } from './Grid-utils'

const spinnerAnimation = keyframes`
    from {
    transform: rotate(0deg);
    }

    to {
    transform: rotate(360deg);
    }
`

const StyledGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
overflow: hidden;
`

const TitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 4rem;
width: 80vw;
max-width: 80vh;
color: rgb(30,30,30);
font-size: clamp(1rem, 5vw, 2rem);

h1 {
    text-shadow: 1px 1px 5px rgba(0,0,0,.5);
}
`

const Loading = styled('div')`
position: relative;
height: 100%;
width: 100%;
display: grid;
place-items: center;
color: black;
overflow: hidden;
`

const Spinner = styled.div`
animation: ${spinnerAnimation} 2s linear;
`

const GridContainer = styled.div`
display: grid;
height: 80vh;
width: 80vh;
/* border: 2px solid rgb(30,30,30); */
box-shadow: 1px 1px 5px black;


@media screen and (orientation: portrait) {
    height: 80vw;
    width: 80vw;
}
`

const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 15vh;
width: 80vh;

button {
    height: 3rem;
    width: 7rem;
    color: whitesmoke;
    background-color: rgb(30,30,30);
    border: none;
    box-shadow: 1px 1px 5px rgb(0,0,0,.5);
    border-radius: 5px;
    font-size: 1.25rem;
    cursor: pointer;
}

@media screen and (orientation: portrait) {
    width: 80vw;
        font-size: .5rem;

    button {
        width: 5rem;
    }
}
`

const Grid = () => {
    const tilePos = useRecoilValue(TilePositions)
    const showArrow = useRecoilValue(ShowArrows)
    const [tileContent, setTileContent] = useRecoilState(TileContent)
    const [loading, setLoading] = useRecoilState(LoadingState)
    const setImage = useSetRecoilState(puzzleImage)
    const resetTiles = useResetRecoilState(TileContent)
    const resetMoves = useResetRecoilState(TileMoves)

    const { tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9 } = tilePos

    const getNewImage = async () => {
        setLoading(true)
        resetMoves()
        resetTiles()
        let img = await fetch(`https://picsum.photos/1000`)
        setImage(img.url)
        setLoading(false)
    }

    return (
        <>
            <TitleContainer>
                <h1>Pic Puzzle</h1>
            </TitleContainer>
            <GridContainer>
                {
                    loading ?
                        (
                            <Loading>
                                <Spinner>
                                    <FaSpinner size={'4rem'} />
                                </Spinner>
                            </Loading>
                        )
                        :
                        (
                            <StyledGrid>
                                <Tile tileId={1} column={tile1.col} row={tile1.row} show={showArrow.tile1} content={tileContent.tile1} />
                                <Tile tileId={2} column={tile2.col} row={tile2.row} show={showArrow.tile2} content={tileContent.tile2} />
                                <Tile tileId={3} column={tile3.col} row={tile3.row} show={showArrow.tile3} content={tileContent.tile3} />
                                <Tile tileId={4} column={tile4.col} row={tile4.row} show={showArrow.tile4} content={tileContent.tile4} />
                                <Tile tileId={5} column={tile5.col} row={tile5.row} show={showArrow.tile5} content={tileContent.tile5} />
                                <Tile tileId={6} column={tile6.col} row={tile6.row} show={showArrow.tile6} content={tileContent.tile6} />
                                <Tile tileId={7} column={tile7.col} row={tile7.row} show={showArrow.tile7} content={tileContent.tile7} />
                                <Tile tileId={8} column={tile8.col} row={tile8.row} show={showArrow.tile8} content={tileContent.tile8} />
                                <Tile tileId={9} column={tile9.col} row={tile9.row} show={showArrow.tile9} content={tileContent.tile9} />
                            </StyledGrid>
                        )
                }
            </GridContainer>
            <ButtonContainer>
                <button onClick={getNewImage}>New Image</button>
                <button onClick={() => shuffleTileContent().then((obj: any) => setTileContent(obj))}>Shuffle</button>
                <button onClick={() => resetTiles()}>Reset</button>
            </ButtonContainer>
        </>
    )
}

export default Grid
