// React
import React from "react"

// Function
const makeMenu = function(a) {
    let r = []
    for (let i = 0; i < a.length; i++) {
        r.push(
            <div className="menu-elem" key={"menu-elem-" + i}
                onClick={
                    function() {
                        window.location.href = "/" + a[i]
                    }
                }
            >
                {a[i]}
            </div>
        )
    }
    return r
}

// Component Object
class Menu extends React.Component {
    render() {
        return (
            <div id="menu">
                {makeMenu(this.props.arr)}
            </div>
        )
    }
}

export default Menu