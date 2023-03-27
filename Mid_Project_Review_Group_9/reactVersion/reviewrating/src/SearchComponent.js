import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Autosuggest from "react-autosuggest";


function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("");

  const handleSearch = () => {
    // Perform search action with searchTerm
    console.log("Search for: ", searchTerm);

    
  };


  
  
  const [data, setData] = useState([]);
    const getReviewData = async () => {
        try{
          console.log(searchTerm)
            const res = await fetch(`http://localhost:8000/reviews/v1/details/`+searchTerm+'/');
            
            const actualData = await res.json();
            //console.log(actualData);
            setData(actualData)
            setSearchedTerm(searchTerm);
        }catch(err){
            console.log(err);
        }
    }

    /*
    useEffect(() => {
      getReviewData();
    }, [])
*/
  console.log(data)

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Search For Product</h1>
      <div style={{ display: "flex" }}>
      
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ marginRight: "10px", padding: "10px" }} />
        <button onClick={getReviewData}>Search</button>
        
      </div>
      <h2>You searched for :</h2>
      {searchedTerm && <p style={{ marginTop: "20px" }}>Product Name: {data.product_name}</p>}
      <br></br>
      <br></br>
      {searchedTerm && <p style={{ marginTop: "20px" }}>Aspect Ratings: {data.aspect_ratings}</p>}
    </div>
  );

  
}

export default SearchComponent;
