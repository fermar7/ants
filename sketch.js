blocks = [];
var ant = null;

function setup() {
    createCanvas(700, 500)
    frameRate(3);

    var maxH = height / 2;
    for(x = 0; x <= width; x += 5) {
        var col = [];
        for(y = maxH; y <= height; y += 5) {
            col.push(new Block(x, y, 5, 5));
        }
        blocks.push(col);
    }

    for(x = 0; x < blocks.length; x++) {
        for(y = 0; y < blocks[x].length; y++) {
            blocks[x][y].generate(blocks, x, y, 0.006);
        }
    }

    for(x = 0; x < blocks.length; x++) {
        for(y = 0; y < blocks[x].length; y++) {
            blocks[x][y].generate(blocks, x, y, 0);
        }
    }
    ant = new Ant(round(random(blocks.length)), round(random(random(blocks[0].length))), blocks);

}

function draw() {
    background(79, 146, 255)

    for(x = 0; x < blocks.length; x++) {
        for(y = 0; y < blocks[x].length; y++) {
            blocks[x][y].show();
        }
    }

    ant.show();
}
