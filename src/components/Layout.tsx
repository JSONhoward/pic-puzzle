import * as React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-image: ${({theme: {bg}}) => bg};
`

const Layout: React.FC = ({children}) => {
    return (
        <StyledLayout>
            {children}
        </StyledLayout>
    )
}

export default Layout
