class Table {
    constructor(xAxis = 5, yAxis = 5) {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    }

    isOnTable(x, y) {
        return x <= this.xAxis && y <= this.yAxis;
    }
}

module.exports = Table;