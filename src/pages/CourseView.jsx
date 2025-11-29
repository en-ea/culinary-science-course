import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import ScienceNote from '../components/ScienceNote';

const CourseView = () => {
    const { id } = useParams();
    const recipe = recipes.find(r => r.id === id);
    const [activeStep, setActiveStep] = useState(null);

    if (!recipe) {
        return <div className="container">Course not found</div>;
    }

    return (
        <div className="course-view">
            <div className="course-header-image">
                <img src={recipe.image} alt={recipe.title} />
                <div className="course-header-overlay">
                    <div className="container">
                        <Link to="/" className="back-link">← Back to Courses</Link>
                        <h1 className="course-title">{recipe.title}</h1>
                        <p className="course-description">{recipe.description}</p>
                    </div>
                </div>
            </div>

            <div className="container course-content">
                <div className="steps-list">
                    <h2 className="steps-heading">Instructions</h2>
                    {recipe.steps.map((step, index) => (
                        <div key={step.id} className={`step-item ${activeStep === step.id ? 'active' : ''}`}>
                            <div className="step-main" onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}>
                                <span className="step-number">{index + 1}</span>
                                <p className="step-instruction">{step.instruction}</p>
                                <button className="why-btn" aria-label="Explain the science">
                                    {activeStep === step.id ? 'Hide Science' : 'Why?'}
                                </button>
                            </div>
                            <ScienceNote content={step.science} isVisible={activeStep === step.id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseView;
