const Table = require('./src/table');
const Robot = require('./src/robot');
const fs = require('fs');

let table = new Table();
let robot = new Robot();
let fileName = `./testData/test1.txt`;

getData(fileName);

function getData(fileName) {
  let cmds = fs.readFileSync(fileName, 'utf8').split('\n');
  processData(cmds);
}

function processData(cmds) {
  let data = cmds.map(x => x.toUpperCase().trim());

  // Check first cmd
  cmd1 = data[0].split(' ').map(x => x.replace(',', ''));
  if (cmd1[0] === 'PLACE') {
    placeCmd(cmd1);
  } else {
    return;
  }

  // run the rest of cmds
  for (let i = 1; i < data.length; i++) {
    switch (data[i]) {
      case 'MOVE':
        robot.move();
        break;
      case "LEFT":
        robot.rotate("LEFT");
        break;
      case 'RIGHT':
        robot.rotate('RIGHT');
        break;
      case "REPORT":
        robot.report();
        break;
    }
  }
}

function placeCmd(data) {
  //check whether first cmd has 4 elements
  if (data.length != 4) return;

  // Accept numbers other than integer
  let x = parseInt(data[1]);
  let y = parseInt(data[2]);
  let isDirection = robot.directions.includes(data[3]);

  if (x <= table.xAxis && y <= table.yAxis && isDirection) {
    robot.place(x, y, data[3], table.xAxis, table.yAxis);
  } else {
    return;
  }
}

