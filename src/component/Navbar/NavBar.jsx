import React, { useState, useEffect } from 'react';
import Container from "@mui/material/Container";
import { Link } from 'react-router-dom';
import './NavBar.css';


const Navbar = () => {
    const [showPages, setShowPages] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const togglePages = () => setShowPages(!showPages);
    const handleToggleMenu = () => setIsOpen(!isOpen);
    const handleMouseEnterDropdown = () => setIsOpen(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        position: 'fixed',
        width: '100%',

        zIndex: 10000000,
    };

    return (
        <body className='bodyNavBar'>


        <div style={navbarStyle}>
            <div style={{ background: !isScrolled ? 'transparent' : '#FFF' , transition: 'background 0.3s ease' }}>
                <Container maxWidth="lg">
                    <nav className="navbar">
                        <Link to='/' className="logo">
                            <img src='https://static.udrus.com/assets/image/uniapp-logo.png' alt='logo not found' />
                        </Link>
                        <div className={`pages ${showPages ? 'show' : ''}`}>
                            {/* <a href="#">Find Programs</a> */}
                            <Link style={{ color: !isScrolled ? '#fff' : '#000' , }} to='/students/'>Students</Link>
                            <Link  style={{ color: !isScrolled ? '#fff' : '#000' , }} to="/study-agents/">Study Agents</Link>
                            <Link style={{ color: !isScrolled ? '#fff' : '#000' , }} to='/schools/' >School</Link>
                            {/* <div  className="burger-menu-container">
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
                            </div> */}
                        </div>
                        <div className="burger" onClick={togglePages}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </nav>
                </Container>
            </div>
        </div >
        </body>
    );
};

export default Navbar;
