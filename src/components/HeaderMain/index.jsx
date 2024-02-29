import React, { useContext, useState } from "react";
import "./style.css";
import CLUB from '../../assets/club.png';
import REC from '../../assets/recipe.png';
import { FaSearch } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { VscAccount } from "react-icons/vsc";


const HeaderMain = () => {
    const { logOut } = useAuth();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [infoOpen, setInfoOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }


    return (

        <div className="headermain">
            <div className="btn-perfil">
                <button type="submit"  className="show_perfil" onClick={() => {
                        setInfoOpen(!infoOpen)
                    }}>
                    <VscAccount color="rgb(230, 90, 90)" fontSize={40}  />
                </button>
            </div>

            {infoOpen && (
                <div className="perfil">
                    <ul>
                        <>{console.log(user)}</>
                        <label className="welcome">bem vindo:{user && user.name}</label>
                        <button className="sair" onClick={() => [logOut(), navigate("/login")]}>Sair</button>
                    </ul>
                </div>)}


            <div className="conteudo">
                <div className="foto">
                    <img className="clubemain" src={CLUB}></img>
                    <img className="recipemain" src={REC}></img>
                </div>
                <form className="pesquisa" onSubmit={handleSubmit}>
                    <input type="text"
                        className="search"
                        placeholder="Busque uma nova receita"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    ></input>
                    <button className="pesq" type="submit">
                        <FaSearch />
                    </button>
                </form>
            </div>




        </div>

    )

}
export default HeaderMain;