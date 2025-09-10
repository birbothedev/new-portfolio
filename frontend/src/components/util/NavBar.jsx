import { Link } from "react-router-dom";
import "../../css/componentcss/NavBar.css"
import { useState } from 'react'
import { ContactForm } from "../ContactForm";

export function NavBar(){
    const [formOpen, setFormOpen] = useState(false)

    const handleFormOpen = () => {
        setFormOpen(true)
    }

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
                    <button className="nav-link" onClick={handleFormOpen}>Contact Me</button>
                </div>
            </nav>
            <div className="contact-form-container">
                {formOpen && (
                    <ContactForm onClose={() => setFormOpen(false)} />
                )}
            </div>
        </div>
    )
}