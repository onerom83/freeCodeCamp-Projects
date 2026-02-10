const footballTeam = {
  team: "Real Madrid Legend",
  year: 2001,
  headCoach: "Fabio Capello",
  players: [
    {
      name: "Iker Casillas",
      position: "goalkeeper",
      isCaptain: false,
    }, {
      name: "Roberto Carlos",
      position: "defender",
      isCaptain: false, 
    }, {
      name: "Panucci",
      position: "defender",
      isCaptain: false, 
    }, {
      name: "F. Cannavaro",
      position: "defender",
      isCaptain: false,
    }, {
      name: "Hierro",
      position: "defender",
      isCaptain: true,
    }, {
      name: "Seedorf",
      position: "midfielder",
      isCaptain: false,
    }, {
      name: "Redondo",
      position: "midfielder",
      isCaptain: false,
    }, {
      name: "Amavisca",
      position: "midfielder",
      isCaptain: false,
    }, {
      name: "Robinho",
      position: "midfielder",
      isCaptain: false,
    }, {
      name: "Suker",
      position: "forward",
      isCaptain: false,
    }, {
      name: "Mijaktovic",
      position: "forward",
      isCaptain: false,
    }
  ]
};
const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const optionLabel = document.getElementById("players");

team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

const playersData = footballTeam.players

function renderPlayers(filteredPlayers) {
  playerCards.innerHTML = "";
  filteredPlayers.forEach((player) => {
    const playerDiv = document.createElement("div")
    playerDiv.classList.add("player-card");

    const captainText = player.isCaptain ? '(Captain)' : '';
    
    const playerName = document.createElement("h2");
    playerName.innerText = `${player.name} ${captainText}`.trim();

    const playerPosition = document.createElement("p");
    playerPosition.innerText = `Position: ${player.position}`;
    playerDiv.append(playerName, playerPosition);
    playerCards.append(playerDiv);
  });
}

renderPlayers(playersData);

optionLabel.addEventListener('change', () => {
  const selectedPosition = optionLabel.value;
  let playersToRender;

  selectedPosition === "all" ? playersToRender = playersData : playersToRender = playersData.filter((player) => player.position === selectedPosition);
  renderPlayers(playersToRender);
});