import React, { Component } from 'react';

class VideoPlayer extends Component {

    render() {
        return (
            <div className="video-player">
                <video src="https://storage.googleapis.com/coverr-main/mp4/Hills%20Hike.mp4" controls autoPlay loop />
                <button>X</button>
            </div>
        );
    }
}

export default VideoPlayer;