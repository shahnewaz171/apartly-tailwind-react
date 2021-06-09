import React from 'react';
import { Link } from 'react-router-dom';
import house1 from '../../images/house-1.png';
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
            <div className="flex flex-wrap -m-4">
                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="md:flex md:flex-col house-card">
                        <div class="">
                            <img class="rounded-lg max-w-full h-auto" src={house1} alt="Woman paying for a purchase" />
                        </div>
                        <div class="mt-4 md:mt-0 bg-white px-6">
                            <div class="uppercase tracking-wide text-sm house-title font-extrabold mt-3 text-lg">Washington Avenue</div>
                            <p class="mt-2 text-gray-600">Nasirabad H/S, Chattagram</p>
                            <div className="flex text-gray-600 mt-2 mb-4 pb-2 justify-between pr-10">
                                <span>3 Bedrooms</span>
                                <span className="ml-2">2 Bathroom</span>
                            </div>
                            <div className="flex text-gray-600 mt-2 mb-4 justify-between">
                                <span className="font-bold text-green-800 text-3xl">$194</span>
                                <button className="text-white ml-4 bg-green-800  py-2 px-8 rounded">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="md:flex md:flex-col house-card">
                        <div class="">
                            <img class="rounded-lg max-w-full h-auto" src={house1} alt="Woman paying for a purchase" />
                        </div>
                        <div class="mt-4 md:mt-0">
                            <div class="uppercase tracking-wide text-sm text-black font-bold mt-2 text-base">Washington Avenue</div>
                            <p class="mt-2 text-gray-600">Nasirabad H/S, Chattagram</p>
                            <div className="flex text-gray-600 mt-2 mb-4 pb-2">
                                <span>3 Bedrooms</span>
                                <span className="ml-2">2 Bathroom</span>
                            </div>
                            <div className="flex text-gray-600 mt-2 mb-4">
                                <span>$194</span>
                                <button className="text-white ml-4 bg-green-800  py-2 px-8 rounded">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="md:flex md:flex-col house-card">
                        <div class="">
                            <img class="rounded-lg max-w-full h-auto" src={house1} alt="Woman paying for a purchase" />
                        </div>
                        <div class="mt-4 md:mt-0">
                            <div class="uppercase tracking-wide text-sm text-black font-bold mt-2 text-base">Washington Avenue</div>
                            <p class="mt-2 text-gray-600">Nasirabad H/S, Chattagram</p>
                            <div className="flex text-gray-600 mt-2 mb-4 pb-2">
                                <span>3 Bedrooms</span>
                                <span className="ml-2">2 Bathroom</span>
                            </div>
                            <div className="flex text-gray-600 mt-2 mb-4">
                                <span>$194</span>
                                <button className="text-white ml-4 bg-green-800  py-2 px-8 rounded">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default HouseRent;