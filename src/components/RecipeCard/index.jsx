import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import './style.css'
import axios from "axios";
const key = process.env.REACT_APP_SPOONACULAR_APP_KEY

const RecipeCard = ({recipe, showLink=true})=>{

    const id=recipe.id;
    const[rec,setRec]=useState([]);
    const[favrec,setFavrec]=useState([]);
    const[fav,setFav]=useState(favrec.isfavorite);

    const getSearchRecipes = async (url) => {
        try {
            const res = await axios.get(url);
            //const data = await res.json();
            //console.log(res.data);
            setRec(res.data);
        
        } catch (error) {
            console.error('Erro ao buscar a receita: ', error);
        }
    };
    const favoritarReceita =(id) => {
        const newrec = [...favrec,{
            id: recipe.id,
            isfavorite:false,
        },]
        newrec.map((newrec)=> newrec.id===id? newrec.isfavorite = !newrec.isfavorite:newrec);
        setFavrec(newrec);
        console.log(newrec);
      }

      const handleFav=()=>{
        setFav(!fav);
        favoritarReceita(id);
      };

    useEffect(() => {
        const receitaWithQueryURL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}&number=15`
        getSearchRecipes(receitaWithQueryURL)
    }, [])

    
    return(
        <div className="recipe-card">
            <img className="img_rec" src={recipe.image} alt={recipe.title}></img>

            <h2>{recipe.title}</h2>
        
            
              {rec && <p>Pronta em {rec.readyInMinutes} minutos</p>}
              {rec && rec.servings === 1 ? <p>Serve {rec.servings} porção</p> : rec && <p>Serve {rec.servings} porções</p>}
              <div className="heart">
                {fav ? (
                    <IoMdHeart size ={35} className="complete" onClick={handleFav} />
            ):( <IoIosHeartEmpty size ={35} className="incomplete" onClick={handleFav}/>
                 )}            
            </div>
              
            {showLink && <Link className="info" to = {`/receita/${id}`}>Receita</Link>}
        </div>
    )
}

export default RecipeCard



