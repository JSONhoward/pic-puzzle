import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Arrows from './Arrows/Arrows'
import { useSetRecoilState, useResetRecoilState } from 'recoil'
import { ShowArrows } from '../../../Store'

const StyledTile = styled.div`
position: relative;
display: grid;
place-items: center;
color: white;
grid-column: ${props => props.column};
grid-row: ${props => props.row};
border: 1px solid white;
`

const Tile = ({ column, row, content, show, tileId }) => {
    const setShowArrow = useSetRecoilState(ShowArrows)
    const resetArrows = useResetRecoilState(ShowArrows)

    const handleMouseEnter = (e) => {
        resetArrows()
        setShowArrow(prevVal => {
            let state = {
                ...prevVal,
                [`tile${e.target.getAttribute('name')}`]: true
            }
            return state
        })
    }

    return (
        <StyledTile name={tileId} tileId={tileId} onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={resetArrows} column={column} row={row}>
            {show && <Arrows tileNum={tileId} column={column} row={row} />}
            {content}
        </StyledTile>
    )
}

Tile.propTypes = {
    column: PropTypes.number,
    row: PropTypes.number
}

export default Tile
