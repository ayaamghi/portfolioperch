import React from 'react'
import PortBar from './Port';

const PortResults = ( { returnUrls } ) => {
    
    if (returnUrls.length > 0) {
      return (
        <div className="px-8 max-w-screen-lg">
          {returnUrls.map((port, index) => (
            <PortBar 
            name = {port.getName()} 
            index = {index} 
            number = {port.getNum()} 
            url = {port.getUrl()} 
            award = {port.getAward()} 
            place = {port.getPlace()} 
            region = {port.getRegion()}
            season = {port.getSeason()} 
            level = {port.getLevel()} />
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

  export default PortResults; 