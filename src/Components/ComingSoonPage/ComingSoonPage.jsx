import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ComingSoonPage.css"
import AccessForm from '../AccessForm/AccessForm';
import VideoBackground from '../VideoBackgroud/VideoBackground';

const ComingSoonPage = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
    const accessGranted = localStorage.getItem("accessGranted");
    if (accessGranted === "true") {
        window.location.href = "/available";
    }
    }, []);

    return (
        <div className='wrapper'>
            <VideoBackground/>
            <div className="coming-soon__container container">
                <div className="coming-soon-content">
                    <div className="coming-soon-text">
                        <h1>Coming Soon!</h1>
                        <p>Our website is not yet ready, but stay tuned!</p>
                    </div>
                    <div className="access-modal-btn">
                        <button type="button" onClick={() => setShowModal(true)}>Enter access code to go to the site</button>
                    </div>
                    <AccessForm showModal={showModal} setShowModal={setShowModal} />
                </div>
            </div>
        </div>
    );
}

export default ComingSoonPage;
