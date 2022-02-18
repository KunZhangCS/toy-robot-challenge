const Table = require('./table');
const Robot = require('./robot');

let x = new Table();
let y = new Robot(4, 4, 'NORTH', x.xAxis, x.yAxis);

