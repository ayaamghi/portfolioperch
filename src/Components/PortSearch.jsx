import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Ports } from './ports';
import Select from 'react-select';

const Port = ({ returnUrls }) => {
  if (returnUrls.length > 0) {
    return (
      <div className="px-8 max-w-screen-lg">
        {returnUrls.map((port, index) => (
          <div className="border-4 border-orange-500 p-4 rounded-lg mb-4 bg-white" key={index}>
            <div className="border-2 p-4 rounded-lg mb-4 bg-transparent text-black text-2xl">
              <div className="mr-4">
                <strong>Name:</strong> {port.getName()}
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
                <strong>Season:</strong> {port.getSeason() + 1}
              </div>
              <div className="mr-4">
                <strong>Level:</strong> {port.getLevel()}
              </div>
              <div className="mr-4">
                <strong>Region:</strong> {port.getRegion()}
              </div>

            </div>
          </div>
        ))}
      </div>
    );
  } else if (returnUrls.length === 0) {
    return (
      <div className="ml-9">
        <p>No Results</p>
      </div>
    );
  } else {
    return null;
  }
};

const PortSearch = () => {
  const [returnUrls, setReturnUrls] = useState([]);
  useEffect(() => {
    setReturnUrls(Ports); // Populate all portfolios initially
  }, []);

  const search = (level, award, region) => {
    let filteredPorts = Ports;

    if (award !== 'Any') {
      filteredPorts = filteredPorts.filter((port) => port.getAward() === award);
    }

    if (level !== 'Any') {
      filteredPorts = filteredPorts.filter((port) => port.getLevel() === level);
    }

    if (region !== '') {
      filteredPorts = filteredPorts.filter((port) => port.getRegion() === region);
    }

    setReturnUrls(filteredPorts);
  };

  const handleTagClick = (filter) => {
    if (filter === 'award') {
      setAwardFilter('');
    } else if (filter === 'level') {
      setLevelFilter('');
    } else if (filter === 'region') {
      setRegionFilter('');
    }
  };

  const handleSearch = () => {
    search(levelFilter, awardFilter, regionFilter);
  };

  const [awardFilter, setAwardFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const handleAwardFilterChange = (e) => {
    setAwardFilter(e.target.value);
  };

  const handleLevelFilterChange = (e) => {
    setLevelFilter(e.target.value);

    if (e.target.value !== 'States' && e.target.value !== 'Regionals') {
      setRegionFilter(''); // Reset region filter if level is changed to a different option
    }
  };

  const handleRegionFilterChange = (selectedOption) => {
    if (selectedOption && selectedOption.value !== null) {
      setRegionFilter(selectedOption.value);
    } else {
      setRegionFilter('');
    }
  };
    
  const regionOptions = Array.from(new Set(Ports.map((port) => port.getRegion()))) // Get unique regions from Ports
  .map((region) => ({ value: region, label: region }))
  .sort((a, b) => (a.label || '').localeCompare(b.label || '', 'en', { sensitivity: 'base' })); // Sort options alphabetically
  return (
    <div>
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
        {levelFilter === 'States' || levelFilter === 'Regionals' ? (
          <div className="mr-2">
            <Select
              className="w-64 mt-4"
              placeholder="(Optional) Select a region"
              isClearable
              options={regionOptions}
              onChange={handleRegionFilterChange}
            />
          </div>
        ) : null}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4" onClick={handleSearch}>
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
};

export default PortSearch;
