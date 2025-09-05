import { Link } from "react-router-dom";
import "../../css/componentcss/NavBar.css"

export function NavBar(){

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="navbar-component"> 
            <nav className="navbar">
                <div className="navBar-container">
                    <Link to="/" className="nav-link" onClick={scrollToTop}>Home</Link>
                </div>
                <div className="navBar-links">
                </div>
            </nav>
        </div>
    )
}