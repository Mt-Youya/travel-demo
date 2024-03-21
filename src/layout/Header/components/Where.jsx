import styled from "styled-components"
import Souvenir from "@/assets/icons/Souvenir.svg?url"
import useTabs from "@/stores/tabs"
import { Link } from "react-router-dom"
import { useLocation } from "react-router"

const ScWhere = styled.div`
    flex: 1;

    .where {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1em;
        margin-right: 2rem;

        button {
            margin: unset;
        }
    }

    .selection {
        padding: 1em;
        border-radius: .5em;
        box-shadow: var(--color-boxShadow);
    }

    select {
        border-radius: .5em;
        padding: .5em;
        cursor: pointer;
        box-shadow: var(--color-boxShadow);
        width: 120px;

        &.continents {
            color: #fff;
            background-color: var(--color-primary);
        }
    }

    .souvenir {
        background-color: var(--color-primary);
        color: #fff;
        padding: 1em;
        border-radius: 1em;
        box-shadow: var(--color-boxShadow);
    }
`

const ScNavigator = styled.nav`
    margin-top: 1rem;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2.5em;
        padding: 1rem 1rem 0;

        li {
            cursor: pointer;
            transition: color .2s ease-in-out;
            font-weight: 600;

            &::after {
                display: block;
                content: "";
                width: 100%;
                height: var(--divider-height);
                background-color: transparent;
                border-radius: var(--divider-height);
                margin-top: .5em;
                transition: background-color .2s ease-in-out;
            }

            &.active {
                color: var(--color-primary);

                &::after {
                    background-color: var(--color-primary);
                }
            }
        }
    }
`

export const WhereNavBars = {
    Adventure: 1,
    Business: 2,
    Cultural: 3,
    Family: 4,
    Leisure: 5,
    Luxury: 6,
    Layover: 7,
}

function Where() {
    const location = useLocation()
    const pathname = location.pathname.split("/")[1]

    const navbars = ["Adventure", "Business", "Cultural", "Family", "Leisure", "Luxury", "Layover"]

    return (
        <ScWhere>
            <div className="where">
                <div className="selection">
                    <span> Where in </span>
                    <select className="continents">
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    &nbsp; : &nbsp;
                    <select className="country">
                        <option value="Mongolia">Mongolia</option>
                        <option value="China">China</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                </div>
                <div className="souvenir"><img src={Souvenir} alt="Souvenir" /> Souvenir shop</div>
            </div>
            <ScNavigator>
                <ul>
                    <li className={`${pathname === "home" ? "active" : ""}`}>
                        <Link to={"/home"}> All </Link>
                    </li>
                    {navbars.map(nav =>
                        <li key={nav} className={`${pathname === nav.toLowerCase() ? "active" : ""}`}>
                            <Link to={`/${nav !== "All" ? nav.toLowerCase() : "home"}`}> {nav} </Link>
                        </li>,
                    )}
                </ul>
            </ScNavigator>
        </ScWhere>
    )
}

export default Where
