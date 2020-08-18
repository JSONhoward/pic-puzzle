import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Arrows from './Arrows/Arrows'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { ShowArrows, puzzleImage, TileContent } from '../../../Store'
import { useRecoilValue } from 'recoil'

const StyledTile = styled.div`
position: relative;
display: grid;
place-items: center;
color: white;
grid-column: ${props => props.column};
grid-row: ${props => props.row};
border: 1px solid white;
overflow: hidden;
`

const ContentImage = styled.div`
position: relative;
height: 100%;
width: 100%;
background-image: ${props => props.tile !== null ? 'url(' + props.bg + ')' : 'none'};
background-size: 90vh;
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
    background-size: 90vw;
}
`

const Tile = ({ column, row, content, show, tileId }) => {
    const resetArrows = useResetRecoilState(ShowArrows)
    const tileImage = useRecoilValue(puzzleImage)
    const tileContent = useRecoilValue(TileContent)
    const setShowArrow = useSetRecoilState(ShowArrows)

    const handleMouseEnter = (e) => {
        const tileNum = e.target.getAttribute('name')
        resetArrows()
        setShowArrow(prevVal => {
            if (tileContent[`tile${tileNum}`] !== null) {
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
        <StyledTile tileId={tileId} column={column} row={row}>
            <ContentImage name={tileId} onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={resetArrows} bg={tileImage} tile={content}>
                {show && <Arrows tileNum={tileId} column={column} row={row} />}
            </ContentImage>
        </StyledTile>
    )
}

Tile.propTypes = {
    column: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    content: PropTypes.node,
    show: PropTypes.bool.isRequired,
    tileId: PropTypes.number.isRequired
}

export default Tile
