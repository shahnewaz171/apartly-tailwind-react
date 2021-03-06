import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? "grid grid-rows-4 text-center items-center  menu-style" : "hidden"} onClick={toggle}>
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
    );
};

export default Dropdown;