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
          <h2 className="h2-card">{data.name}</h2> <br />
          <h3>{data.destination}</h3>
          <p>{data.description}</p>
          <Timer data={data} />
          {date}
          <h4>{data.price}$</h4>
          <div className="card-button">
            <button className="button-go-card" type="button">
              GO
            </button>
            <a href={data.map_link} target="_blank" rel="noreferrer">
              <button className="button-maps-card" type="button">
                MAP
              </button>
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
    destination: PropTypes.string.isRequired,
    map_link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
