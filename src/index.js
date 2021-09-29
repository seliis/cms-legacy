// React Document Object Model
import ReactDom from "react-dom"

// Component
import Header from "./component/header"
import Home from "./component/home"
import Menu from "./component/menu"
import Board from "./component/board"

// Route
const Menus = [
    "lofi", "swing", "classic"
]

const GetPage = () => {
    let path = window.location.pathname.slice(1)
    if (path === "") {
        return <Home/>
    }
    if (path === "menu") {
        return <Menu menus={Menus}/>
    }
    if (Menus.indexOf(path) !== -1) {
        return <Board genre={path}/>
    }
    return window.location.href = "/"
}

// Main Script
const main = <main>
    <Header setPage={
        (target) => {
            if (window.location.pathname === target) {
                return null
            } else {
                window.location.href = target
            }
        }
    }/>
    { GetPage() }
</main>

// Stylesheet
import "./index.scss"

// Initiate Rendering
ReactDom.render(main, document.getElementById("react-root"))