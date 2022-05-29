let dimension = Number(prompt("insert dimention:"));
let tableList = new Array(dimension);
for (let i = 0; i < dimension; i++) {
  tableList[i] = prompt("add");
}
nOfO = Number(prompt("insert Order number"));

const swapList = (list) => {
  for (i = 0; i < (dimension - (dimension % 2)) / 2; i++) {
    [list[i], list[dimension - 1 - i]] = [list[dimension - 1 - i], list[i]];
  }
  return list;
};

const ninetySwap = (list) => {
  const temporaryRow = new Array(dimension);
  const temporaryArray = new Array(dimension);
  for (let j = 0; j < dimension; j++) {
    for (let i = 0; i < dimension; i++) {
      temporaryRow[i] = list[dimension - 1 - i][j];
    }
    temporaryArray[j] = temporaryRow.join("");
  }
  return temporaryArray;
};

for (let i = 0; i < nOfO; i++) {
  order = prompt("insert order");
  if (order == "H") {
    tableList = swapList(tableList);
  } else if (order == "V") {
    for (let i = 0; i < dimension; i++) {
      tableList[i] = swapList(tableList[i].split("")).join("");
    }
  } else if (order == "90") {
    tableList = ninetySwap(tableList);
  }
}
console.log(tableList);
