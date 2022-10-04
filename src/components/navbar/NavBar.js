import "./NavBar.css"
import Cart from '../CartWidget/CartWidget.js';
import { Link } from "react-router-dom";


const NavBar = () => (
    
    <div>
        <h1 className="Name"> MDQ Store</h1>
        
        <ul className="List">
            <li>
                <Link to={'/'}>Home</Link> 
            </li> 

            <li>
            <Link to={'/Games'}>Games</Link>
            </li>

            <li> 
            <Link to={'/Consola'}>Consola</Link>
            </li>
            
            <li>
            <Link to={'/RouteCart'}><Cart/></Link>
            </li>

        </ul>
        
    </div>

)


export default NavBar; 