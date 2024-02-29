import React from "react";
import "./style.css";
import CLUB from '../../assets/club.png';
import REC from '../../assets/recipe.png';

const Header = () => {

    return(

        <div className="header">
                <img className="clube"src={CLUB}></img>
                <img className="recipe"src={REC}></img>
            </div>

    )

}
export default Header;