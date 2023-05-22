import React from 'react';
const Team = () => {
  return (
    <div className="bg-blue-600 border-white">

  <div className="ml-2 flex items-center">
    <img src="https://ecgrobotics.org/wp-content/uploads/2019/11/logo_10195-300x300.png" style = {{width:'60px', height:'60px'}} alt="Image" className="mr-4" />
      <p className="text-3xl font-bold col-auto text-white ml-4"> FTC Portfolio Utility- Presented by Team 10195 Night Owls</p>
      <a className="text-white mx-8 px-4" target="_blank" href="https://ecgrobotics.org/ftc10195/">About the Team</a>
      <a className="text-white mx-8 " target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdEO4ifptS7LqIjBBJTRyEO3BSJ6wb-KkQPREObv2NO3X1GXg/viewform?embedded=true">Submit Portfolio</a>

      </div>
    </div>
  );
};

export default Team;
