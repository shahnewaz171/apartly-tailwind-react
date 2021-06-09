import React from 'react';
import apartment from '../../images/logos/apartment.png';
import affordable from '../../images/logos/affordable.png';
import lessee from '../../images/logos/lessee.png';
import './Services.css';

const Services = () => {
    return (
        <div className="md:px-20">
            <div className="mt-5 md:flex md:flex-col justify-center items-center mb-12 mt-20">
                <h6 className="font-semibold text-green-800 text-center">Service</h6>
                <div className="text-3xl font-extrabold text-green-900 md:flex md:flex-col items-center px-4">
                    <h2 className="mb-1 text-center">We're an agency tailored to all</h2>
                    <h2 className="text-center">clients' needs that always delivers</h2> 
                </div>
            </div>
            <div className="flex flex-wrap -m-4 mt-5 pt-5">
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card justify-center items-center">
                        <div className="">
                            <img className="rounded-lg w-20 h-auto service-img" src={apartment} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 md:px-6 flex-col flex justify-center items-center">
                            <div className="tracking-wide text-sm house-title font-bold mt-3 text-lg">Wide Range of Properties</div>
                            <p className="mt-2 text-gray-600 md:px-8 text-center">
                                With a robust selection of popular properties on hand , as well as leading properties from experts.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card justify-center items-center">
                        <div className="">
                            <img className="rounded-lg w-20 h-auto service-img" src={affordable} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 md:px-6 flex-col flex justify-center items-center">
                            <div className="tracking-wide text-sm house-title font-bold mt-3 text-lg">Financing Made Easy</div>
                            <p className="mt-2 text-gray-600 md:px-8 text-center">
                                Our stress-free finance department that can find financial solutions to save you money.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card justify-center items-center">
                        <div className="">
                            <img className="rounded-lg w-20 h-auto service-img" src={lessee} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 md:px-6 flex-col flex justify-center items-center">
                            <div className="tracking-wide text-sm house-title font-bold mt-3 text-lg">Trusted by Thousands</div>
                            <p className="mt-2 text-gray-600 md:px-8 text-center">
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