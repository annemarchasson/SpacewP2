import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Card from "../components/Compteurcard/Card";

function Cards() {
  const [apiData, setData] = useState();
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(userInput.toLowerCase());
    setUserInput("");
  };

  useEffect(() => {
    axios.get("http://localhost:5000/fly").then((data) => setData(data.data));
  }, []);
  console.log(apiData);

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <label htmlFor="search"> Rechercher </label> <br />
        <input
          type="text"
          name="search"
          id="search"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      {apiData
        ? apiData
            .filter((vaiseau) => vaiseau.name.toLowerCase().includes(result))
            .map((launchSelected) => (
              <Card key={launchSelected.id} data={launchSelected} />
            ))
        : ""}
      <NavLink to="Payment">Aller paiment</NavLink>
      <NavLink to="Booking-form">Aller booking</NavLink>
    </>
  );
}

export default Cards;
