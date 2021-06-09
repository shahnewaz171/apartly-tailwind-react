import React from 'react';
import { Link } from 'react-router-dom';
import house1 from '../../images/house-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBed, faToiletPaper } from '@fortawesome/free-solid-svg-icons';
import './HouseRent.css';

const HouseRent = () => {
    return (
        <div className="md:px-20">
            <div className="mt-5 flex flex-col justify-center items-center mb-5">
                <h6 className="font-semibold text-green-800">House Rent</h6>
                <div className="text-3xl font-extrabold text-green-900 flex flex-col items-center">
                    <h2 className="mb-1">Discover the latest Rent</h2>
                    <h2>available today</h2> 
                </div>
            </div>
            <div className="flex flex-wrap -m-4 mt-5 pt-5">
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={house1} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="uppercase tracking-wide text-sm house-title font-extrabold mt-3 text-lg">Washington Avenue</div>
                            <p className="mt-2 text-gray-600">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span className="ml-2">Nasirabad H/S, Chattagram</span>
                            </p>
                            <div className="flex text-gray-600 mt-2 mb-5 pb-4 justify-between pr-10">
                                <p>
                                    <FontAwesomeIcon icon={faBed} />
                                    <span className="ml-2">3 Bedrooms</span>
                                </p>
                                <p className="ml-2">
                                    <FontAwesomeIcon icon={faToiletPaper} />
                                    <span className="ml-2">2 Bathroom</span>
                                </p>
                            </div>
                            <div className="flex text-gray-600 mt-2 mb-4 justify-between">
                                <span className="font-bold text-green-800 text-3xl">$194</span>
                                <button className="text-white ml-4 bg-green-800 hover:bg-green-700 py-2 px-8 rounded">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={house1} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="uppercase tracking-wide text-sm house-title font-extrabold mt-3 text-lg">Washington Avenue</div>
                            <p className="mt-2 text-gray-600">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span className="ml-2">Nasirabad H/S, Chattagram</span>
                            </p>
                            <div className="flex text-gray-600 mt-2 mb-5 pb-4 justify-between pr-10">
                                <p>
                                    <FontAwesomeIcon icon={faBed} />
                                    <span className="ml-2">3 Bedrooms</span>
                                </p>
                                <p className="ml-2">
                                    <FontAwesomeIcon icon={faToiletPaper} />
                                    <span className="ml-2">2 Bathroom</span>
                                </p>
                            </div>
                            <div className="flex text-gray-600 mt-2 mb-4 justify-between">
                                <span className="font-bold text-green-800 text-3xl">$194</span>
                                <button className="text-white ml-4 bg-green-800 hover:bg-green-700 py-2 px-8 rounded">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={house1} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="uppercase tracking-wide text-sm house-title font-extrabold mt-3 text-lg">Washington Avenue</div>
                            <p className="mt-2 text-gray-600">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span className="ml-2">Nasirabad H/S, Chattagram</span>
                            </p>
                            <div className="flex text-gray-600 mt-2 mb-5 pb-4 justify-between pr-10">
                                <p>
                                    <FontAwesomeIcon icon={faBed} />
                                    <span className="ml-2">3 Bedrooms</span>
                                </p>
                                <p className="ml-2">
                                    <FontAwesomeIcon icon={faToiletPaper} />
                                    <span className="ml-2">2 Bathroom</span>
                                </p>
                            </div>
                            <div className="flex text-gray-600 mt-2 mb-4 justify-between">
                                <span className="font-bold text-green-800 text-3xl">$194</span>
                                <button className="text-white ml-4 bg-green-800 hover:bg-green-700 py-2 px-8 rounded">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default HouseRent;