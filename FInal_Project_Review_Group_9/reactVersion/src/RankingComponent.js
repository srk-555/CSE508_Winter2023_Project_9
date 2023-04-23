import React, { useEffect, useState } from "react";
import './RankingComponent.css';
import './index.css';
import AspectRatings from "./AspectRatings";

function RankingComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("");
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  
  
  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  const book_categories = [
    "plot",
    "character_development",
    "writing_style",
    "theme",
    "pacing",
    "dialogue",
    "setting",
    "tone_mood",
    "originality",
    "ending",
    "world_building",
    "genre",
    "narration",
    "emotion",
    "depth_of_research",
    "structure_organization",
    "clarity",
    "suspense",
    "symbolism",
    "imagery",
    "delivery"
  ];
  const kitchen_categories = [
    "material",
    "quality",
    "durability",
    "design",
    "ease_of_use",
    "efficiency",
    "capacity",
    "safety",
    "portability",
    "brand_reputation",
    "price",
    "customer_support",
    "accessories",
    "environmentally_friendly",
    "performance",
    "functionality"
  ];
  
  const dvd_categories = [
    "picture_quality",
    "sound_quality",
    "special_features",
    "bonus_content",
    "cast_performances",
    "director_style",
    "cinematography",
    "screenplay",
    "plot_twists",
    "character_development",
    "action_scenes",
    "comedy",
    "drama",
    "suspense",
    "romance",
    "science_fiction",
    "fantasy",
    "historical_accuracy",
    "costumes_and_set_design",
    "adaptation_from_a_book_or_other_source_material",
  ];

  const categories = [
    "books",
    "dvd",
    "electronics",
    "kitchnen and houseware"
  ];


  const electronics_categories = [  "performance_speed",  "battery_life",  "display_screen_quality",  "sound_audio_quality",  "build_quality_durability",  "design_aesthetics",  "ease_of_use",  "connectivity",  "software_operating_system",  "storage_capacity",  "camera_photography_capabilities",  "gaming_performance",  "energy_efficiency",  "price_value_for_money",  "brand_reputation",  "customer_support_warranty",  "accessories_included",  "security_privacy_features",  "voice_assistant_integration",  "virtual_augmented_reality_compatibility",  "portability"]

  


  const handleCategorySelect = (option) => {
    setSelectedCategory(option);
  };
  
  const handleFeatureSelect = (option) => {
    setSelectedFeature(option);
  };

  const DropdownMenu = ({ options, toset }) => {

    console.log("to set received is = "+toset)
    const [selectedOption, setSelectedOption] = useState("");
    // const [selectedCategory, setSelectedCategory] = useState("");

    

    // useEffect(() => {
    //     if (toset=="cate") {
    //       setSelectedCategory(selectedOption);
    //     }
    //     else{setSelectedFeature(selectedOption)}
    //   }, [toset]);

    const handleChange = (event) => {
        const option = event.target.value;
        
        setSelectedOption(option);

        setSelectedCategory(option);
        if (toset === "cate") {
          setSelectedCategory(option);
        } else {
          setSelectedFeature(option);
        }
      };
      
  
    return (
      <div>
        <select
          value={selectedOption}
          onChange={handleChange}
          style={{
            height: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
            border: "1px solid black",
            outline: "none"
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p>
          <b>You have selected: {selectedOption}</b>
          
          
        </p>
      </div>
    );
  };

  const DropdownMenu1 = ({ options, toset }) => {

    console.log("to set received is = "+toset)
    const [selectedOption, setSelectedOption] = useState("");
    // const [selectedCategory, setSelectedCategory] = useState("");

    

    // useEffect(() => {
    //     if (toset=="cate") {
    //       setSelectedCategory(selectedOption);
    //     }
    //     else{setSelectedFeature(selectedOption)}
    //   }, [toset]);

    const handleChange = (event) => {
        const option = event.target.value;
        
        setSelectedOption(option);

        // setSelectedCategory(option);
        if (toset === "cate") {
          // setSelectedCategory(option);
        } else {
          setSelectedFeature(option);
        }
      };
      
  
    return (
      <div>
        <select
          value={selectedOption}
          onChange={handleChange}
          style={{
            height: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
            border: "1px solid black",
            outline: "none"
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p>
          <b>Book Features: {selectedOption}</b>
          
          
        </p>
      </div>
    );
  };

  const DropdownMenu2 = ({ options, toset }) => {

    console.log("to set received is = "+toset)
    const [selectedOption, setSelectedOption] = useState("");
    // const [selectedCategory, setSelectedCategory] = useState("");

    

    // useEffect(() => {
    //     if (toset=="cate") {
    //       setSelectedCategory(selectedOption);
    //     }
    //     else{setSelectedFeature(selectedOption)}
    //   }, [toset]);

    const handleChange = (event) => {
        const option = event.target.value;
        
        setSelectedOption(option);

        // setSelectedCategory(option);
        if (toset === "cate") {
          // setSelectedCategory(option);
        } else {
          setSelectedFeature(option);
        }
      };
      
  
    return (
      <div>
        <select
          value={selectedOption}
          onChange={handleChange}
          style={{
            height: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
            border: "1px solid black",
            outline: "none"
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p>
          <b>DVD Features: {selectedOption}</b>
          
          
        </p>
      </div>
    );
  };

  const DropdownMenu3 = ({ options, toset }) => {

    console.log("to set received is = "+toset)
    const [selectedOption, setSelectedOption] = useState("");
    // const [selectedCategory, setSelectedCategory] = useState("");

    

    // useEffect(() => {
    //     if (toset=="cate") {
    //       setSelectedCategory(selectedOption);
    //     }
    //     else{setSelectedFeature(selectedOption)}
    //   }, [toset]);

    const handleChange = (event) => {
        const option = event.target.value;
        
        setSelectedOption(option);

        // setSelectedCategory(option);
        if (toset === "cate") {
          // setSelectedCategory(option);
        } else {
          setSelectedFeature(option);
        }
      };
      
  
    return (
      <div>
        <select
          value={selectedOption}
          onChange={handleChange}
          style={{
            height: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
            border: "1px solid black",
            outline: "none"
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p>
          <b>Kitchen and Houseware Features: {selectedOption}</b>
          
          
        </p>
      </div>
    );
  };

  const DropdownMenu4 = ({ options, toset }) => {

    console.log("to set received is = "+toset)
    const [selectedOption, setSelectedOption] = useState("");
    // const [selectedCategory, setSelectedCategory] = useState("");

    

    // useEffect(() => {
    //     if (toset=="cate") {
    //       setSelectedCategory(selectedOption);
    //     }
    //     else{setSelectedFeature(selectedOption)}
    //   }, [toset]);

    const handleChange = (event) => {
        const option = event.target.value;
        
        setSelectedOption(option);

        // setSelectedCategory(option);
        if (toset === "cate") {
          // setSelectedCategory(option);
        } else {
          setSelectedFeature(option);
        }
      };
      
  
    return (
      <div>
        <select
          value={selectedOption}
          onChange={handleChange}
          style={{
            height: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
            border: "1px solid black",
            outline: "none"
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p>
          <b>Electronics Features: {selectedOption}</b>
          
          
        </p>
      </div>
    );
  };
  
  

  
  const getReviewData = async (event) => {

    console.log("Selectes in MAIN is  -  "+selectedCategory);
    if (event && (event.key === "Enter" || event.type === "click")) {
      console.log("Search Term is - "+searchTerm)
      var res = await fetch(`http://localhost:8000/reviews/v1/list?search=`+searchTerm);
      const actualData = await res.json();
      setData(actualData.results);
      setSearchedTerm(searchTerm);   

      var res = await fetch('http://localhost:8000/reviews/v1/list/'+selectedCategory);
      const adata = await res.json();
  
      for (let i = 0; i < 10; i++) {
        console.log(adata[0].plot)
      }
      // console.log("Actual data is - "+adata[0].plot)   
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
        <h1 style={{color:'#333'}}><i>Select Product Category and Features</i></h1>
        <div className="search-bar">
        
        <div style={{display:'flex', flexDirection: 'column', justifyContent:'center'}}>
          
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <div className="dropdown-container">
            {/* <DropdownMenu options={categories} toset="cate" /> */}
            <DropdownMenu options={categories} toset="cate" onSelect={handleCategorySelect} />
            </div>
            <div className="dropdown-container">
            <DropdownMenu1 options={book_categories} toset="feat" onSelect={handleFeatureSelect}/>
            
            </div>

            <div className="dropdown-container">
            <DropdownMenu2 options={dvd_categories} toset="feat" onSelect={handleFeatureSelect}/>
            
            </div>

            <div className="dropdown-container">
            <DropdownMenu3 options={kitchen_categories} toset="feat" onSelect={handleFeatureSelect}/>
            
            </div>

            <div className="dropdown-container">
            <DropdownMenu4 options={electronics_categories} toset="feat" onSelect={handleFeatureSelect}/>
            
            </div>
            </div>
          <button
            aria-label="Search"
            onClick={getReviewData}
            className="search-button"
            style = {{alignSelf:'center'}}
          >
            Search
          </button>
          </div>
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


        {selectedProduct && (
          <AspectRatings product={selectedProduct} handleClose={handleModalClose} />
        )}

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

export default RankingComponent;
