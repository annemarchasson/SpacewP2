import React from "react";
import dayjs from "dayjs";
import Timer from "@components/Timer/Timer";
import "./Card.scss";
import localizedFormat from "dayjs/plugin/localizedFormat";
import PropTypes from "prop-types";

function Card({ data }) {
  dayjs.extend(localizedFormat);

  const date = dayjs().format("ll");

  return (
    <div className="card-main">
      <div className="card-content">
        <img src={data.image} alt="" />
        <div className="infos-card">
          <h1>{data.name}</h1> <br />
          <Timer data={data} />
          {date}
          <div className="card-button">
            <button type="button">GO</button>
            <a href={data.map_link} target="_blank" rel="noreferrer">
              <button type="button">Maps</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    map_link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
