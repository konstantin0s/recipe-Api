import React from 'react';

const Recipe = ({ title, calories, image,
    ingredients, healthLabels, totalWeight, dietLabels, source,
    totalNutrients }) => {
    return (
        <div className="recipe">
            <h1 className="title">{title}</h1>
            <div className="source">
                <h6>Source:</h6>
                <h4>{source}</h4>
            </div>
            <img src={image} />
            <ul className="desc">
                <h5>{dietLabels}</h5>   <p>{calories.toFixed()} Kal</p>

                <h5>Ingredients:</h5>
                <div className="flexi">
                    {ingredients.map(ingredient => (

                        <li className="left"
                            key={Math.random(totalWeight)}>{ingredient.text}</li>
                    ))}
                </div>
            </ul>
        </div>
    );
}

export default Recipe;