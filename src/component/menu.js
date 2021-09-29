// React
import React from "react"

// Function
const makeMenu = (arr) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(
            <div class="menu-elem" id={"menu-elem-" + i}
                onClick={
                    () => {
                        window.location.href = "/" + arr[i]
                    }
                }
            >
                {arr[i]}
            </div>
        )
    }
    return res
}

class Menu extends React.Component {
    render() {
        return (
            <section>
                <div id="menu">
                    {makeMenu(this.props.menus)}
                </div>
            </section>
        )
    }
}

export default Menu