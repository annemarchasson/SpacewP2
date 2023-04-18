import React from "react";
import dayjs from "dayjs";
import Timer from "@components/Timer/Timer";
import "./Card.scss";
import localizedFormat from "dayjs/plugin/localizedFormat";
import PropTypes from "prop-types";

function Card({ data }) {
  dayjs.extend(localizedFormat);

  const date = dayjs().format("ll");
  //  console.log(date);
  return (
    <div className="card-main">
      <div className="card-content">
        <img src={data.image} alt="" />
        <div className="infos-card">
          <h1>{data.name}</h1> <br />
          <h3>{data.mission.name}</h3>
          <p>{data.mission.description}</p>
          <Timer data={data} />
          {date}
          <div className="card-button">
            <button type="button">GO</button>
            <a href={data.pad.map_url} target="_blank" rel="noreferrer">
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
    mission: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    pad: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
