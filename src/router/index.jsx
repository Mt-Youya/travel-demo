import { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import Navbar from "./modules/navbar.jsx"
import Loader from "../components/Loader"

const Home = lazy(() => import("@pages/home"))
const NotFound = lazy(() => import("@pages/result/404"))

const router = createBrowserRouter([
    ...Navbar,
    { path: "/", element: <Suspense fallback={<Loader />}><Home /></Suspense> },
    { path: "/home", element: <Suspense fallback={<Loader />}><Home /></Suspense> },
    { path: "*", element: <Suspense fallback={<Loader />}><NotFound /></Suspense> },
])

export default router
