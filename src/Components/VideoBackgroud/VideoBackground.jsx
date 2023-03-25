import React from 'react';
import videoBg from '../../assets/videoBg.mp4'
import "./VideoBackground.css"

const VideoBackground = () => {
    return (
        <>
            <video src={videoBg} autoPlay loop muted></video>
        </>
    );
}

export default VideoBackground;
