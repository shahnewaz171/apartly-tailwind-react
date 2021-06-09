import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({toggle}) => {
    const [navbarAnimation, setNavbarAnimation] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbarAnimation(true);
        }
        else{
            setNavbarAnimation(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className={navbarAnimation ? "sticky top-0 bg-navbar" : ''}>
            <nav className="flex justify-between items-center flex-wrap h-16 bg-white text-black relative shadow-sm font-mono md:px-20 nav-style" role="navigation">
                <Link to="/" className="nav-title text-2xl font-extrabold">Apartly</Link>
                <div className="px-4  cursor-pointer md:hidden" onClick={toggle}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
                <div className="md:block hidden">
                    <Link to="/" className="p-4 hover:text-green-800 nav-item font-medium text-lg">
                        Home
                    </Link>
                    <Link to="/about" className="p-4 hover:text-green-800 nav-item font-medium text-lg">
                        About
                    </Link>
                    <Link to="/service" className="p-4 hover:text-green-800 nav-item font-medium text-lg">
                        Service
                    </Link>
                    <Link to="/event" className="p-4 hover:text-green-800 nav-item font-medium text-lg">
                        Event
                    </Link>
                    <Link to="/contact" className="p-4 hover:text-green-800 nav-item font-medium text-lg">
                        Contact
                    </Link>
                    <Link>
                        <button className="text-white ml-4 bg-green-800 hover:bg-green-700 py-2 px-8 rounded">View Details</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;