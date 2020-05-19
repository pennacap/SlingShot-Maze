class Block{
    constructor() {
        this.array = [0, 255];
        this.r = Math.round(random())
        this.g = Math.round(random())
        this.b = Math.round(random())
        this.body = Bodies.rectangle(random(5, 1595), random(0, 395), 10, 10);
        this.width = 10;
        this.height = 10;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        
        rectMode(CENTER);
        fill(this.array[this.r], this.array[this.g], this.array[this.b]);
        rect(0, 0, this.width, this.height);
        //console.log(pos.y);
        pop();
    }
}