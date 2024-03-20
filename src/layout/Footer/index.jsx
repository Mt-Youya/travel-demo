import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "@components/Logo"
import QRCode from "@/assets/images/qr-code.png?url"

const ScFooter = styled.footer`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 2rem;

    .footer-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`

const ScLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;

    .imgs {
        img {
            display: block;
            width: 70px;
            aspect-ratio: 1/1;
        }
    }

    .links {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const ScRight = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    ul {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        li {
            margin: .5rem 0;
            color: #616161;

            &:first-child {
                color: #000;
                font-size: 1.25em;
                font-weight: 800;
                margin-bottom: 1rem;
            }
        }
    }
`

const links = [
    { link: "https://facebook.com", icon: "", text: "Facebook" },
    { link: "https://twitter.com", icon: "", text: "Twitter" },
    { link: "https://instagram.com", icon: "", text: "Instagram" },
]

const travelLinks = [
    { to: "/Mongolia", text: "Mongolia" },
    { to: "/Korea", text: "Korea" },
    { to: "/Japan", text: "Japan" },
    { to: "/Kyrkyzstan", text: "Kyrkyzstan" },
    { to: "/Kazakhstan", text: "Kazakhstan" },
    { to: "/Uzbekistan", text: "Uzbekistan" },
    { to: "/Tajikistan", text: "Tajikistan" },
]

const supportLinks = [
    { to: "/contact", text: "Contact us" },
    { to: "/help", text: "Help center" },
    { to: "/safety", text: "Safety" },
    { to: "/report", text: "Report" },
    { to: "/privacy", text: "Privacy policy" },
    { to: "/cancellation", text: "Cancellation policy" },
]
const learnLinks = [
    { to: "/articles", text: "Articles" },
    { to: "/story", text: "Our story" },
    { to: "/gifts", text: "Gift cards" },
    { to: "/careers", text: "Careers" },
]

function Footer() {
    return (
        <ScFooter>
            <div className="footer-wrapper">
                <ScLeft>
                    <div className="imgs">
                        <Logo />
                        <p>Download the app</p>
                        <img src={QRCode} alt="QRCode" />
                    </div>

                    <ol className="links">
                        {links.map(({ link, icon, text }) => (
                            <li key={text}><a href={link} target="_blank"><img src={icon} alt={text} /></a></li>
                        ))}
                    </ol>
                </ScLeft>

                <ScRight>
                    <ul>
                        <li>Travel</li>
                        {travelLinks.map(({ to, text }) => (
                            <li key={text}><Link to={to}>{text}</Link></li>
                        ))}
                    </ul>
                    <ul>
                        <li>Support</li>
                        {supportLinks.map(({ to, text }) => (
                            <li key={text}><Link to={to}>{text}</Link></li>
                        ))}
                    </ul>
                    <ul>
                        <li>Learn</li>
                        {learnLinks.map(({ to, text }) => (
                            <li key={text}><Link to={to}>{text}</Link></li>
                        ))}
                    </ul>
                </ScRight>
            </div>
        </ScFooter>
    )
}

export default Footer
