import React from 'react'
import styled from 'styled-components'
import { useResetRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'

import Arrows from './Arrows/Arrows'
import { ShowArrows, puzzleImage, TileContent, TileMoves } from '../../../Store'

const StyledTile = styled('div')<{col: any, row: any}>`
position: relative;
display: grid;
place-items: center;
color: white;
grid-column: ${props => props.col};
grid-row: ${props => props.row};
overflow: hidden;
`

const EmptyTile = styled.div`
display: grid;
place-items: center;
height: 100%;
width: 100%;
font-size: 2rem;
background-color: rgb(30,30,30);
`

const ContentImage = styled('div')<{tile: Number, bg: String}>`
position: relative;
height: 100%;
width: 100%;
background-image: ${props => props.tile !== null ? 'url(' + props.bg + ')' : 'none'};
background-size: 80vh;
background-position: ${props => {
        switch (props.tile) {
            case 1:
                return '0 0'
            case 2:
                return '50% 0'
            case 3:
                return '100% 0'
            case 4:
                return '0 50%'
            case 5:
                return '50% 50%'
            case 6:
                return '100% 50%'
            case 7:
                return '0 100%'
            case 8:
                return '50% 100%'
            default:
                return '0 0'
        }
    }};

@media screen and (orientation: portrait) {
    background-size: 80vw;
}
`

type TileProps = {
    column: Number,
    row: Number,
    content: Number | null,
    show: Boolean,
    tileId: Number
}

const Tile: React.FC<TileProps> = ({ column, row, content, show, tileId }) => {
    const resetArrows = useResetRecoilState(ShowArrows)
    const tileImage = useRecoilValue<String>(puzzleImage)
    const tileContent = useRecoilValue<Object>(TileContent)
    const setShowArrow = useSetRecoilState<Boolean | any>(ShowArrows)
    const moveCount = useRecoilValue(TileMoves)

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        let element = e.target as HTMLElement
        const tileNum = element.getAttribute('name')
        const tileContentProperty = (tileContent as {[key: string]: any})[`tile${tileNum}`]
        resetArrows()
        setShowArrow((prevVal: any) => {
            if (tileContentProperty !== null) {
                let state = {
                    ...prevVal,
                    [`tile${tileNum}`]: true
                }
                return state
            }
            return prevVal
        })
    }

    return (

        <StyledTile col={column} row={row}>
            {
                content === null ?
                    (
                        <>
                            <EmptyTile>
                            <p>Moves: {moveCount}</p>
                            </EmptyTile>
                        </>
                    )
                    :
                    (
                        <ContentImage onMouseEnter={(e: React.MouseEvent<HTMLDivElement>): void => handleMouseEnter(e)} onMouseLeave={resetArrows} bg={tileImage} tile={content}>
                            {show && <Arrows tileNum={tileId} column={column} row={row} />}
                        </ContentImage>
                    )
            }
        </StyledTile>

    )
}

export default Tile
