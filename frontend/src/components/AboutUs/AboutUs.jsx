import PropTypes from "prop-types";
import React from "react";
import "./AboutUs.scss";

function AboutUs({ imageSrc, name, description }) {
  
  return (
    <div className="members-container">
      <img src={imageSrc} alt="imageTeam" className="imageMembers" />

      <h3 className="nameMembers">{name}</h3>
      <h3 className="descriptionMembers">{description}</h3>
    </div>
  );
}

AboutUs.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutUs;
