import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';

const Home = () => {
    const navigate = useNavigate();

    const handleRecipeClick = (id) => {
        navigate(`/course/${id}`);
    };

    return (
        <div className="home-page">
            <section className="hero">
                <div className="container">
                    <h1 className="hero-title">Master the Science of Cooking</h1>
                    <p className="hero-subtitle">
                        Understand the "why" behind every step. Elevate your culinary skills with science-backed techniques.
                    </p>
                </div>
            </section>

            <section className="courses-section container">
                <h2 className="section-title">Available Courses</h2>
                <div className="recipe-grid">
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                            onClick={handleRecipeClick}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
