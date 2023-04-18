import React, { useEffect, useState } from "react";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("");

const [data, setData] = useState([]);


    const getReviewData = async (event) => {
      if (event.key === "Enter") {
          console.log(searchTerm)
            var res = await fetch(`http://localhost:8000/reviews/v1/list?search=`+searchTerm);
            const actualData = await res.json();
            setData(actualData.results);
            setSearchedTerm(searchTerm);   
      }      
       
    }

    
    useEffect(() => {
      getReviewData();
      
    }, [])

    
  console.log(data)

  return (

    
    <div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Search For Product</h1>
      <div style={{ display: "flex" }}>
      
        <input type="text" value={searchTerm} onKeyDown={getReviewData} onChange={(e) => setSearchTerm(e.target.value)} style={{ marginRight: "10px", padding: "10px" }} />
        <button onClick={getReviewData}>Search</button>
       
      </div>
      {Array.isArray(data) && data.map(item => {
        const aspectRatings = JSON.parse(item.aspect_ratings);
        const ratingElements = Object.entries(aspectRatings).map(([key, value]) => (
          <div key={key}>
            <span>{key}: </span>
            <span>{value}</span>
          </div>
        ));
        return (
          <div key={item.url}>
            <h3>{item.product_name}</h3>
            {Object.keys(aspectRatings).length > 0 ? (
              <div>{ratingElements}</div>
            ) : (
              <div>No aspect ratings found.</div>
            )}
          </div>
        );
      })}
      </div>
      </div>
    
  );

  
}

export default SearchComponent;
