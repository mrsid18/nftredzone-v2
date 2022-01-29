import React from "react";
import { useState, useEffect } from "react";
import { fetchPlayers, rosterIdToTeamName } from "../utils/API";
const axios = require("axios");

const Matchup = () => {
  const [matchups, setMatchups] = useState([]);
  const [players, setPlayers] = useState([]);
  const [week, setWeek] = useState(1);

  useEffect(() => {
    getMatchups(week);
  }, [week]);

  const getMatchups = async (currentWeek) => {
    try {
      if (currentWeek === 1) {
        const playersFromServer = await fetchPlayers();
        setPlayers(playersFromServer);
      }
      const matchupsFromServer = await fetchMatchups(currentWeek);
      let teamsForMatchup = [];
      for (let i = 1; i <= 8; i++) {
        teamsForMatchup.push(
          matchupsFromServer.filter((matchup) => matchup.matchup_id === i)
        );
      }
      setMatchups(teamsForMatchup);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchMatchups = async (week) => {
    try {
      const response = await axios.get(
        `https://api.sleeper.app/v1/league/736015852884844544/matchups/${week}`
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  const selectOptions = [...Array(19).keys()].slice(1);

  if (matchups.length > 0 && matchups[0].length > 0) {
    return (
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>MATCHUP WEEK </h1>
            <select
              name="weekSelect"
              className="form-select text-color-high fw-800"
              value={week}
              style={{ maxWidth: "7rem", marginTop: "1rem" }}
              onChange={(e) => {
                setWeek(e.target.value);
              }}
            >
              {selectOptions.map((option, index) => {
                return (
                  <option value={option} key={index}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>

          {matchups.map((matchup, index) => {
            return (
              <div className="d-grid mb-32" key={"div" + index}>
                <div key={"d1" + index} style={{ maxWidth: 500 }}>
                  <h3
                    key={"h1" + index}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {index + 1} . {rosterIdToTeamName[matchup[0]?.roster_id]}
                    <span className="text-color-secondary" key={"span" + index}>
                      {matchup[0]?.points}
                    </span>
                  </h3>
                  <div
                    style={{
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                    }}
                    className="shadow"
                  >
                    <h5 className="tt-u text-color-secondary">Starters</h5>
                    {matchup[0]?.starters.map((starter, index) => {
                      const player = players[starter];
                      return (
                        <div
                          key={index}
                          className="text-color-high"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>
                            <span className="text-color-secondary mr-16 fw-800">
                              {player?.position}
                            </span>
                            {player?.first_name} {player?.last_name}
                          </p>
                          <p className="fw-600 text-color-error">
                            {matchup[0]?.players_points[player?.player_id]}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div key={"d2" + index} style={{ maxWidth: 500 }}>
                  <h3
                    key={"h2" + index}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {rosterIdToTeamName[matchup[1]?.roster_id]}
                    <span className="text-color-secondary">
                      {matchup[1]?.points}
                    </span>
                  </h3>
                  <div
                    style={{
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                    }}
                    className="shadow"
                  >
                    <h5 className="tt-u text-color-secondary">Starters</h5>
                    {matchup[1]?.starters.map((starter, index) => {
                      const player = players[starter];
                      return (
                        <div
                          key={index}
                          className="text-color-high"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>
                            <span className="text-color-secondary mr-16 fw-800">
                              {player?.position}
                            </span>
                            {player?.first_name} {player?.last_name}
                          </p>
                          <p className="fw-600 text-color-error">
                            {matchup[1]?.players_points[player?.player_id]}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* <h3 key={index}>
              {index + 1} . {rosterIdToTeamName[matchup[0]?.roster_id]}{" "}
              <span className="text-color-error">{matchup[0]?.points}</span>{" "}
              <span className="text-color-secondary">V/S</span>{" "}
              {rosterIdToTeamName[matchup[1]?.roster_id]}{" "}
              <span className="text-color-error">{matchup[1]?.points}</span>
            </h3> */}
              </div>
            );
          })}
        </div>
      </section>
    );
  } else if(matchups.length > 0 && !matchups[0].length > 0) {
    return (
      <section className="section">
        <div className="container">
        <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>MATCHUP WEEK </h1>
            <select
              name="weekSelect"
              className="form-select text-color-high fw-800"
              value={week}
              style={{ maxWidth: "7rem", marginTop: "1rem" }}
              onChange={(e) => {
                setWeek(e.target.value);
              }}
            >
              {selectOptions.map((option, index) => {
                return (
                  <option value={option} key={index}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <h3 className="mt-24 pt-24 ta-c" style={{color:'red'}}>No Data Found !</h3>
        </div>
        </section>
    )
  } else {
    return (
      <section className="section">
        <div className="container">
        <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>MATCHUP WEEK </h1>
            <select
              name="weekSelect"
              className="form-select text-color-high fw-800"
              value={week}
              style={{ maxWidth: "7rem", marginTop: "1rem" }}
              onChange={(e) => {
                setWeek(e.target.value);
              }}
            >
              {selectOptions.map((option, index) => {
                return (
                  <option value={option} key={index}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <h3 className="mt-24 pt-24 ta-c">Loading...</h3>
        </div>
        </section>
    )
  }
};

export default Matchup;
