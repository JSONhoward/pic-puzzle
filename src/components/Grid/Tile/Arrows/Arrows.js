import React from 'react'
import styled from 'styled-components'
import { useSetRecoilState, useResetRecoilState } from 'recoil'
import { FaAngleUp, FaAngleDown, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { TileContent, ShowArrows } from '../../../../Store'

export const StyledArrows = styled.div`
position: absolute;
height: 100%;
width: 100%;
z-index: 1;
`

const ArrowIcon = styled.div`
position: absolute;
top: ${props => props.direction === 'left' || props.direction === 'right' ? '50%' : 'none'};
left: ${props => props.direction === 'left' ? '5px' : props.direction === 'up' || props.direction === 'down' ? '50%' : 'none'};
right: ${props => props.direction === 'right' ? '5px' : 'none'};
bottom: ${props => props.direction === 'down' ? '5px' : 'none'};
transform: ${props => props.direction === 'left' || props.direction === 'right' ? 'translateY(-50%)' : 'translateX(-50%)'};
cursor: pointer;

&:hover {
    color: yellow;
}
`

const Arrows = ({ column, row, tileNum }) => {
    const setTileContent = useSetRecoilState(TileContent)
    const resetArrow = useResetRecoilState(ShowArrows)

    const moveTile = (e, num) => {
        let arrow = e.currentTarget.getAttribute('direction')
        switch (num) {
            case 1:
                if (arrow === 'right') {
                    setTileContent(prevContent => {
                        if (prevContent.tile1 !== null && prevContent.tile2 === null) {
                            let state = {
                                ...prevContent,
                                tile1: null,
                                tile2: prevContent.tile1
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'down') {
                    setTileContent(prevContent => {
                        if (prevContent.tile1 !== null && prevContent.tile4 === null) {
                            let state = {
                                ...prevContent,
                                tile1: null,
                                tile4: prevContent.tile1
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 2:
                if (arrow === 'right') {
                    setTileContent(prevContent => {
                        if (prevContent.tile2 !== null && prevContent.tile3 === null) {
                            let state = {
                                ...prevContent,
                                tile2: null,
                                tile3: prevContent.tile2
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'down') {
                    setTileContent(prevContent => {
                        if (prevContent.tile2 !== null && prevContent.tile5 === null) {
                            let state = {
                                ...prevContent,
                                tile2: null,
                                tile5: prevContent.tile2
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'left') {
                    setTileContent(prevContent => {
                        if (prevContent.tile2 !== null && prevContent.tile1 === null) {
                            let state = {
                                ...prevContent,
                                tile2: null,
                                tile1: prevContent.tile2
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 3:
                if (arrow === 'left') {
                    setTileContent(prevContent => {
                        if (prevContent.tile3 !== null && prevContent.tile2 === null) {
                            let state = {
                                ...prevContent,
                                tile3: null,
                                tile2: prevContent.tile3
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'down') {
                    setTileContent(prevContent => {
                        if (prevContent.tile3 !== null && prevContent.tile6 === null) {
                            let state = {
                                ...prevContent,
                                tile3: null,
                                tile6: prevContent.tile3
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 4:
                if (arrow === 'up') {
                    setTileContent(prevContent => {
                        if (prevContent.tile4 !== null && prevContent.tile1 === null) {
                            let state = {
                                ...prevContent,
                                tile4: null,
                                tile1: prevContent.tile4
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'right') {
                    setTileContent(prevContent => {
                        if (prevContent.tile4 !== null && prevContent.tile5 === null) {
                            let state = {
                                ...prevContent,
                                tile4: null,
                                tile5: prevContent.tile4
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'down') {
                    setTileContent(prevContent => {
                        if (prevContent.tile4 !== null && prevContent.tile7 === null) {
                            let state = {
                                ...prevContent,
                                tile4: null,
                                tile7: prevContent.tile4
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 5:
                if (arrow === 'up') {
                    setTileContent(prevContent => {
                        if (prevContent.tile5 !== null && prevContent.tile2 === null) {
                            let state = {
                                ...prevContent,
                                tile5: null,
                                tile2: prevContent.tile5
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'right') {
                    setTileContent(prevContent => {
                        if (prevContent.tile5 !== null && prevContent.tile6 === null) {
                            let state = {
                                ...prevContent,
                                tile5: null,
                                tile6: prevContent.tile5
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'down') {
                    setTileContent(prevContent => {
                        if (prevContent.tile5 !== null && prevContent.tile8 === null) {
                            let state = {
                                ...prevContent,
                                tile5: null,
                                tile8: prevContent.tile5
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'left') {
                    setTileContent(prevContent => {
                        if (prevContent.tile5 !== null && prevContent.tile4 === null) {
                            let state = {
                                ...prevContent,
                                tile5: null,
                                tile4: prevContent.tile5
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 6:
                if (arrow === 'up') {
                    setTileContent(prevContent => {
                        if (prevContent.tile6 !== null && prevContent.tile3 === null) {
                            let state = {
                                ...prevContent,
                                tile6: null,
                                tile3: prevContent.tile6
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'down') {
                    setTileContent(prevContent => {
                        if (prevContent.tile6 !== null && prevContent.tile9 === null) {
                            let state = {
                                ...prevContent,
                                tile6: null,
                                tile9: prevContent.tile6
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'left') {
                    setTileContent(prevContent => {
                        if (prevContent.tile6 !== null && prevContent.tile5 === null) {
                            let state = {
                                ...prevContent,
                                tile6: null,
                                tile5: prevContent.tile6
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 7:
                if (arrow === 'up') {
                    setTileContent(prevContent => {
                        if (prevContent.tile7 !== null && prevContent.tile4 === null) {
                            let state = {
                                ...prevContent,
                                tile7: null,
                                tile4: prevContent.tile7
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'right') {
                    setTileContent(prevContent => {
                        if (prevContent.tile7 !== null && prevContent.tile8 === null) {
                            let state = {
                                ...prevContent,
                                tile7: null,
                                tile8: prevContent.tile7
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 8:
                if (arrow === 'left') {
                    setTileContent(prevContent => {
                        if (prevContent.tile8 !== null && prevContent.tile7 === null) {
                            let state = {
                                ...prevContent,
                                tile8: null,
                                tile7: prevContent.tile8
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'up') {
                    setTileContent(prevContent => {
                        if (prevContent.tile8 !== null && prevContent.tile5 === null) {
                            let state = {
                                ...prevContent,
                                tile8: null,
                                tile5: prevContent.tile8
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'right') {
                    setTileContent(prevContent => {
                        if (prevContent.tile8 !== null && prevContent.tile9 === null) {
                            let state = {
                                ...prevContent,
                                tile8: null,
                                tile9: prevContent.tile8
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 9:
                if (arrow === 'left') {
                    setTileContent(prevContent => {
                        if (prevContent.tile9 !== null && prevContent.tile8 === null) {
                            let state = {
                                ...prevContent,
                                tile9: null,
                                tile8: prevContent.tile9
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'up') {
                    setTileContent(prevContent => {
                        if (prevContent.tile9!== null && prevContent.tile6 === null) {
                            let state = {
                                ...prevContent,
                                tile9: null,
                                tile6: prevContent.tile9
                            }
                            resetArrow()
                            return state
                        }
                        return prevContent
                    })
                }
                break
            default:
                break
        }
    }

    return (
        <StyledArrows>
            {column !== 1 && <ArrowIcon onClick={e => moveTile(e, tileNum)} direction={'left'}><FaAngleLeft size={'3rem'} /></ArrowIcon>}
            {row !== 1 && <ArrowIcon onClick={e => moveTile(e, tileNum)} direction={'up'}><FaAngleUp size={'3rem'} /></ArrowIcon>}
            {column !== 3 && <ArrowIcon onClick={e => moveTile(e, tileNum)} direction={'right'}><FaAngleRight size={'3rem'} /></ArrowIcon>}
            {row !== 3 && <ArrowIcon onClick={e => moveTile(e, tileNum)} direction={'down'}><FaAngleDown size={'3rem'} /></ArrowIcon>}
        </StyledArrows>
    )
}

export default Arrows
