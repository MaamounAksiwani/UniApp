import './NavBar.css';
import React, { useState } from 'react';
import Container from "@mui/material/Container";
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
    const [showPages, setShowPages] = useState(false);

    const togglePages = () => {
        setShowPages(!showPages);
    };


    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnterDropdown = () => {
        setIsOpen(true);
    };

    return (
        <div className='main'>
            <Container maxWidth="lg">
                <nav className="navbar">
                    <Link to='/' className="logo">
                        <img src='https://static.udrus.com/assets/image/uniapp-logo.png' alt='logo not found' />
                    </Link>
                    <div className={`pages ${showPages ? 'show' : ''}`}>
                        <a href="#">Find Programs</a>
                        <Link to='/students/'>Students</Link>
                        <Link to="/study-agents/">Study Agents</Link>
                        <Link to='/schools/' >School</Link>
                        <div className="burger-menu-container">
                            <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            {isOpen && (

                                
                                <div className="dropdown-menu" onMouseEnter={handleMouseEnterDropdown}>
                                    <div>Menu Item 1</div>
                                    <div>Menu Item 2</div>
                                    <div>Menu Item 3</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="burger" onClick={togglePages}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </nav>
            </Container>

        </div>
    );
}

export default NavBar;
