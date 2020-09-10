import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
    return (
        <div className="main_container">
            <video src="/videos/video_4.mp4" autoPlay loop muted />

            <h1>DIVE IN TO EXPLORE</h1>
            <p>What are you waiting for?</p>

            <div className="main_btns">
                <Button className="btns" buttonStyle="btn__outline" buttonSize="btn__large">
                    GET STARTED
                </Button>

                <Button className="btns" buttonStyle="btn__primary" buttonSize="btn__large">
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    );
}

export default MainSection;
