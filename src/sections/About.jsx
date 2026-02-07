import React, { useState } from 'react';

function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState('skills');
    
    // Add your images/slides here
    const slides = [
        "Slide 1 content",
        "Slide 2 content",
        "Slide 3 content"
    ];

    const tabContent = {
        skills: "Your skills content here",
        experience: "Your experience content here",
        volunteer: "Your volunteer work here"
    };

    function nextSlide() {
        setCurrentSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    }


    return (
        <div className="about">
            <h3>about section</h3>

            <div className="aboutSections">
                <div className="leftAbout">
                    <div className="aboutDesc">
                        <p>I’m currently a computer science student at the University of Toronto, pursuing a software engineering specialist with a minor in statistics! I’m passionate about full-stack development and am always interested in learning new technologies, languages, and frameworks. I hope to create a tangible impact on the world with the projects I create. </p>
                    </div>
                    <div className="moreAbout">
                        <div className={`skills ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>
                            <p>skills</p>
                        </div>
                        <p> | </p>
                        <div className={`experience ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>
                            <p>experience</p>
                        </div>
                        <p> | </p>
                        <div className={`volunteer ${activeTab === 'volunteer' ? 'active' : ''}`} onClick={() => setActiveTab('volunteer')}>
                            <p>volunteer</p>
                        </div>
                    </div>
                    <div className="tabContent">
                        {tabContent[activeTab]}
                    </div>
                </div>

                <div className="rightAbout">
                    <div className="carousel">
                        <button onClick={prevSlide} className="arrow left">&#10094;</button>

                        <div className="carousel-window">
                            <div className="carousel-content">
                                {slides[currentSlide]}
                            </div>
                        </div>

                        <button onClick={nextSlide} className="arrow right">&#10095;</button>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default About;