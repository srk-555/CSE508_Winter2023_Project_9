import React, { useEffect, useRef } from "react";
import "./AspectRatings.css";

function AspectRatings({ product, handleClose }) {
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="star full">
            &#9733;
          </span>
        ))}
        {[...Array(halfStars)].map((_, i) => (
          <span key={`half-${i}`} className="star half">
            &#9734;&#xFE0E;
          </span>
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="star empty">
            &#9734;&#xFE0E;
          </span>
        ))}
      </>
    );
  };

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
    <div className="modal" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}>
      <div className="modal-content" ref={modalRef}>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        {Object.keys(JSON.parse(product.aspect_ratings)).length > 0 ? (
          <div>
            <h2>Aspect Ratings</h2>
            <h4>Product name: "{product.product_name}"</h4>
            {Object.entries(JSON.parse(product.aspect_ratings)).map(([key, value]) => (
              <div key={key}>
                <span>
                  {key.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}:{" "}
                </span>
                <span>{generateStars(value)}</span>
              </div>
            ))}
          </div>
        ) : (
          <div>No aspect ratings found.</div>
        )}
      </div>
    </div>
  );
}

export default AspectRatings;
