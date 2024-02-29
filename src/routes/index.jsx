import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register} from "../pages/Register"
import { Main } from "../pages/Principal";
import useAuth from "../hooks/useAuth";
import Search from "../pages/Search/index";
import Receita from "../pages/Receitas";

const Private = ({Item}) =>{
    const signed = useAuth();

    return signed > 0 ? <Item/> : <Login/>;
}

export const AppRouter = () => {
    return( 
        <Router>
            <Fragment>
                <Routes>
                    <Route  path="/login"  element={<Login/>}/>
                    <Route  path="/register"  element={<Register/>}/>
                    <Route exact path="/home"  element={<Main/>}/>
                    <Route exact path="receita/:id"  element={<Receita/>}/>
                    <Route  path="/search"  element={<Search/>}/>
                </Routes>
            </Fragment>    
        </Router>
    );
};