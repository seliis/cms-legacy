// React Document Object Model
import ReactDom from "react-dom"

// Component
import Head from "./component/head"
import Home from "./component/home"
import Menu from "./component/menu"
import List from "./component/list"
import Play from "./component/play"

// Route Related
const arrMenu = [
    "city"
]

const getPage = function() {
    const t = window.location.pathname.slice(1)
    if (t === "") {
        return <Home/>
    }
    if (t === "menu") {
        return <Menu arr={arrMenu}/>
    }
    if (t === "play") {
        return <Play addr={
            window.location.search.slice(1)
        }/>
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