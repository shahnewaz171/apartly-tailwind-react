import React from 'react';
import house1 from '../../images/house-1.png';
import apartment from '../../images/logos/apartment.png';
import affordable from '../../images/logos/affordable.png';
import lessee from '../../images/logos/lessee.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBed, faToiletPaper } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
    return (
        <div className="md:px-20">
            <div className="mt-5 flex flex-col justify-center items-center mb-12 mt-20">
                <h6 className="font-semibold text-green-800">Service</h6>
                <div className="text-3xl font-extrabold text-green-900 flex flex-col items-center">
                    <h2 className="mb-1">We're an agency tailored to all</h2>
                    <h2>clients' needs that always delivers</h2> 
                </div>
            </div>
            <div className="flex flex-wrap -m-4 mt-5 pt-5">
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card justify-center items-center">
                        <div className="">
                            <img className="rounded-lg w-20 h-auto" src={apartment} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 px-6 flex-col flex justify-center items-center">
                            <div className="tracking-wide text-sm house-title font-bold mt-3 text-lg">Wide Range of Properties</div>
                            <p className="mt-2 text-gray-600 px-8 text-center">
                                With a robust selection of popular properties on hand , as well as leading properties from experts.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card justify-center items-center">
                        <div className="">
                            <img className="rounded-lg w-20 h-auto" src={affordable} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 px-6 flex-col flex justify-center items-center">
                            <div className="tracking-wide text-sm house-title font-bold mt-3 text-lg">Financing Made Easy</div>
                            <p className="mt-2 text-gray-600 px-8 text-center">
                                Our stress-free finance department that can find financial solutions to save you money.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card justify-center items-center">
                        <div className="">
                            <img className="rounded-lg w-20 h-auto" src={lessee} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 px-6 flex-col flex justify-center items-center">
                            <div className="tracking-wide text-sm house-title font-bold mt-3 text-lg">Trusted by Thousands</div>
                            <p className="mt-2 text-gray-600 px-8 text-center">
                                10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
                            </p>
                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default Services;