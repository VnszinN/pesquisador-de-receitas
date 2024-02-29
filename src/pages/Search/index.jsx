import React from "react"
import HeaderMain from "../../components/HeaderMain";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard";
import "./RecipeGrid.css";
import axios from "axios";
const key = process.env.REACT_APP_SPOONACULAR_APP_KEY

//const id = process.env.REACT_APP_EDAMAM_APP_ID;


const Search= ()=>{
    const [searchParams]=useSearchParams();

    const[recipe, setRecipes]=useState([]);

    const query = searchParams.get("q");

    
    
    const getSearchRecipes = async (url) => {
        try {
            const res = await axios.get(url);
            //const data = await res.json();
            console.log(res.data.results);
            setRecipes(res.data.results);
        
        } catch (error) {
            console.error('Erro ao buscar a receita: ', error);
        }
    };

    useEffect(() => {
        const receitaWithQueryURL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${key}&number=15`
        getSearchRecipes(receitaWithQueryURL)
    }, [query])

    return(

        <div>
            <HeaderMain/>
            
            <div className="contain">
            <h2 className="title">Resultado para: <span className="query-text">{query}</span></h2>
                <div className="recipe-container">
                    {recipe && recipe.length===0 && <p>Carregando...</p>}
                    { recipe.length > 0 &&  recipe.map((recipe) =>
                     <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)}
                     </div>
            </div>
        </div>
    )
}

export default Search;