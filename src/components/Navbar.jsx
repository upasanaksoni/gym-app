import { useState } from 'react';
import './Navbar.css';
import {Link} from "react-router-dom"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const handleMenuHover = (menu) => {
        setActiveMenu(menu);
    };
    
    const handleMenuLeave = () => {
        setActiveMenu(null);
    };
    
    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Our Plans', href: '/pricing' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Contact Us', href: '/contact' },
    ];
    
    return (
        <nav className="navbar">
            <div className='navbar-logo'>
                <span className="logo-text">ROYAL FITNESS</span>
            </div>
            
            <ul className="navbar-menu">
                {menuItems.map((item) => (
                    <li 
                        key={item.name}
                        className={`menu-item ${activeMenu === item.name ? 'active' : ''}`}
                        onMouseEnter={() => handleMenuHover(item.name)}
                        onMouseLeave={handleMenuLeave}
                    >
                        <Link to={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            
            <Link to="/contact" className="navbar-btn">JOIN NOW</Link>
            
            <div className="hamburger" onClick={toggleMenu}>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
            </div>
        </nav>
    );
};

export default Navbar;
