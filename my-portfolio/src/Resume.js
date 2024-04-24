import React from 'react';

const Resume = () => {
    return (
        <section>
            <h2>Resume</h2>
            <div>
                <p>Download my resume <a href="/path/to/resume.pdf" download>here</a>.</p>
                <h3>Proficiencies:</h3>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    {/* Add more proficiencies */}
                </ul>
            </div>
        </section>
    );
};

export default Resume;
