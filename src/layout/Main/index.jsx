import Footer from "../Footer"
import Header from "../Header"
import styled from "styled-components"

const ScMain = styled.main`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 2rem;
`

function Main({ children }) {
    return (
        <>
            <Header />
            <ScMain>
                {children}
            </ScMain>
            <Footer />
        </>
    )
}

export default Main
