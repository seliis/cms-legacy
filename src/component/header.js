import React from "react"

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 onClick={
                    () => {
                        this.props.setPage("/")
                    }
                }>
                    labor musics
                </h1>
                <i onClick={
                    () => {
                        this.props.setPage("/menu")
                    }
                } class="fas fa-bars"/>
            </header>
        )
    }
}

export default Header