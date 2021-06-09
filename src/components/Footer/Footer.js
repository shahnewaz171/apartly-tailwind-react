import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-green-900 mt-20 text-white">
            <div className="md:px-20">
                <div className="flex flex-wrap -m-4 mt-5 pt-5">
                    <div className="p-4 sm:w-1/2 lg:w-1/3">
                        <div className="md:flex md:flex-col">
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
                    <div className="sm:w-1/2 lg:w-1/5">
                        <div className="md:flex md:flex-col">
                            <h5 className="text-xl font-medium pb-6">Company</h5>
                            <div>
                                <ul>
                                    <li className="mb-2">About</li>
                                    <li className="mb-2">Site Map</li>
                                    <li className="mb-2">Support Center</li>
                                    <li className="mb-2">Terms Conditions</li>
                                    <li className="mb-2">Submit Listing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/5">
                        <div className="md:flex md:flex-col">
                            <h5 className="text-xl font-medium pb-6">Quick Links</h5>
                            <div>
                                <ul>
                                    <li className="mb-2">Quick Links</li>
                                    <li className="mb-2">Rentals</li>
                                    <li className="mb-2">Sales</li>
                                    <li className="mb-2">Contact</li>
                                    <li className="mb-2">Terms Conditions</li>
                                    <li className="mb-2">Our blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/4">
                        <div className="md:flex md:flex-col">
                            <h5 className="text-xl font-medium pb-6">About Us</h5>
                            <h6>
                                We are the top  real estate <br />
                                agency in sydney, with agents <br />
                                available to answer any <br/>
                                question 24/7.
                            </h6>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Footer;