import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div className="bg-blue-600 border-white">
      <p className="text-3xl font-bold col-auto text-white">FTC Portfolio Utility- Presented by Team 10195 Night Owls</p>
      <a className="text-white px-4" target="_blank" href="https://ecgrobotics.org/ftc10195/">About the Team</a>
      <a className="text-white" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdEO4ifptS7LqIjBBJTRyEO3BSJ6wb-KkQPREObv2NO3X1GXg/viewform?embedded=true">Submit Portfolio</a>
      <Link className="text-white px-4" to="/info">About the Site</Link>
    </div>
  );
};

export default Team;
