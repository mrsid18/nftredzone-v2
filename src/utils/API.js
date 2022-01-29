const axios = require("axios");

export const rosterIdToTeamName = {
  16: "GEVOLs",
  15: "GLUE FACTORY",
  11: "Jenkins The Valet",
  4: "Gutter Cat Gang",
  10: "The VeeFlickers",
  9: "KIA",
  12: "Crypto Cannabis Club",
  8: "The Alien Boy",
  7: "GOATz",
  2: "Personal Corner",
  6: "Royal Society of Players",
  14: "SupDucks",
  3: "TEAM ZED RUN",
  1: "Bored Ape Yacht Club",
  5: "Riot Racers",
  13: "dGen Network",
};

export const fetchRosters = async () => {
  try {
    const response = await axios.get(
      "https://api.sleeper.app/v1/league/736015852884844544/rosters"
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchPlayers = async () => {
  try {
    const response = await axios.get("./players.json");
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
