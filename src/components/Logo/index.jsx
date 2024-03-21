import { Link } from "react-router-dom"
import styled from "styled-components"

const ScLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    border-radius: 8px;
    background-color: var(--color-primary);
    width: 120px;
    height: 80px;
    color: #fff;
`

const ScDivider = styled.div`
    width: 100%;
    height: var(--divider-height);
    background-color: #fff;
    border-radius: 2px;
    margin: .5em 0;
`

function Logo() {
    return (
        <ScLogo to="/">
            <ol>
                <li>we</li>
                <ScDivider></ScDivider>
                <li>you</li>
            </ol>
            <span>go</span>
        </ScLogo>
    )
}

export default Logo
