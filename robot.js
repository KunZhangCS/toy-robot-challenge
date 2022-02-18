class Robot {
    constructor(xPos, yPos, direction, xTable, yTable) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.direction = direction;
        this.xTable = xTable;
        this.yTable = yTable;
    }

    directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

    move() {
        switch (this.direction) {
            case this.directions[0]:
                if (this.yPos + 1 <= this.yTable) this.yPos++;
                break;
            case this.directions[1]:
                if (this.xPos + 1 <= this.xTable) this.xPos++;
                break;
            case this.directions[2]:
                if (this.yPos - 1 >= 0) this.yPos--;
                break;
            case this.directions[3]:
                if (this.xPos - 1 >= 0) this.xPos--;
                break;
        }
    }

    rotate(cmd) {
        let directionIndex = this.directions.indexOf(this.direction);

        switch (cmd) {
            case 'LEFT':
                directionIndex--;
                this.direction = directionIndex < 0 ? this.directions[this.directions.length - 1] : this.directions[directionIndex];
                break;
            case 'RIGHT':
                directionIndex++;
                this.direction = directionIndex < this.directions.length ? this.directions[directionIndex] : this.directions[0];
                break;
        }
    };

    report() {
        console.log(`${this.xPos}, ${this.yPos}, ${this.direction}`);
    }
}

module.exports = Robot;