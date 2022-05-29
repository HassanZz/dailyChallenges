const NofPlates = Number(prompt("insert number of plates"));
const FandS = prompt("insert sandp").split("");

const checking = (forks, spoons) => {
  for (let i = 0; i < FandS.length; i++) {
    if (FandS[i] == "F") {
      forks[i % NofPlates] += 1;
    }
    if (FandS[i] == "S") {
      spoons[i % NofPlates] += 1;
    }
  }
  return [forks.join(""), spoons.join("")];
};

const all = checking(
  new Array(NofPlates).fill(0),
  new Array(NofPlates).fill(0)
).join("");
if (all.includes("2") || all.includes("0")) {
  console.log("NO");
} else {
  console.log("YES");
}
