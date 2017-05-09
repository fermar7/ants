function Block(x, y, w, h) {
    this.pos = createVector(x, y);
    this.w = w;
    this.h = h;

    this.isStone = false;

    this.show = function() {
        if(this.isStone) {
            fill(51)
            //stroke(51);
        } else {
            fill(89, 55, 12)
            //stroke(89, 55, 12);
        }
        stroke(255);
        strokeWeight(0.1);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }

    this.generate = function(blocks, x, y, startValue) {
        var value = startValue;

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
