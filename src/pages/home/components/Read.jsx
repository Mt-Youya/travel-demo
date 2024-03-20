import styled from "styled-components"
import reads from "../data/reads.js"
import ReadCard from "./Read-Card.jsx"

const ScRead = styled.section`
    margin: 5rem 0 2rem;
    text-align: left;

    h2 {
        margin: 1rem 0;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
        gap: 2rem;
    }
`

function Read() {
    return (
        <ScRead>
            <h2>Read</h2>
            <ul>
                {reads.map(read => <ReadCard key={read.author} {...read} />)}
            </ul>
        </ScRead>
    )
}

export default Read
