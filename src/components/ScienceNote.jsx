import React from 'react';

const ScienceNote = ({ content, isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className="science-note">
            <div className="science-header">
                <span className="science-icon">🔬</span>
                <span className="science-title">The Science</span>
            </div>
            <p className="science-content">{content}</p>
        </div>
    );
};

export default ScienceNote;
