import React, { useState , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Ports } from './ports';

const Port = ({ returnUrls }) => {
  if (returnUrls.length > 0) {
    return (
      <div className=" px-8 max-w-screen-lg  ">
{returnUrls.map((port, index) => (
  <div           
  className="border-4 border-orange-500 p-4 rounded-lg mb-4 bg-white "
  key={index}
>
  <div className="border-2 p-4 rounded-lg mb-4 bg-transparent text-black text-2xl">
    <div className="mr-4">
      <strong >Name:</strong> {port.getName()}
    </div>
    <div className="mr-4">
      <strong>Number:</strong> {port.teamNumber}
    </div>
    <div className="mr-4">
      <strong>URL:</strong>{' '}
      <a target="_blank" href={port.getUrl()} className="text-blue-500">
        Link <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
      </a>
    </div>
    <div className="mr-4">
      <strong>Award:</strong> {port.getAward()} {port.getPlace()}
    </div>
    <div className="mr-4">
      <strong>Season:</strong> {port.getSeason()+1}
    </div>
    <div className="mr-4">
      <strong>Level:</strong> {port.getLevel()}
    </div>
</div>
  </div>
))}
      </div>
    );
  } else if(returnUrls.length == 0) {
    return (
    <div className="ml-9">
        <p >No Results</p>
    </div>
    )
  }
  else { 
  
  }
};

const PortSearch = () => {
  const [returnUrls, setReturnUrls] = useState([]);
  useEffect(() => {
    setReturnUrls(Ports); // Populate all portfolios initially
  }, []);

  const search = (level, award) => {
    if (award === 'Any' && level === 'Any') {
      setReturnUrls(Ports);
    } else if (award === 'Any') {
      const filteredPorts = Ports.filter((port) => {
        return port.getLevel() === level;
      });
      setReturnUrls(filteredPorts);
    } else if (level === 'Any') {
      const filteredPorts = Ports.filter((port) => {
        return port.getAward() === award;
      });
      setReturnUrls(filteredPorts);
    } else {
      const filteredPorts = Ports.filter((port) => {
        return port.getAward() === award && port.getLevel() === level;
      });
      setReturnUrls(filteredPorts);
    }
  };

  const [awardFilter, setAwardFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');

  const handleTagClick = (filter) => {
    if (filter === 'award') {
      setAwardFilter('');
    } else if (filter === 'level') {
      setLevelFilter('');
    }
  };

  const handleSearch = () => {
    console.log('Award Filter:', awardFilter);
    console.log('Level Filter:', levelFilter);
    search(levelFilter, awardFilter);
  };

  const handleAwardFilterChange = (e) => {
    setAwardFilter(e.target.value);
  };

  const handleLevelFilterChange = (e) => {
    setLevelFilter(e.target.value);
  };

  return (
      <div>
        <div className="px-8" style={{ display: 'flex', justifyContent: 'left', position: 'relative' }}>
          {awardFilter && (
            <span
              className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full mb-2"
              onClick={() => handleTagClick('award')}
              style={{ position: 'absolute', top: '-1rem', left: '1.8em' }}
            >
              {awardFilter}
            </span>
          )}
          {levelFilter && (
            <span
              className="inline-block bg-orange-500 text-white px-2 py-1 rounded-full mr-2 mb-2"
              onClick={() => handleTagClick('level')}
              style={{ position: 'absolute', top: '-1rem', left: '14.7rem' }}
            >
              {levelFilter}
            </span>
          )}
        </div>
        <div className="px-8" style={{ display: 'flex', justifyContent: 'left' }}>
          <div className="mr-2">
            <select
              className="border border-gray-300 rounded py-2 px-4 mr-8 mt-4"
              value={awardFilter}
              onChange={handleAwardFilterChange}
            >
              <option value="">Select an award</option>
              <option value="Any">Any/None</option>
              <option value="Control">Control</option>
              <option value="Inspire">Inspire</option>
              <option value="Motivate">Motivate</option>
              <option value="Innovate">Innovate</option>
              <option value="Design">Design</option>
              <option value="Connect">Connect</option>
              <option value="Think">Think</option>
            </select>
          </div>
          <div className="mr-2">
            <select
              className="border border-gray-300 rounded py-2 mr-8 px-4 mt-4"
              value={levelFilter}
              onChange={handleLevelFilterChange}
            >
              <option value="">Select a level</option>
              <option value="Any">Any</option>
              <option value="Worlds">Worlds</option>
              <option value="States">States</option>
              <option value="Regionals">Regionals</option>
            </select>
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faSearch} className="mr-1" /> Search
          </button>
        </div>
    
        <div className="ml-9">
          <p>Search results: {returnUrls.length}</p>
        </div>
    
        <div className="mt-4">
          <Port returnUrls={returnUrls} />
        </div>
      </div>
    );
          }    
export default PortSearch;
