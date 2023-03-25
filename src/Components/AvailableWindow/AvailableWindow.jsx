import React from 'react';
import VideoBackground from '../VideoBackgroud/VideoBackground';
import "./AvailableWindow.css"

const AvailableWindow = () => {
    return (
        <div className='wrapper'>
            <VideoBackground/>
            <div className="main__container container">
                <h1>You are on the main page!</h1>
            </div>
        </div>
    );
}

export default AvailableWindow;
