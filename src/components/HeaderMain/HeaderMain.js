import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center headerImage">
            <div className="bg-auto bg-no-repeat bg-center ..." >
                <h3 className="lg:text:7xl md:text-5xl sm:text-3xl text-3xl font-bold mb-14 uppercase text-white">Find your house rent</h3>
                <form onSubmit={handleSubmit} className="flex justify-center">
                    <input className="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 py-2 px-4 rounded w-3/5" placeholder="Search items..." required />
                    <button type="submit" className="text-white ml-4 bg-green-800  py-2 px-8 rounded">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HeaderMain;