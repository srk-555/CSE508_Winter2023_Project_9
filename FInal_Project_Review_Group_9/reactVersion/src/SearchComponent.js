import React, { useEffect, useState } from "react";
import './index.css';
import AspectRatings from "./AspectRatings";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("");
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

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
        <div className="search-bar">
        <span className="search-icon">&#128269;</span>
          <input
            id="search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={getReviewData} 
            placeholder="Enter a search term"
          />
          <button
            aria-label="Search"
            onClick={getReviewData}
            className="search-button"
          >
            <span>Search</span>
          </button>
        </div>
        {Array.isArray(data) &&
         data.map((item) => (
          <div key={item.url}>
            <a href="#" onClick={() => handleProductClick(item)}>
              <h3>{item.product_name}</h3>
            </a>
          </div>
          ))
        }

        {selectedProduct && (
          <AspectRatings product={selectedProduct} handleClose={handleModalClose} />
        )}
      </div>
    </div>
  );
  
}

export default SearchComponent;
