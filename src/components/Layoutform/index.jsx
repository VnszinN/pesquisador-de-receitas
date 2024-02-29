import './style.css';
import Header from "../../components/Header";
import FOOD from '../../assets/com9ida.jpg'
export const Layout = (props) => {

    return (
        <div className="container">
            <Header />
            <div className="container-form">
                
                    <img src={FOOD} className="food" />
                    
                    <div className="wrap-form">
                        {props.children}
                    </div>

            </div>
        </div>

    )
}