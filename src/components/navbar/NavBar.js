import "./NavBar.css"
import Cart from '../CartWidget/CartWidget.js';


const NavBar = () => (
    
    <div>
        <h1 className="Name"> MDQ Store</h1>
        
        <ul className="List">
            <li>
                <a href="/">Inicio </a>

            </li> <a href="/">Juegos </a>

            <li> <a href="/">Consolas  </a>
            </li>
            <a href="/"><Cart/></a>
        </ul>
        
    </div>

)


export default NavBar; 