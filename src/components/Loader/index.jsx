import styled from "styled-components"

const ScLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 20px;
    color: #000;
    background-color: #fff;
`

function Loader() {
    return (
        <ScLoader>
            loading...
        </ScLoader>
    )
}

export default Loader
