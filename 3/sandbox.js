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
    this.isDuplicated = Boolean(teamArray.find((item) => item.name === name));
  }
}

// const p1 = new makePlayer("ali", 2, 3, 4, 5);
// playerArray.push(p1);

// const p2 = new makePlayer("hassan", 5, 4, 3, 2);
// playerArray.push(p2);

const t1 = new makeTeam("real", 20);
teamArray.push(t1);

const t2 = new makeTeam("barca", 20);
teamArray.push(t2);
const t3 = new makeTeam("real", 20);
teamArray.push(t3);
console.log(teamArray);
