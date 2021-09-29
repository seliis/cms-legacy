import React from "react"
import ReactPlayer from "react-player/youtube"

class Play extends React.Component {
    constructor(p) {
        super(p)
        this.state = {
            playing: true,
            volume: 0.1
        }
    }

    render() {
        return (
            <div id="play">
                <div id="player">
                    <ReactPlayer
                        url={"https://www.youtube.com/watch?v=" + this.props.addr}
                        playing={this.state.playing}
                        volume={this.state.volume}
                        loop={true}
                        height="0"
                        width="0"
                        config={{
                            youtube: {
                                playerVars: {
                                    autoplay: 1
                                }
                            }
                        }}
                    />
                    <img src={
                        "//img.youtube.com/vi/" + this.props.addr + "/0.jpg"
                    } width="100%" height="100%" onClick={
                        () => {
                            this.setState(
                                {
                                    playing: !this.state.playing
                                }
                            )
                        }
                    }/>
                </div>
                <div id="ctrl">
                    <i class="fas fa-volume-down"/>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="any"
                        value={this.state.volume}
                        onChange={
                            (e) => {
                                this.setState(
                                    {
                                        volume: e.target.valueAsNumber
                                    }
                                )
                            }
                        }
                    />
                    <i class="fas fa-volume-up"/>
                </div>
            </div>
        )
    }
}

export default Play