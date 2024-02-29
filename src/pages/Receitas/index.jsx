import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BiSolidFoodMenu } from "react-icons/bi"
import RecipeCard from "../../components/RecipeCard";
import HeaderMain from "../../components/HeaderMain";

import "./style.css"
import axios from "axios";

const key = process.env.REACT_APP_SPOONACULAR_APP_KEY

const Receita = () => {
    const { id } = useParams();
    console.log = (id)
    const [recipe, setRecipe] = useState(null);

    const getRecipe = async (url) => {
        const res = await axios.get(url);
        //const data = await res.json();

        setRecipe(res.data);
    }

    useEffect(() => {
        const receitaURL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`
        getRecipe(receitaURL)
    }, [id])

    return (
        <div>
            <HeaderMain />
            <div className="receita">
                {recipe && <>
                    <div className="ing-img">
                        <RecipeCard recipe={recipe} showLink={false} />
                        <div className="informacao">
                            <div className="ingredientes">
                                <h3>
                                    <BiSolidFoodMenu /> Ingredientes:
                                </h3>
                                <ul className="lista-ing">
                                    {recipe.extendedIngredients.map(ingredient => (
                                        <li key={ingredient.id}>
                                            {ingredient.original}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="step_step">

                                <h3>
                                    <BiSolidFoodMenu /> Passos:
                                </h3>
                                <ol className="lista-steps">
                                    {recipe.analyzedInstructions[0].steps.map(step => (
                                        <li key={step.number}>
                                            {step.step}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>

                </>
                }
            </div>
        </div>
    )
}

export default Receita