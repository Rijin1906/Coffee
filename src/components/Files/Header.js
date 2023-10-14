import "./header.css"
import {Link} from 'react-router-dom'
function Header(){
    return(
        <div className="Navbar"> 
        <div className="HeaderPart">
        <ul>
                <li>  <a  href="/">Home </a></li>
                <li>  <a  href="/about">About us </a></li>
                <li> <a  href="/reviews">Reviews</a></li>
                <li> <a  href="/contact">Contact us</a></li>
            </ul>
        </div>
      
        </div>
    )
}

export default Header;