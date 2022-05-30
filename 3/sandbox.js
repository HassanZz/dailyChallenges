const orders = new Array();
while (true) {
  const order = prompt("insert order");
  if (order == "end") {
    break;
  } else {
    orders.push(order);
  }
}

let playerId = 0;
let teamId = 0;
const teamArray = new Array();
const playerArray = new Array();
const teamPlayerArray = new Array();

class makePlayer {
  constructor(name, price, speed, finishing, defence) {
    this.id = playerId++;
    this.name = name;
    this.price = price;
    this.speed = speed;
    this.finishing = finishing;
    this.defence = defence;
  }
}

class makeTeam {
  constructor(name, money) {
    this.id = teamId++;
    this.name = name;
    this.money = money;
  }
}

const buyPlayer = (pID, tID) => {
  const player = playerArray.find((item) => item.id === pID);
  const team = teamArray.find((item) => item.id === tID);
  const playerHasTeam = Boolean(
    teamPlayerArray.find((item) => item.teamID === tID)
  );
  if (!Boolean(player)) {
    console.log("player does not exist!");
  } else if (!Boolean(team)) {
    console.log("team does not exist");
  } else if (playerHasTeam) {
    console.log("player already has a team");
  } else if (team.money < player.price) {
    console.log("the team has no enough money");
  } else {
    teamPlayerArray.push({ playerID: pID, teamID: tID });
    teamArray.map((item) => {
      if (item.id === team.id) {
        return {
          money: team.money - player.price,
          name: item.name,
          id: item.id,
        };
      }
    });
    console.log("player added to the team successfully");
  }
};

orders.forEach((item) => {
  item = item.split(" ");
  if (item === "rank") {
    console.log("rank");
  } else if (item[0] === "new" && item[1] === "player") {
    console.log("new");
    playerArray.push(
      new makePlayer(
        item[2],
        Number(item[3]),
        Number(item[4]),
        Number(item[5]),
        Number(item[6])
      )
    );
  } else if (item[0] === "new" && item[1] === "team") {
    console.log("new team");
    const isDuplicated = Boolean(
      teamArray.find((item_) => item_.name === item[2])
    );
    if (!isDuplicated) {
      teamArray.push(new makeTeam(item[2], Number(item[3])));
    }
  } else if (item[0] === "buy") {
    console.log("buy player");
    buyPlayer(Number(item[1]), Number(item[2]));
  }
});

console.log(teamArray);
