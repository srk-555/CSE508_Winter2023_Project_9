import React, { useEffect, useState } from "react";
const SearchLogic = (searchTerm) => {

    
    const [data, setData] = useState([]);
  //const [searchTerm, setSearchTerm] = useState("");
   /* const { id } = searchTerm */
    const getReviewData = async () => {
        try{
          console.log(searchTerm)
            const res = await fetch(`http://localhost:8000/reviews/v1/details/`+searchTerm+'/');
            /*console.log("code is coming here")*/
            const actualData = await res.json();
            //console.log(actualData);
            setData(actualData)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
      getReviewData();
    }, [])

  console.log(data)

}

export default SearchLogic