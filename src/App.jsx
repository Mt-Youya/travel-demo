import { RouterProvider } from "react-router-dom"
import router from "./router/index.jsx"
import BackToTop from "./layout/BackToTop"

import "./App.css"

function App() {

    return (
        <>
            <RouterProvider router={router} />
            <BackToTop />
        </>
    )
}

export default App
