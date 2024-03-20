import { hiking, deer, helicopter, eagle, spinning } from "@/assets/icons/product-categorys"
import styled from "styled-components"

const ScCategory = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: #fff;

    li {
        background: #3D5F7099;
        border-radius: .5em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .25em;
        padding: .5rem;
        box-shadow: var(--color-boxShadow);
        cursor: pointer;
    }
`

function ProductCategory() {
    const categories = [
        { name: "Eagle hunting", icon: eagle },
        { name: "Extreme cycling", icon: spinning },
        { name: "Reindeer trekking", icon: deer },
        { name: "Nomadic trekking", icon: hiking },
        { name: "Helicopter", icon: helicopter },
    ]

    return (
        <section>
            <ScCategory>
                {categories.map(({ name, icon }) => (
                    <li key={name}>
                        <img src={icon} alt={name} />
                        <span>{name}</span>
                    </li>
                ))}
            </ScCategory>
        </section>
    )
}

export default ProductCategory
