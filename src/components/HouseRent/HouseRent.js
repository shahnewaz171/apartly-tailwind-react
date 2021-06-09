import React from 'react';
import { Link } from 'react-router-dom';
import house3 from '../../images/house-3.png';
import house5 from '../../images/house-1.png';
import house1 from '../../images/house-5.png';
import house2 from '../../images/house-2.png';
import house6 from '../../images/house-6.png';
import house4 from '../../images/house-4.png';
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
                            <img className="rounded-lg max-w-full h-auto" src={house3} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="tracking-wide text-sm house-title font-extrabold mt-3 text-xl">Gorgeous House</div>
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
                            <div className="flex text-gray-600 mt-2 mb-4 justify-between pb-2">
                                <span className="font-bold text-green-800 text-3xl">$256</span>
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
                            <div className="tracking-wide text-sm house-title font-extrabold mt-3 text-xl">Washington Avenue</div>
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
                            <div className="flex text-gray-600 mt-2 mb-4 justify-between pb-2">
                                <span className="font-bold text-green-800 text-3xl">$283</span>
                                <button className="text-white ml-4 bg-green-800 hover:bg-green-700 py-2 px-8 rounded">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={house2} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="tracking-wide text-sm house-title font-extrabold mt-3 text-xl">Family Apartment Three</div>
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
                            <div className="flex text-gray-600 mt-2 mb-4 justify-between pb-2">
                                <span className="font-bold text-green-800 text-3xl">$315</span>
                                <button className="text-white ml-4 bg-green-800 hover:bg-green-700 py-2 px-8 rounded">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={house4} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="tracking-wide text-sm house-title font-extrabold mt-3 text-xl">Epic Huda Palacio</div>
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
                            <div className="flex text-gray-600 mt-2 mb-4 justify-between pb-2">
                                <span className="font-bold text-green-800 text-3xl">$536</span>
                                <button className="text-white ml-4 bg-green-800 hover:bg-green-700 py-2 px-8 rounded">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={house6} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="tracking-wide text-sm house-title font-extrabold mt-3 text-xl">Luxury Villa</div>
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
                            <div className="flex text-gray-600 mt-2 mb-4 justify-between pb-2">
                                <span className="font-bold text-green-800 text-3xl">$340</span>
                                <button className="text-white ml-4 bg-green-800 hover:bg-green-700 py-2 px-8 rounded">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={house5} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="tracking-wide text-sm house-title font-extrabold mt-3 text-xl">Washington Avenue</div>
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
                            <div className="flex text-gray-600 mt-2 mb-4 justify-between pb-2">
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