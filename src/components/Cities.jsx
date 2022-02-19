import React from "react";
import path from "../assets/Fill 219.svg";

const Cities = ({
  image,
  title,
  location,
  googleMap,
  startDate,
  endDate,
  description,
}) => {
  return (
    <>
      <div className="cities-container">
        <img src={image} alt="Cityimage" />
        <div className="city-info">
          <span className="location">
            <img className="path" src={path} alt="" />
            <span>{location}</span>

            <a className="map" href={googleMap}>
              View on Google Maps
            </a>
          </span>

          <h1 className="title">{title}</h1>
          <p className="dates">
            {startDate} - {endDate}
          </p>
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="border"></div>
    </>
  );
};

export default Cities;
