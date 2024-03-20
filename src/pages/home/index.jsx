import Main from "@layout/Main"
import ProductCategory from "./components/Product-Category.jsx"
import Read from "./components/Read.jsx"
import projects from "./data/projects.js"
import ProjectCard from "@/components/Project-Card"
import styled from "styled-components"

const ScProducts = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 4rem;
    margin-top: 5rem;
`

function Home() {

    return (
        <Main>
            <ProductCategory />
            <ScProducts>
                {projects.map(project => <ProjectCard key={project.img} {...project} />)}
            </ScProducts>
            <Read />
        </Main>
    )
}

export default Home
