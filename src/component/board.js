import React from "react"

class Board extends React.Component {
    render() {
        return (
            <h1>{this.props.genre}</h1>
        )
    }
}

export default Board