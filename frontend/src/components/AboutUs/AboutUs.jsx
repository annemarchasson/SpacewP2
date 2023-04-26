import PropTypes from "prop-types";
import React, { useState } from "react";
import "./AboutUs.scss";

function AboutUs({ imageSrc, name, description }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={isHovered ? "members-containerHovered" : "members-container"}
    >
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
