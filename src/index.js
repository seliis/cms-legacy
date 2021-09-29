// React Document Object Model
import ReactDom from "react-dom"

// Component
import Head from "./component/head"
import Home from "./component/home"
import Menu from "./component/menu"
import List from "./component/list"

// Route Related
const arrMenu = [
    "lofi",
    "swing",
    "classic"
]

const getPage = function() {
    const t = window.location.pathname.slice(1)
    if (t === "") {
        return <Home/>
    }
    if (t === "menu") {
        return <Menu arr={arrMenu}/>
    }
    if (arrMenu.indexOf(t) !== -1) {
        return <List type={t}/>
    }
    return window.location.href = "/"
}

// Main Script
const m = <main>
    <Head setPage={
        function(t) {
            if (window.location.pathname === t) {
                return null
            } else {
                window.location.href = t
            }
        }
    }/>
    <section>
        {getPage()}
    </section>
</main>

// Stylesheet
import "./main.scss"

// Initiate Rendering
ReactDom.render(m, document.getElementById("react-root"))