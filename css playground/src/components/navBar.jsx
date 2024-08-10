import { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 993);
    const navigate = useNavigate()

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 993);
        if (window.innerWidth >= 993) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <nav className="nav-bar">
                <div className="nav-bar-container w-full flex justify-between place-items-center">
                    <h1 className='font-bold tracking-wider first-letter:text-[#01D293] text-xl' onClick={() => { navigate('/') }}>CSS Playground</h1>
                    {!isMobile ? (
                        <ul className="flex space-x-4 text-white">
                            <li onClick={() => { navigate('/live-editor') }}>
                                <i className='fas fa-code px-2'></i>Live Editor
                            </li>
                            <li onClick={() => { navigate('/rgb-&-hex-convertor') }}>
                                <i className="fas fa-palette px-2"></i>RGB/Hex Converter
                            </li>
                            <li onClick={() => { navigate('/about') }}>
                                <i className='fas fa-info-circle px-2'>
                                </i>About Us</li>
                        </ul>
                    ) : (
                        <button className="menu-button" onClick={handleMenuToggle}>
                            <i className="fas fa-bars"></i>
                        </button>
                    )}
                </div>
                {isMobile && isMenuOpen && (
                    <div>
                        <div
                            className={`menu ${isMenuOpen ? 'open' : ''}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-button" onClick={handleCloseMenu}>
                                <i className="fas fa-times"></i>
                            </button>
                            <ul>
                                <li onClick={() => { navigate('/live-editor') }}>
                                    <i className='fas fa-code px-2'></i>Live Editor
                                </li>
                                <li onClick={() => { navigate('/rgb-&-hex-convertor') }}>
                                    <i className="px-2 fas fa-palette"></i>Rgb To Hex
                                </li>
                                <li onClick={() => { navigate('/about') }}>
                                    <i className='fas fa-info-circle px-2'></i>About Us
                                </li>
                            </ul>
                        </div>
                        <div className="overlay" onClick={handleMenuToggle}></div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default NavBar;
