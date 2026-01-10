import React from 'react';

function Projects() {
    return (
        <div className="projects">
            <h3>Projects </h3>

            <div className="projectsContainer">
                <div className="project1">
                    <div className="project1-image"></div>
                    <div className="project1-title">Smart Air</div>
                    <div className="project1-desc"></div>
                </div>

                <div className="project2">
                    <div className="project2-image"></div>
                    <div className="project2-title">Moodie</div>
                    <div className="project2-desc"></div>
                </div>
                

                <div className="project3">
                    <div className="project3-image"></div>
                    <div className="project3-title">Alzheimer's Detection</div>
                    <div className="project3-desc"></div>
                </div>
            </div>

            <div className="seeMoreProjects"> 
                <p>Some recent projects of mine! To find more, you can visit my github!</p>
            </div>

        </div>
        
    );
};

export default Projects;