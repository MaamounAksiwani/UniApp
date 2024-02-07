import React, { useState, useEffect } from 'react';
import Container from "@mui/material/Container";
import { Link, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import './NavBar.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const [flag, setFlag] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const [isH1Visible, setIsH1Visible] = useState(false);

    const handleToggleMenuSideMenu = () => {
        setIsH1Visible(!isH1Visible);
    };


    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };


    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
        setFlag(!flag)
    }


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

    const sidebarStyle = {
        position: 'fixed',
        top: 0,
        right: isOpen ? 0 : '-100%',
        height: '100%',
        width: '250px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        transition: 'right 0.3s ease',
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: isOpen ? 'calc(100% - 250px)' : '0%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9999999,
        transition: 'width 0.3s ease',
    };

    return (
        <body className='bodyNavBar'>
            <div style={navbarStyle}>
                <div style={{
                    background: !isScrolled && (currentPath !== '/study-destinations/study-in-germany/' && currentPath !== '/study-destinations/study-in-france/'
                        && currentPath !== '/study-destinations/' && currentPath !== '/about-us/' && currentPath !== '/bachelors-degrees/'
                        && currentPath !== '/online-degrees/' && currentPath !== '/Afghanistan/') ? 'transparent' : '#FFF', transition: 'background 0.3s ease'
                }}>
                    <Container maxWidth="lg">
                        <div style={overlayStyle} onClick={handleToggleMenu}></div>

                        <nav className="navbar">
                            <Link to='/' className="logo" >
                                <img src='https://static.udrus.com/assets/image/uniapp-logo.png' alt='logo not found' />
                            </Link>

                            <div className={`pages`}>
                                <span style={{ color: !isScrolled && currentPath === '/' ? '#fff' : '#696969' }} onClick={() => { window.location.href = 'https://uni-app.com/search' }}>Find Programs </span>
                                <Link className={currentPath === '/students/' ? 'activeNav navBarLink ' : 'navBarLink'} style={{ color: !isScrolled && currentPath === '/' ? '#fff' : '#696969'  }} to='/students/'>Students</Link>
                                <Link className={currentPath === '/study-agents/' ? 'activeNav navBarLink ' : 'navBarLink'} style={{ color: !isScrolled && currentPath === '/' ? '#fff' : '#696969' }} to="/study-agents/">Study Agents</Link>
                                <Link className={currentPath === '/schools/' ? 'activeNav navBarLink ' : 'navBarLink'} style={{ color: !isScrolled && currentPath === '/' ? '#fff' : '#696969' }} to='/schools/' >School</Link>
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className='dropMenu'
                                >

                                    <MenuIcon style={{ fontSize: '20px', cursor: 'pointer', color: !isScrolled && currentPath === '/' ? '#fff' : '#696969' }} />
                                    {isDropdownVisible && (
                                        <div className='mainDropMenu'
                                        >

                                            <p onClick={() => { navigate('/study-medicine-in-europe/') }}>Study Medicine</p>
                                            <p onClick={() => { navigate('/study-destinations/') }}>Study Destinations</p>
                                            <p onClick={() => { navigate('/student-application-guide/') }}>Student Application Guide</p>
                                            <p>Articles</p>
                                            <p onClick={() => { navigate('/about-us/') }}>About us</p>
                                        </div>
                                    )}
                                </div>

                                <span onClick={() => { window.location.href = 'https://my.uni-app.com/sign-in?redirectURL=%2Fhome' }} className='btn' style={{ color: !isScrolled && currentPath == '/' ? '#fff' : '#696969' }} >Login </span>
                                <span onClick={() => { window.location.href = 'https://my.uni-app.com/sign-up' }} className='btn' style={{ color: !isScrolled && currentPath == '/' ? '#fff' : '#696969' }} >Create Account </span>
                            </div>
                        </nav>

                        <div className='smallMedia'>
                            <div>
                                {!flag ? <Link to='/' className="logo">
                                    <img src='https://static.udrus.com/assets/image/uniapp-logo.png' alt='logo not found' />
                                </Link> : <p></p>}

                                <MenuIcon onClick={handleToggleMenu} style={{ fontSize: '25px', cursor: 'pointer', color: !isScrolled && currentPath === '/' ? '#fff' : '#696969' }} />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div style={sidebarStyle}>
                            <div className='sideBar'>

                                <Link to='/' className="logo">
                                    <img src='https://static.udrus.com/assets/image/uniapp-logo.png' alt='logo not found' />
                                </Link>
                                <CloseIcon onClick={handleToggleMenu} style={{ fontSize: '30px' }} />
                            </div>

                            <div className='menuSidebar'>

                                <Link to='/students/' className='menuNavBarLink' onClick={handleToggleMenu}>Students</Link>
                                <div style={{ width: '100%', height: '0.5px', background: '#fff' }} />

                                <Link to='/study-agents/' className='menuNavBarLink' onClick={handleToggleMenu}>Study Agents</Link>
                                <div style={{ width: '100%', height: '0.5px', background: '#fff' }} />

                                <Link to='/schools/' className='menuNavBarLink' onClick={handleToggleMenu}>School</Link>
                                <div style={{ width: '100%', height: '0.5px', background: '#fff' }} />

                                <div className='burgerSideMenu' onClick={handleToggleMenuSideMenu}>
                                    <MenuIcon onClick={handleToggleMenu} style={{ fontSize: '20px', color: '#fff', cursor: 'pointer' }} />
                                    {isH1Visible ? <ArrowDropUpIcon style={{ fontSize: '20px', color: '#fff', cursor: 'pointer' }} /> : <ArrowDropDownIcon style={{ fontSize: '20px', color: '#fff', cursor: 'pointer' }} />}
                                </div>


                                {isH1Visible && <> <div className={isH1Visible ? 'visible' : 'hidden'}>
                                    <p onClick={() => { navigate('/study-medicine-in-europe/') }}>Study Medicine</p>
                                    <p onClick={() => { navigate('/study-destinations/') }}>Study Destinations</p>
                                    <p onClick={() => { navigate('/student-application-guide/') }}>Student Application Guide</p>
                                    <p>Articles</p>
                                    <p onClick={() => { navigate('/about-us/') }}>About us</p>
                                </div> </>}

                                <div style={{ width: '100%', height: '0.5px', background: '#fff' }} />


                                <span onClick={() => { window.location.href = 'https://my.uni-app.com/sign-in?redirectURL=%2Fhome' }} className='menuNavBarLink' >Login </span>
                                <div style={{ width: '100%', height: '0.5px', background: '#fff' }} />
                                <span onClick={() => { window.location.href = 'https://my.uni-app.com/sign-up' }} className='menuNavBarLink'  >Create Account </span>


                            </div>

                        </div>
                    </Container>
                </div>
            </div>
        </body>
    );
};

export default Navbar;
