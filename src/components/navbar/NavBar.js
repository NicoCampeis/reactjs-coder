import "./NavBar.css"
import Cart from '../CartWidget/CartWidget.js';


const NavBar = () => (
    
    <div>
        <h1 className="Name"> B.ball Store</h1>
        <h3>We love Basketball </h3>
        
        <ul className="List">
            <li>
                <a href="/">Inicio
                </a>

            </li> <a href="/">Hombre
            </a>

            <li> <a href="/">Mujer
            </a>

            </li>

            <li> <a href="/">Contacto
            </a>
            </li>
            <a href="/"><Cart/></a>
        </ul>
        
    </div>

)


export default NavBar; 