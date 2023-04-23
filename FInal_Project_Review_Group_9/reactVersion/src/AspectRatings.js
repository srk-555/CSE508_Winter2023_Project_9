import React, { useEffect, useRef } from "react";
import "./AspectRatings.css";
import { Rating } from 'primereact/rating';
// import Rating1 from 'react-rating-stars-component';

function AspectRatings({ product, handleClose }) {

  function generateStars(rating) {
    // rating = rating*2;
    const validRating = Math.min(Math.max(rating, 0), 5); // ensure rating is between 0 and 5
  
    return (
      <Rating
        style={{ display: 'flex', flexDirection: 'row' }}
        value={validRating}
        readonly={true}
        cancel={false}
        stars={5}
        itemtemplate={(index, symbol) => (
          <>
          
            <span>{symbol}</span>
            <span>&nbsp;</span>
            
          </>
        )}
        className="my-rating"
      />
    );
  }
  
  



  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="modal" style={{ backgroundColor: "blur", color: "black" }}>
          <div className="modal-content"  style={{ maxHeight: "400px", overflowY: "auto" }} ref={modalRef}>
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            {console.log("aspect Ratings Are - "+product.aspect_ratings)}
            
            {Object.keys(JSON.parse(product.aspect_ratings)).length > 0 ? (
              <div>
              {/* <h2>Aspect Ratings</h2> */}
              <h2>Product name: <span className="ptitle">{product.product_name}</span></h2>
              <h4>Product Category: &nbsp; &nbsp;{product.product_type}</h4>
              <h4><div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // add this to vertically center the container
              }}><div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center', // add this to vertically center the content inside the container
                  width: '50%', // set the width of the container to 80% of the parent container
                  maxWidth: '300px', // add max-width to limit the width of the container to 600px
                }}>Overall Product Rating: {generateStars(parseFloat(product.rating))}</div></div></h4>
              {console.log("Product is - "+product)}
                {Object.entries(JSON.parse(product.aspect_ratings)).map(([key, value]) => (
                  <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // add this to vertically center the container
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center', // add this to vertically center the content inside the container
                  width: '90%', // set the width of the container to 80% of the parent container
                  maxWidth: '700px', // add max-width to limit the width of the container to 600px
                }}>
                  <span style={{ fontSize: '20px' }}>
                    {key.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}: <b style={{ fontSize: '18px' }}>{value}/5</b>
                  </span>
                  {generateStars(value)}
                </div>
              </div>

                  
                ))}
              </div>
            ) : (
              <div>
              <h2>Product name: <span className="ptitle">{product.product_name}</span></h2>
              <h4>Product Category: &nbsp;{product.product_type}</h4>
              <h4><div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // add this to vertically center the container
              }}><div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center', // add this to vertically center the content inside the container
                  width: '50%', // set the width of the container to 80% of the parent container
                  maxWidth: '300px', // add max-width to limit the width of the container to 600px
                }}>Overall Product Rating: <div>{generateStars(parseFloat(product.rating))}</div></div></div></h4>
              <h5>No retrieved aspects for this product</h5>
              </div>
            )}



          </div>
        </div>
  );
}

export default AspectRatings;
