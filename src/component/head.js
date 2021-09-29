import React from "react"

class Head extends React.Component {
    render() {
        return (
            <header>
                <h1 onClick={
                    () => {
                        this.props.setPage("/")
                    }
                }>
                    coding musics
                </h1>
                <i onClick={
                    () => {
                        this.props.setPage("/menu")
                    }
                } className="fas fa-bars"/>
            </header>
        )
    }
}

export default Head