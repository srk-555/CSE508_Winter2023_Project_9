import React, { useEffect, useState } from "react";
import './SearchComponent.css';
import './index.css';
import AspectRatings from "./AspectRatings";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("");
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  const getReviewData = async (event) => {
    if (event.key === "Enter" || event.type === "click") {
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "500px" }}> */}
        <h1 style={{color:'#333'}}><i>Search a Product or a Product Category</i></h1>
        <div className="search-bar">
        <span className="search-icon">&#128269;</span>
          <input
            id="search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={getReviewData} 
            placeholder="Search for a Product"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)', border: '1px solid black', outline: 'none'}}
          />
          <button
            aria-label="Search"
            onClick={getReviewData}
            className="search-button"
          >
            Search
          </button>
        </div>
        {Array.isArray(currentItems) && (
        
        <div className="search-results">
          {currentItems.map((item) => (
            <div key={item.url}>
              <a className="card" href="#" onClick={() => handleProductClick(item)}>
                <h3>{item.product_name}</h3>
              </a>
            </div>
          ))}
        </div>

        )}
{/* {Array.isArray(currentItems) && (
  <div className="search-results" style={{ overflowX: "auto" }}>
    {currentItems.map((item) => (
      <div key={item.url}>
        <a className="card" href="#" onClick={() => handleProductClick(item)}>
          <h3>{item.product_name}</h3>
        </a>
      </div>
    ))}
  </div>
)} */}



        {selectedProduct && (
          <AspectRatings product={selectedProduct} handleClose={handleModalClose} />
        )}

        {/* <ul className="pagination">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber} className={currentPage === pageNumber ? "active" : null}>
              <a href="#" onClick={() => setCurrentPage(pageNumber)}>
                {pageNumber}
              </a>
            </li>
          ))}
        </ul> */}
        <div style={{textAlign: "center"}}>
        <div className="pagination">
  {pageNumbers.map((pageNumber, index) => (
    <li key={index} className={`pagination-item ${currentPage === pageNumber ? "active" : ""}`} style={{paddingRight: "10px"}}>
      <a className="pageNumber" href="#" onClick={() => setCurrentPage(pageNumber)}>
        {pageNumber}
      </a>
      <span></span>
    </li>
  ))}
</div>
</div>

      
    </div>
  );
  
}

export default SearchComponent;
