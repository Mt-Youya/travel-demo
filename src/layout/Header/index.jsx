import styled from "styled-components"
import Where from "./components/Where"
import Logo from "@components/Logo"

const ScHeader = styled.header`
    background-color: #fff;

    .header-container {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
        max-width: var(--max-width);
        padding: 2rem 2rem 0;
    }
`

const ScSign = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    cursor: pointer;

    li {
        color: #B1B1B1;
        padding: .5em 1em;
        border-radius: 8px;
        transition: background-color .2s;

        &:hover {
            background-color: rgba(255, 255, 255, .2);
        }

        &:first-child {
            color: #fff;
            background-color: var(--color-primary);
        }
    }
`

function Header() {
    function handleSignUp() {
        console.log("Sign Up")
    }

    function handleSignIn() {
        console.log("Sign In")
    }

    return (
        <ScHeader>
            <div className="header-container">
                <Logo />

                <Where />

                <ScSign>
                    <li onClick={handleSignUp}>Sign Up</li>
                    <li onClick={handleSignIn}>Sign In</li>
                </ScSign>
            </div>
        </ScHeader>
    )
}

export default Header
