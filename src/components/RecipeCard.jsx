import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
    return (
        <div className="recipe-card" onClick={() => onClick(recipe.id)}>
            <div className="card-image-container">
                <img src={recipe.image} alt={recipe.title} className="card-image" />
                <div className="card-overlay">
                    <span className="card-time">{recipe.time}</span>
                </div>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title">{recipe.title}</h3>
                    <span className={`difficulty-badge ${recipe.difficulty.toLowerCase()}`}>
                        {recipe.difficulty}
                    </span>
                </div>
                <p className="card-description">{recipe.description}</p>
                <button className="card-btn">Start Course</button>
            </div>
        </div>
    );
};

export default RecipeCard;
