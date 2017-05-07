blocks = [];

function setup() {
    createCanvas(700, 500)
    frameRate(2);
    var maxH = height / 2;
    for(x = 0; x <= width; x += 10) {
        var col = [];
        for(y = maxH; y <= height; y += 10) {
            col.push(new Block(x, y, 10, 10));
        }
        blocks.push(col);
    }

}

function draw() {
    background(79, 146, 255)

    for(x = 0; x < blocks.length; x += 1) {
        for(y = 0; y < blocks[x].length; y += 1) {
            blocks[x][y].generate(blocks, x, y);
        }
    }

    for(x = 0; x < blocks.length; x += 1) {
        for(y = 0; y < blocks[x].length; y += 1) {
            blocks[x][y].show();
            blocks[x][y].isStone = false;
        }
    }
}

function Block(x, y, w, h) {
    this.pos = createVector(x, y);
    this.w = w;
    this.h = h;

    this.isStone = false;

    this.show = function() {
        if(this.isStone) {
            fill(51)
            stroke(51);
        } else {
            fill(89, 55, 12)
            stroke(89, 55, 12);
        }
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }

    this.generate = function(blocks, x, y) {
        var value = 0.05;

        var n = blocks[x][y - 1];
        if(n && n.isStone) {
            value = 0.5;
        }
        n = blocks[x][y + 1];
        if(n && n.isStone) {
            value = 0.5;
        }
        n = (blocks[x - 1] ? blocks[x - 1] : blocks[x])[y];
        if(n && n.isStone) {
            value = 0.5;
        }
        n = (blocks[x + 1] ? blocks[x + 1] : blocks[x])[y];
        if(n && n.isStone) {
            value = 0.5;
        }


        if(random(1) < value) {
            this.isStone = true;
        }
    }
}
