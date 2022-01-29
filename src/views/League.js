import React from "react";
import { useState, useEffect } from "react";
import { fetchRosters , fetchPlayers, rosterIdToTeamName} from "../utils/API";


const Api = () => {
  const [rosters, setRosters] = useState([]);
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const getRosters = async () => {
      try {
        const playersFromServer = await fetchPlayers();
        setPlayers(playersFromServer);
        const rostersFromServer = await fetchRosters();
        setRosters(rostersFromServer);
      } catch (err) {
        console.log(err);
      }
    };

    // const getPlayers = async () => {
    //   try {
    //     const playersFromServer = await fetchPlayers();
    //     setPlayers(playersFromServer);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // await getPlayers();
    getRosters();
  }, []);

  const getBench = (roster) => {
    return roster.players.filter((player) => !roster.starters.includes(player));
  };
  return ( players &&
    <section className="section mb-32 pb-32">
    <div className="container">
      <h1 className="ta-c reveal-from-bottom" style={{marginBottom:"-2rem"}}>LEAGUES</h1>
      {rosters.map((roster, index) => {
        return (
          <section className="section spacer-32" key={'s'+index}>
            <h3 key={index}>
              {index + 1} . {rosterIdToTeamName[roster.roster_id]}{" "}
            </h3>
            <div className="d-grid">
              <div style={{maxWidth: 500, paddingLeft:"2rem", paddingRight:"2rem"}} className="has-shadow"> 
                <h5 className="tt-u text-color-secondary">Starters</h5>
                  {roster.starters.map((starter, index) => {
                    const player = players[starter];
                    return (
                      <p key={index} className="text-color-high" style={{ display:'flex', justifyContent:'space-between' }}>
                        {player?.first_name} {player?.last_name}
                        &nbsp;&nbsp;&nbsp;<span className="fw-600 text-color-error">{player?.position}</span>
                      </p>
                    );
                  })}
              </div>
              <div style={{maxWidth: 500, paddingLeft:"2rem", paddingRight:"2rem"}}>
                <h5 className="tt-u text-color-secondary">Bench</h5>
                  {getBench(roster).map((bench, index) => {
                    const player = players[bench];
                    return (
                      <p key={index} className="text-color-high" style={{ display:'flex', justifyContent:'space-between' }}>
                        {player?.first_name} {player?.last_name}
                        &nbsp;&nbsp;&nbsp;<span className="fw-600 text-color-error">{player?.position}</span>
                      </p>
                    );
                  })}
              </div>
            </div>
            {/* <span style={{ color: "red" }}>{roster.metadata?.team_name}</span>{" "} */}
          </section>
        );
      })}
      </div>
    </section>
   );
};

export default Api;
