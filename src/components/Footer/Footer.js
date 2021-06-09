import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mt-20 text-white" style={{backgroundColor: "#205043"}}>
            <div className="md:px-20 pb-16 pt-4">
                <div className="flex flex-wrap -m-4 mt-5 pt-5">
                    <div className="p-4 sm:w-1/2 lg:w-1/3">
                        <div className="md:flex md:flex-col house-card">
                            <div className="flex">
                                <div>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </div>
                                <h6 className="ml-3">
                                    Dattapara, Ashulia, Savar, Dhaka <br />
                                    Phone: 01980354699 <br />
                                    Email: shahnewaz601@gmail.com
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/4 lg:w-1/5">
                        <div className="md:flex md:flex-col house-card footer-about">
                            <h5 className="text-xl font-medium pb-6">Company</h5>
                            <div>
                                <ul>
                                    <li className="mb-2">
                                        <Link to="#" className="hover:text-gray-300">About</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="#" className="hover:text-gray-300">Site Map</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="#" className="hover:text-gray-300">Support Center</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="#" className="hover:text-gray-300">Terms Conditions</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="#" className="hover:text-gray-300">Submit Listing</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/5">
                        <div className="md:flex md:flex-col house-card footer-about">
                            <h5 className="text-xl font-medium pb-6">Quick Links</h5>
                            <div>
                                <ul>
                                    <li className="mb-2">
                                        <Link to ="#" className="hover:text-gray-300">Quick Links</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to ="#" className="hover:text-gray-300">Rentals</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to ="#" className="hover:text-gray-300">Sales</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to ="#" className="hover:text-gray-300">Contact</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to ="#" className="hover:text-gray-300">Terms Conditions</Link>  
                                    </li>
                                    <li className="mb-2">
                                       <Link to ="#" className="hover:text-gray-300">Our blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/4">
                        <div className="md:flex md:flex-col house-card footer-about">
                            <h5 className="text-xl font-medium pb-6">About Us</h5>
                            <h6>
                                We are the top  real estate <br />
                                agency in sydney, with agents <br />
                                available to answer any <br/>
                                question 24/7.
                            </h6>
                            <div className="mt-6">
                                <Link to="#" className="hover:text-gray-300">
                                    <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl"  />
                                </Link>
                                <Link to="#" className="hover:text-gray-300">
                                    <FontAwesomeIcon icon={faInstagram} className="ml-6 text-2xl" />
                                </Link>
                                <Link to="#" className="hover:text-gray-300">
                                    <FontAwesomeIcon icon={faLinkedin} className="ml-6 text-2xl"  />
                                </Link>
                                <Link to="#" className="hover:text-gray-300">
                                    <FontAwesomeIcon icon={faYoutube} className="ml-6 text-2xl"  />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Footer;