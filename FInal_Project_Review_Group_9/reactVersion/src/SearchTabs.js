import { useState } from "react";
import {Tab,Tabs,TabList,TabPanel} from "react-tabs";
import "./tabs.css?v=1";

import logo from './logo.svg';
import SearchComponent from './SearchComponent.js';
const SearchTabs = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  function handleTabSelect(index) {
    setSelectedTabIndex(index);
  }

    return(
        <Tabs className="Tabs" selectedIndex={selectedTabIndex} onSelect={handleTabSelect}>
        <div> <h1 style={{ textShadow: "2px 2px 5px #fff", color:"black", fontSize:"50px", fontFamily:"Helvetica", margin: 0 }}>Aspect Based Sentiment Analysis</h1>
        <h6 style={{ textShadow: "2px 2px 5px #fff", color:"black", fontSize:"20px", fontFamily:"Helvetica"}}><i>IR Project, Group 9</i></h6>
        </div>
       <TabList>

         <Tab><b>Search For Products</b></Tab>
         <Tab><b>Search For Features</b></Tab>
       </TabList>
      <TabPanel>
      <SearchComponent/>
       </TabPanel>
       <TabPanel>
       {/* <Ingredient_Search/> */}
       </TabPanel>

     </Tabs>

    );
}
export default SearchTabs;