const fs = require("fs");

function loadAndParseCSV(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const data = fileContent
    .trim()
    .split("\n")
    .map(line => line.trim().split(/\s+/).map(Number));

  return data;
}

const filePath = "./data.csv";
const data = loadAndParseCSV(filePath);

const firstColumn = data.map(row => row[0]).sort((a, b) => a - b);
const secondColumn = data.map(row => row[1]).sort((a, b) => a - b);

const sumOfDist = () => {
  return firstColumn.reduce((sum, value, index) => sum + Math.abs(value - secondColumn[index]), 0);
};

console.log("Tablica danych:", data);
console.log("Pierwsza kolumna:", firstColumn);
console.log("Druga kolumna:", secondColumn);
console.log("Suma odległości:", sumOfDist());
