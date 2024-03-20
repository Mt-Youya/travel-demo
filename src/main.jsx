import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import reportWebVitals from "./reportWebVitals"
import "./styles/index"
import "./index.css"
import "./utils/hello"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

reportWebVitals(console.log)
