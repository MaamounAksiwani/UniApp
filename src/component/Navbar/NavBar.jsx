import React, { useState, useEffect } from 'react';
import Container from "@mui/material/Container";
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
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
                <div style={{
                    background: !isScrolled && (currentPath !== '/study-destinations/study-in-germany/'
                        && currentPath !== '/study-destinations/' && currentPath !== '/about-us/' && currentPath !== '/bachelors-degrees/' && currentPath !== '/online-degrees/') ? 'transparent' : '#FFF', transition: 'background 0.3s ease'
                }}>
                    <Container maxWidth="lg">
                        <nav className="navbar">
                            <Link to='/' className="logo">
                                <img src='https://static.udrus.com/assets/image/uniapp-logo.png' alt='logo not found' />
                            </Link>
                            <div className={`pages ${showPages ? 'show' : ''}`}>

                                <span  style={{ color: !isScrolled && currentPath == '/' ? '#fff' : '#000' }}  onClick={() => { window.location.href = 'https://uni-app.com/search' }}>Find Programs </span>
                                <Link className='navBarLink' style={{ color: !isScrolled && currentPath == '/' ? '#fff' : '#000' }} to='/students/'>Students</Link>
                                <Link className='navBarLink' style={{ color: !isScrolled && currentPath == '/' ? '#fff' : '#000' }} to="/study-agents/">Study Agents</Link>
                                <Link className='navBarLink' style={{ color: !isScrolled && currentPath == '/' ? '#fff' : '#000' }} to='/schools/' >School</Link>
                                <MenuIcon onClick={handleToggleMenu} style={{ marginTop: '7px' , cursor:'pointer' ,color: !isScrolled && currentPath == '/' ? '#fff' : '#000' }} />
                                <span onClick={()=>{window.location.href = 'https://my.uni-app.com/sign-in?redirectURL=%2Fhome'}} className='btn'  style={{ color: !isScrolled && currentPath == '/' ? '#fff' : '#000' }} >Login </span>
                                <span  onClick={()=>{window.location.href = 'https://my.uni-app.com/sign-up'}} className='btn'   style={{ color: !isScrolled && currentPath == '/' ? '#fff' : '#000' }} >Create Account </span>

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
                            {/* <div className="burger" onClick={togglePages}>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div> */}
                        </nav>
                    </Container>
                </div>
            </div >
        </body>
    );
};

export default Navbar;
