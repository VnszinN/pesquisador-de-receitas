import React, { useContext, useState, useEffect } from "react";
//import useAuth from "../../hooks/useAuth";
//import { useNavigate } from "react-router-dom";
//import { AuthContext } from "../../contexts/auth";
import HeaderMain from "../../components/HeaderMain";
import axios from "axios";
//import Receita from "../../components/Receitas";
import RecipeCard from "../../components/RecipeCard";
import './RecipeGrid.css'



export const Main = () => {


    //const [query, setQuery] = useState('recipes');
    const [recipe, setRecipe] = useState([]);

    //const id = process.env.REACT_APP_EDAMAM_APP_ID;
    const key = process.env.REACT_APP_SPOONACULAR_APP_KEY

    const getRecipes= async (url) => {
        try {
            console.log(key)
            const res = await axios.get(url);
            //const data = await res.json();
            console.log(res.data.recipes);
            setRecipe(res.data.recipes);

        } catch (error) {
            console.error('Erro ao buscar a receita: ', error);
        }
    };

    useEffect(() => {
        const receita=`https://api.spoonacular.com/recipes/random?number=3&apiKey=${key}`
        getRecipes(receita);
    }, [])

    return (
        <div>
            <HeaderMain />

            <div className="contain">
                <div className="recipe-container">
                    {recipe && recipe.length===0 && <p>Carregando...</p>}
                    {recipe && recipe.length > 0 && recipe.map((recipe) =>

                        <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
                    )}</div>
            </div>
        </div>
    );
}