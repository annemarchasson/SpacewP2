import React, { useEffect, useState } from "react";

import axios from "axios";
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
    axios
      .get(
        "https://ll.thespacedevs.com/2.2.0/launch/?agency_launch_attempt_count=&agency_launch_attempt_count__gt=&agency_launch_attempt_count__gte=&agency_launch_attempt_count__lt=&agency_launch_attempt_count__lte=&agency_launch_attempt_count_year=&agency_launch_attempt_count_year__gt=&agency_launch_attempt_count_year__gte=&agency_launch_attempt_count_year__lt=&agency_launch_attempt_count_year__lte=&format=json&last_updated__gte=&last_updated__lte=&location_launch_attempt_count=&location_launch_attempt_count__gt=&location_launch_attempt_count__gte=&location_launch_attempt_count__lt=&location_launch_attempt_count__lte=&location_launch_attempt_count_year=&location_launch_attempt_count_year__gt=&location_launch_attempt_count_year__gte=&location_launch_attempt_count_year__lt=&location_launch_attempt_count_year__lte=&mission__orbit__name=&mission__orbit__name__icontains=&name=&net__gt=&net__gte=&net__lt=&net__lte=&orbital_launch_attempt_count=&orbital_launch_attempt_count__gt=&orbital_launch_attempt_count__gte=&orbital_launch_attempt_count__lt=&orbital_launch_attempt_count__lte=&orbital_launch_attempt_count_year=&orbital_launch_attempt_count_year__gt=&orbital_launch_attempt_count_year__gte=&orbital_launch_attempt_count_year__lt=&orbital_launch_attempt_count_year__lte=&pad=&pad__location=&pad_launch_attempt_count=&pad_launch_attempt_count__gt=&pad_launch_attempt_count__gte=&pad_launch_attempt_count__lt=&pad_launch_attempt_count__lte=&pad_launch_attempt_count_year=&pad_launch_attempt_count_year__gt=&pad_launch_attempt_count_year__gte=&pad_launch_attempt_count_year__lt=&pad_launch_attempt_count_year__lte=&r_spacex_api_id=&rocket__configuration__full_name=&rocket__configuration__full_name__icontains=&rocket__configuration__id=&rocket__configuration__manufacturer__name=&rocket__configuration__manufacturer__name__icontains=&rocket__configuration__name=&rocket__spacecraftflight__spacecraft__id=&rocket__spacecraftflight__spacecraft__name=&rocket__spacecraftflight__spacecraft__name__icontains=&slug=&status=1&window_end__gt=&window_end__gte=&window_end__lt=&window_end__lte=&window_start__gt=&window_start__gte=&window_start__lt=&window_start__lte="
      )

      .then((data) => setData(data.data.results));
  }, []);

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
    </>
  );

}

export default Cards;
