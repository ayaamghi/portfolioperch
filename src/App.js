import React from "react";
import Footer from "./Components/Footer"
import PortSearch from "./Components/PortSearch";
import Team from "./Components/Team"
import Port from "./Components/Port"
function App() {
  return (
    <div className = "fixed inset-0 overflow-y-scroll"> 
    <div className="grid grid-rows-[auto,1fr,auto] h-screen gap-y-6">
      <div className="row-span-1">
        <Team />
      </div>
      
      <div className="row-span-1">
        <PortSearch />
      </div>
      <div className="row-span-1">
        <Footer />
      </div>
    </div>
    </div>
  );
}

export default App;
