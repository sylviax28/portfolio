import React from 'react';

function About() {
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".arrow.right");
    const prevBtn = document.querySelector(".arrow.left");

    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
      }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide();
    }

    function prevSlide() {
        if (index == 0) {
            index = slides.length;
        }

        index = (index - 1) % slides.length;
        showSlide();
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
                        <div className="skills">
                            <p>skills</p>
                        </div>
                        <p> | </p>
                        <div className="experience">
                            <p>experience</p>
                        </div>
                        <p> | </p>
                        <div className="volunteer">
                            <p>volunteer</p>
                        </div>
                    </div>
                </div>

                <div className="rightAbout">
                    <div class="carousel">
                        <button onClick={nextSlide} className="nextBtn">&#10095;</button>

                        <div class="carousel-window">
                            <div class="carousel-track">
                            <div class="slide">Slide 1 content</div>
                            <div class="slide">Slide 2 content</div>
                            <div class="slide">Slide 3 content</div>
                            </div>
                        </div>

                        <button onClick={prevSlide} className="prevBtn">&#10094;</button>

                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default About;