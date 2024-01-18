import './NavBar.css';
import React, { useState } from 'react';
import Container from "@mui/material/Container";
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
    const [showPages, setShowPages] = useState(false);

    const togglePages = () => {
        setShowPages(!showPages);
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
                        <a href="#">Study Agents</a>
                        <a href="#">School</a>
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
