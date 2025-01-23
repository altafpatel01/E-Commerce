import React, { useState } from 'react';

function Filterbar() {
  const [show, setShow] = useState(16);
  const [sortBy, setSortBy] = useState('Default');

  const handleShowChange = (value) => {
    setShow(value);
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  return (
    <div className="flex justify-between items-center bg-filter   py-3">
      <div className="flex items-center">
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.141.141L10.586 13H4a1 1 0 01-1-1V4z" />
          </svg>
          <span className="ml-2">Filter</span>
        </button>
       <span className='border-l border-black w-1 h-5 mx-5'></span> <span className="mr-4">Showing 1-8 of 12 results</span>
      </div>
      <div className="flex items-center">
       
        <div className="flex items-center">
          <label htmlFor="show" className="mr-2">Show:</label>
          <select
          disabled
            id="show"
            value={show}
            onChange={(e) => handleShowChange(parseInt(e.target.value))}
            className="  border-gray-300  py-1 appearance-none px-1"
          >
            <option value={16}>16</option>
            <option value={32}>32</option>
            <option value={48}>48</option>
          </select>
        </div>
        <div className="ml-4 flex items-center">
          <label htmlFor="sortBy" className="mr-2">Sort by:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => handleSortByChange(e.target.value)}
            className="appearance-none bg-white px-2 py-1"
          >
            <option value="Default">Default</option>
            <option value="Newest">Price</option>
            <option value="Oldest">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filterbar;