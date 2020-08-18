import React from 'react'
import styled from 'styled-components'
import {useRecoilValue} from 'recoil'

import Tile from './Tile/Tile'
import { TilePositions, ShowArrows, TileContent } from '../../Store'

const StyledGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
overflow: hidden;
`

const GridContainer = styled.div`
display: grid;
height: 90vh;
width: 90vh;
border: 2px solid white;

@media screen and (orientation: portrait) {
    height: 90vw;
    width: 90vw;
}
`

const Grid = () => {
    const tilePos = useRecoilValue(TilePositions)
    const showArrow = useRecoilValue(ShowArrows)
    const tileContent = useRecoilValue(TileContent)
    
    const {tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9} = tilePos

    

    return (
        <GridContainer>
            <StyledGrid >
                <Tile tileId={1} column={tile1.col} row={tile1.row} show={showArrow.tile1} content={tileContent.tile1}/>
                <Tile tileId={2} column={tile2.col} row={tile2.row} show={showArrow.tile2} content={tileContent.tile2}/>
                <Tile tileId={3} column={tile3.col} row={tile3.row} show={showArrow.tile3} content={tileContent.tile3}/>
                <Tile tileId={4} column={tile4.col} row={tile4.row} show={showArrow.tile4} content={tileContent.tile4}/>
                <Tile tileId={5} column={tile5.col} row={tile5.row} show={showArrow.tile5} content={tileContent.tile5}/>
                <Tile tileId={6} column={tile6.col} row={tile6.row} show={showArrow.tile6} content={tileContent.tile6}/>
                <Tile tileId={7} column={tile7.col} row={tile7.row} show={showArrow.tile7} content={tileContent.tile7}/>
                <Tile tileId={8} column={tile8.col} row={tile8.row} show={showArrow.tile8} content={tileContent.tile8}/>
                <Tile tileId={9} column={tile9.col} row={tile9.row} show={showArrow.tile9} content={tileContent.tile9}/>
            </StyledGrid>
        </GridContainer>
    )
}

export default Grid
