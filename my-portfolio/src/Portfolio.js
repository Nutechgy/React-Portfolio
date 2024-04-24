import React from 'react';
import Project from './Project';

const Portfolio = () => {
    return (
        <section>
            <h2>Portfolio</h2>
            <div className="projects">
                <Project
                    title="Project 1"
                    image="project1.jpg"
                    deployedLink="https://project1.com"
                    githubLink="https://github.com/project1"
                />
                {/* Repeat the above for each project */}
            </div>
        </section>
    );
};

export default Portfolio;
