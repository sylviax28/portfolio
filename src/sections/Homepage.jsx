import React from 'react';
import '../App.css';
import Typewriter from 'typewriter-effect';

function Homepage() {

    return (
        <div className="homepage">
            <div className="leftHomepage">
                <div className="picture-circle"></div>
            </div>

            <div className="rightHomepage">
                <div className="homepage-text">
                    <h3>Hi, my name is...</h3>
                    <h1 className="name">Sylvia Xu</h1>
                    
                    <div className="typewriter-text">
                        <Typewriter
                            options={{
                                strings: ["CS @ University of Toronto", "Software Developer @ Alida", "Partnerships Director @ GDG", "Event Coordinator @ WiCSM"],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 20,
                            }}
                        />
                    </div>

                </div>

                <div className="iconsHomepage">
                    <div className="linkedin-circle"></div>
                    <div className="github-circle"></div>
                    <div className="mail-circle"></div>
                </div>
            </div>

        </div>
    );
};

export default Homepage;