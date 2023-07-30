import React, {useState} from 'react';
import PortResults from './PortResults'
import Searchbar from './SearchBar';
import { Ports } from './ports';


const PortSearch = () => {

  const [returnUrls, setReturnUrls] = useState(Ports)
return (
<div>
  <Searchbar returnUrls={returnUrls} setReturnUrls={setReturnUrls} />
      <div className="mt-4">
        <PortResults returnUrls={returnUrls} />
      </div>
    </div>
);
};

export default PortSearch;
