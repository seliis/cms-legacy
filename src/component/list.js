import React from "react"

// Function
const makeList = function(a) {
    let r = []
    for (let i = 0; i < a.length; i++) {
        r.push(
            <li key={"list-elem-" + i}
                onClick={
                    function() {
                        window.location.href = "/play?" + a[i].addr
                    }
                }
            >
                <h1>{a[i].name}</h1>
            </li>
        )
    }
    return r
}

// Component Object
class List extends React.Component {
    constructor(p) {
        super(p)
        this.state = {
            m: false,
            f: null,
            d: []
        }
    }

    componentDidMount() {
        fetch("test.json").then(
            r => r.json()
        ).then(
            (r) => {
                this.setState({
                    m: true,
                    d: r.data
                })
            },
            (e) => {
                this.setState({
                    m: true,
                    f
                })
                console.log(e)
            }
        )
    }

    render() {
        const { m, f, d } = this.state
        if (f) {
            return <div>
                f.message
            </div>
        } else if (!m) {
            return <div>
                Loading...
            </div>
        } else {
            return (
                <ul id="list">
                    {makeList(d)}
                </ul>
            )
        }
    }
}

export default List