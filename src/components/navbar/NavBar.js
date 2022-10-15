import "./NavBar.css"
import Cart from '../CartWidget/CartWidget.js';
import { Link } from "react-router-dom";


const NavBar = () => (
    
    <div>
        <h1 className="Name"> MDQ Store</h1>
        
            <Link to='/'>Home</Link> 

            <Link to='categoria/Accion'>Accion</Link>

            <Link to='category/Deporte'>Deporte</Link>

            <Link to='category/Lucha'>Lucha</Link>

            <Link to='/RouteCart'><Cart/></Link>
        
    </div>

)


export default NavBar; 