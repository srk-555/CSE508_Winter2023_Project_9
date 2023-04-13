import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import {MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer} from "mdb-react-ui-kit";


function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("");

  const handleSearch = () => {
    // Perform search action with searchTerm
    console.log("Search for: ", searchTerm);

    
  };


  
  
  const [data, setData] = useState([]);
  //const [ratings , setRatings] = useState("");
    const getReviewData = async () => {
        try{
          console.log(searchTerm)
            var res = await fetch(`http://localhost:8000/reviews/v1/list?search=`+searchTerm);
            const actualData = await res.json();
            setData(actualData);
            setSearchedTerm(searchTerm);
   //         const rating = JSON.parse('{"recipes_time": 3, "others": 3, "book": 4, "herb": 3, "lots": 5}');
   //         setRatings(rating);
           
        }catch(err){
          <div>alert.show("Alert: Not found")</div>
        }
    }

    /*
    useEffect(() => {
      getReviewData();
    }, [])
*/
  //console.log(data[0])
   // console.log(ratings.others);
  return (

    
    
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Search For Product</h1>
      <div style={{ display: "flex" }}>
      
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ marginRight: "10px", padding: "10px" }} />
        <button onClick={getReviewData}>Search</button>
       
      </div>
      
      <MDBContainer>
        <div style={{marginTop: "20px"}}>
          <MDBRow>
            <MDBCol size="12">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Aspect Ratings</th>
                  </tr>
                </MDBTableHead>
                {data.length === 0? (
                  <MDBTableBody className="align-center mb-0">
                    <tr>
                      <td colSpan={8} className="text-center mb-0">No Data Found</td> 
                    </tr>
                  </MDBTableBody>
                ): (
                  data.map((item, index) =>(
                    <MDBTableBody key={index}>
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td>{item.product_name}</td>
                        <td>{item.aspect_ratings}</td>
                      </tr>
                    </MDBTableBody>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </div>
    
  );

  
}

export default SearchComponent;
