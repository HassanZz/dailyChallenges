// const orders = new Array();

const orders = [
  "new player ArshiA 1 2 3 4",
  "new player sadegh 1 2 3 4",
  "new player haniye 1 2 3 4",
  "new player fateme 1 2 3 4",
  "new player qorban 1 2 3 4",
  "new player abbasi 1 2 3 4",
  "new player alikmr 1 2 3 4",
  "new player sadegh 1 2 3 4",
  "new player hamide 1 2 3 4",
  "new player karane 1 2 3 4",
  "new player vanaki 1 2 3 4",

  "new player Ars 1 100 100 100",
  "new player sad 1 100 100 100",
  "new player han 1 100 100 100",
  "new player fat 1 100 100 100",
  "new player qor 1 100 100 100",
  "new player abb 1 100 100 100",
  "new player ali 1 100 100 100",
  "new player sad 1 100 100 100",
  "new player ham 1 100 100 100",
  "new player kar 1 100 100 100",
  "new player van 1 100 100 100",

  "new team t2 100",
  "new team t1 100",
  "buy 12 1",
  "buy 13 1",
  "buy 14 1",
  "buy 15 1",
  "buy 16 1",
  "buy 17 1",
  "buy 18 1",
  "buy 19 1",
  "buy 20 1",
  "buy 21 1",
  "buy 22 1",

  "buy 1 2",
  "buy 2 2",
  "buy 3 2",
  "buy 4 2",
  "buy 5 2",
  "buy 6 2",
  "buy 7 2",
  "buy 8 2",
  "buy 9 2",
  "buy 10 2",
  "buy 11 2",

  "sell 12 1",
];

console.log(orders);
/*
while (true) {
  const order = prompt("insert order");
  if (order == "end") {
    break;
  } else {
    orders.push(order);
  }
}
*/
let playerId = 1;
let teamId = 1;
let teamArray = new Array();
const playerArray = new Array();
let teamPlayerArray = new Array();

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
    teamPlayerArray.find((item) => item.playerID === pID)
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
    teamArray = teamArray.map((item) => {
      if (item.id === team.id) {
        return {
          money: team.money - player.price,
          name: item.name,
          id: item.id,
        };
      } else {
        return item;
      }
    });
    console.log("player added to the team successfully");
  }
  return [teamArray, teamPlayerArray];
};

const sellPlayer = (pID, tID) => {
  const player = playerArray.find((item) => item.id === pID);
  const team = teamArray.find((item) => item.id === tID);
  const teamHasPlayer = teamPlayerArray.find((item) => item.playerID === pID);
  if (!Boolean(team)) {
    console.log("team does not exist");
  } else if (!Boolean(teamHasPlayer)) {
    console.log("team doesnt have this player!");
  } else {
    teamArray.map((item) => {
      if (item.id === tID) {
        item.money += player.price;
      }
    });
    teamPlayerArray = teamPlayerArray.filter(
      (item) => !(item.playerID === pID)
    );

    console.log("player sold successfully");
  }
  return [teamArray, teamPlayerArray];
};

orders.forEach((item) => {
  item = item.split(" ");
  if (item === "rank") {
    console.log("rank");
  } else if (item[0] === "new" && item[1] === "player") {
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
    const isDuplicated = Boolean(
      teamArray.find((item_) => item_.name === item[2])
    );
    if (!isDuplicated) {
      teamArray.push(new makeTeam(item[2], Number(item[3])));
    }
  } else if (item[0] === "buy") {
    [teamArray, teamPlayerArray] = buyPlayer(Number(item[1]), Number(item[2]));
  } else if (item[0] === "sell") {
    [teamArray, teamPlayerArray] = sellPlayer(Number(item[1]), Number(item[2]));
  }
});

console.log(teamArray, playerArray, teamPlayerArray, "teamArray");

/*
[
'new player ArshiA 1 2 3 4',
'new player sadegh 1 2 3 4',
'new player haniye 1 2 3 4',
'new player fateme 1 2 3 4',
'new player qorban 1 2 3 4',
'new player abbasi 1 2 3 4',
'new player alikmr 1 2 3 4',
'new player sadegh 1 2 3 4',
'new player hamide 1 2 3 4',
'new player karane 1 2 3 4',
'new player vanaki 1 2 3 4',

'new player Ars 1 100 100 100',
'new player sad 1 100 100 100',
'new player han 1 100 100 100',
'new player fat 1 100 100 100',
'new player qor 1 100 100 100',
'new player abb 1 100 100 100',
'new player ali 1 100 100 100',
'new player sad 1 100 100 100',
'new player ham 1 100 100 100',
'new player kar 1 100 100 100',
'new player van 1 100 100 100',

'new team t2 100',
'new team t1 100',
'buy 12 1',
'buy 13 1',
'buy 14 1',
'buy 15 1',
'buy 16 1',
'buy 17 1',
'buy 18 1',
'buy 19 1',
'buy 20 1',
'buy 21 1',
'buy 22 1',

'buy 1 2',
'buy 2 2',
'buy 3 2',
'buy 4 2',
'buy 5 2',
'buy 6 2',
'buy 7 2',
'buy 8 2',
'buy 9 2',
'buy 10 2',
'buy 11 2',

'sell 12 1',
]
*/
