function Ant(x, y, world) {
    console.log(x, y);
    this.worldIndex = createVector(x, y);
    this.blockIn = world[this.worldIndex.x][this.worldIndex.y];
    this.world = world;


    this.show = function() {
        fill(255, 0, 0);
        noStroke();

        ellipse(this.blockIn.pos.x + (this.blockIn.w / 2), this.blockIn.pos.y + (this.blockIn.h / 2), 3, 3);
    }

}
