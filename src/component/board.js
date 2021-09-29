import React from "react"

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fail: null,
            load: false,
            list: []
        }
    }

    componentDidMount() {
        fetch("test.json").then(
            resp => resp.json()
        ).then(
            (resp) => {
                this.setState({
                    load: true,
                    list: resp.data
                })
            },
            (fail) => {
                this.setState({
                    load: true,
                    fail
                })
            }
        )
    }

    render() {
        const { fail, load, list } = this.state
        if (fail) {
            return <div>
                {fail.message}
            </div>
        } else if (!load) {
            return <div>
                Loading...
            </div>
        } else {
            return (
                <ul>
                    {list.map(elem => (
                        <li>
                            {elem.name} {elem.addr}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export default Board