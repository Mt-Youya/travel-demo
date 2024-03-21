import { lazy, Suspense } from "react"
import { WhereNavBars } from "@/layout/Header/components/Where.jsx"
import Loader from "@components/Loader"

const Home = lazy(() => import("@pages/home"))
const Detail = lazy(() => import("@pages/detail"))

const navbar = Object.keys(WhereNavBars).map((key) => {
    return {
        path: `/${key.toLowerCase()}`,
        name: key,
        children: [
            {
                path: "",
                element: <Suspense fallback={<Loader />}> <Home /> </Suspense>,
            },
            {
                path: `detail/:projectId`,
                name: "detail",
                element: <Suspense fallback={<Loader />}> <Detail /> </Suspense>,
            },
        ],
    }
})

const NavAll = [
    ...navbar,
    {
        path: "/home",
        name: "all",
        element: <Suspense fallback={<Loader />}><Home /></Suspense>,
    },
]

export default NavAll
