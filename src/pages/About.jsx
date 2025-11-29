import React from 'react';

const About = () => {
    return (
        <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
            <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>About Culinary Science</h1>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    Welcome to <strong>Culinary Science</strong>, a project dedicated to demystifying the art of cooking through the lens of science.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    We believe that understanding the <em>why</em> behind a recipe is just as important as the <em>how</em>.
                    By exploring concepts like the Maillard reaction, emulsification, and protein denaturation, we empower home cooks to take control of their kitchen.
                </p>
                <p>
                    This course is designed to be simple, elegant, and informative. No clutter, just good food and the fascinating science that makes it delicious.
                </p>
            </div>
        </div>
    );
};

export default About;
