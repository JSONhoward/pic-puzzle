import * as React from 'react'
import styled from 'styled-components'
import { useSetRecoilState, useResetRecoilState } from 'recoil'
import { FaAngleUp, FaAngleDown, FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { TileContent, ShowArrows, TileMoves } from '../../../../Store/index'

export const StyledArrows = styled.div`
position: absolute;
height: 100%;
width: 100%;
z-index: 1;
`

const ArrowIcon = styled('div')<{direction: String}>`
position: absolute;
top: ${props => props.direction === 'left' || props.direction === 'right' ? '50%' : 'none'};
left: ${props => props.direction === 'left' ? '5px' : props.direction === 'up' || props.direction === 'down' ? '50%' : 'none'};
right: ${props => props.direction === 'right' ? '5px' : 'none'};
bottom: ${props => props.direction === 'down' ? '5px' : 'none'};
transform: ${props => props.direction === 'left' || props.direction === 'right' ? 'translateY(-50%)' : 'translateX(-50%)'};
cursor: pointer;
color: rgb(30,30,30);

&:hover {
    color: red;
}
`

interface ArrowsProps {
    column: Number,
    row: Number,
    tileNum: Number
}

const Arrows: React.FC<ArrowsProps> = ({ column, row, tileNum }) => {
    const setTileContent = useSetRecoilState(TileContent)
    const resetArrow = useResetRecoilState(ShowArrows)
    const incrementMoves = useSetRecoilState(TileMoves)

    const moveTile = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.preventDefault()
        const element = e.currentTarget as HTMLElement
        let arrow = element.getAttribute('direction')
        switch (tileNum) {
            case 1:
                if (arrow === 'right') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile1 !== null && prevContent.tile2 === null) {
                            let state = {
                                ...prevContent,
                                tile1: null,
                                tile2: prevContent.tile1
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'down') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile1 !== null && prevContent.tile4 === null) {
                            let state = {
                                ...prevContent,
                                tile1: null,
                                tile4: prevContent.tile1
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 2:
                if (arrow === 'right') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile2 !== null && prevContent.tile3 === null) {
                            let state = {
                                ...prevContent,
                                tile2: null,
                                tile3: prevContent.tile2
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'down') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile2 !== null && prevContent.tile5 === null) {
                            let state = {
                                ...prevContent,
                                tile2: null,
                                tile5: prevContent.tile2
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'left') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile2 !== null && prevContent.tile1 === null) {
                            let state = {
                                ...prevContent,
                                tile2: null,
                                tile1: prevContent.tile2
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 3:
                if (arrow === 'left') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile3 !== null && prevContent.tile2 === null) {
                            let state = {
                                ...prevContent,
                                tile3: null,
                                tile2: prevContent.tile3
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'down') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile3 !== null && prevContent.tile6 === null) {
                            let state = {
                                ...prevContent,
                                tile3: null,
                                tile6: prevContent.tile3
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 4:
                if (arrow === 'up') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile4 !== null && prevContent.tile1 === null) {
                            let state = {
                                ...prevContent,
                                tile4: null,
                                tile1: prevContent.tile4
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'right') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile4 !== null && prevContent.tile5 === null) {
                            let state = {
                                ...prevContent,
                                tile4: null,
                                tile5: prevContent.tile4
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'down') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile4 !== null && prevContent.tile7 === null) {
                            let state = {
                                ...prevContent,
                                tile4: null,
                                tile7: prevContent.tile4
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 5:
                if (arrow === 'up') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile5 !== null && prevContent.tile2 === null) {
                            let state = {
                                ...prevContent,
                                tile5: null,
                                tile2: prevContent.tile5
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'right') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile5 !== null && prevContent.tile6 === null) {
                            let state = {
                                ...prevContent,
                                tile5: null,
                                tile6: prevContent.tile5
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'down') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile5 !== null && prevContent.tile8 === null) {
                            let state = {
                                ...prevContent,
                                tile5: null,
                                tile8: prevContent.tile5
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'left') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile5 !== null && prevContent.tile4 === null) {
                            let state = {
                                ...prevContent,
                                tile5: null,
                                tile4: prevContent.tile5
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 6:
                if (arrow === 'up') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile6 !== null && prevContent.tile3 === null) {
                            let state = {
                                ...prevContent,
                                tile6: null,
                                tile3: prevContent.tile6
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'down') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile6 !== null && prevContent.tile9 === null) {
                            let state = {
                                ...prevContent,
                                tile6: null,
                                tile9: prevContent.tile6
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'left') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile6 !== null && prevContent.tile5 === null) {
                            let state = {
                                ...prevContent,
                                tile6: null,
                                tile5: prevContent.tile6
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 7:
                if (arrow === 'up') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile7 !== null && prevContent.tile4 === null) {
                            let state = {
                                ...prevContent,
                                tile7: null,
                                tile4: prevContent.tile7
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'right') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile7 !== null && prevContent.tile8 === null) {
                            let state = {
                                ...prevContent,
                                tile7: null,
                                tile8: prevContent.tile7
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 8:
                if (arrow === 'left') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile8 !== null && prevContent.tile7 === null) {
                            let state = {
                                ...prevContent,
                                tile8: null,
                                tile7: prevContent.tile8
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'up') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile8 !== null && prevContent.tile5 === null) {
                            let state = {
                                ...prevContent,
                                tile8: null,
                                tile5: prevContent.tile8
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'right') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile8 !== null && prevContent.tile9 === null) {
                            let state = {
                                ...prevContent,
                                tile8: null,
                                tile9: prevContent.tile8
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                }
                break
            case 9:
                if (arrow === 'left') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile9 !== null && prevContent.tile8 === null) {
                            let state = {
                                ...prevContent,
                                tile9: null,
                                tile8: prevContent.tile9
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
                            return state
                        }
                        return prevContent
                    })
                } else if (arrow === 'up') {
                    setTileContent((prevContent: any) => {
                        if (prevContent.tile9!== null && prevContent.tile6 === null) {
                            let state = {
                                ...prevContent,
                                tile9: null,
                                tile6: prevContent.tile9
                            }
                            resetArrow()
                            incrementMoves((prevCount: number) => prevCount + 1)
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
            {column !== 1 && <ArrowIcon onClick={(event: React.MouseEvent<HTMLDivElement>): void => moveTile(event)} direction={'left'}><FaAngleLeft size={'3rem'} /></ArrowIcon>}
            {row !== 1 && <ArrowIcon onClick={(event: React.MouseEvent<HTMLDivElement>): void => moveTile(event)} direction={'up'}><FaAngleUp size={'3rem'} /></ArrowIcon>}
            {column !== 3 && <ArrowIcon onClick={(event: React.MouseEvent<HTMLDivElement>): void => moveTile(event)} direction={'right'}><FaAngleRight size={'3rem'} /></ArrowIcon>}
            {row !== 3 && <ArrowIcon onClick={(event: React.MouseEvent<HTMLDivElement>): void => moveTile(event)} direction={'down'}><FaAngleDown size={'3rem'} /></ArrowIcon>}
        </StyledArrows>
    )
}

export default Arrows
