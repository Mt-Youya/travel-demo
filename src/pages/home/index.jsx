import { useState, useMemo } from "react"
import { useLocation, useParams } from "react-router"
import { redirect } from "react-router-dom"
import Main from "@layout/Main"
import ProductCategory from "./components/Product-Category.jsx"
import Read from "./components/Read"
import projects from "./data/projects.js"
import ProjectCard from "@components/Project-Card"
import styled from "styled-components"

const ScProducts = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 4rem;
    margin-top: 5rem;
`

function Home() {
    const location = useLocation()
    const pathname = location.pathname.slice(1) || "home"

    const [data, setData] = useState(projects)
    const adventure = useMemo(() => projects.filter(project => project.type === "Adventure"), [data])
    const business = useMemo(() => projects.filter(project => project.type === "Business"), [data])
    const cultural = useMemo(() => projects.filter(project => project.type === "Cultural"), [data])
    const family = useMemo(() => projects.filter(project => project.type === "Family"), [data])
    const leisure = useMemo(() => projects.filter(project => project.type === "Leisure"), [data])
    const luxury = useMemo(() => projects.filter(project => project.type === "Luxury"), [data])
    const layover = useMemo(() => projects.filter(project => project.type === "Layover"), [data])

    const list = {
        home: projects,
        adventure,
        business,
        cultural,
        family,
        leisure,
        luxury,
        layover,
    }

    return (
        <Main>
            <ProductCategory />
            <ScProducts>
                {list[pathname].map(project => <ProjectCard key={project.img} {...project} />)}
            </ScProducts>
            <Read />
        </Main>
    )
}

export default Home
