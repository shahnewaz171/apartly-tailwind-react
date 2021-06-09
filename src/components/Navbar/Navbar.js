import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center flex-wrap h-16 bg-white text-black relative shadow-sm font-mono md:px-20 nav-style" role="navigation">
            <Link to="/" className="font-bold nav-title">Apartly</Link>
            <div className="px-4  cursor-pointer md:hidden" onClick={toggle}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <div className="md:block hidden">
                <Link to="/" className="p-4">
                    Home
                </Link>
                <Link to="/about" className="p-4">
                    About
                </Link>
                <Link to="/service" className="p-4">
                    Service
                </Link>
                <Link to="/event" className="p-4">
                    Event
                </Link>
                <Link to="/contact" className="p-4">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;