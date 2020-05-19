class Hexagon{
    constructor() {
        this.body = Bodies.rectangle(100, 300, 20, 20);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        //translate(pos.x, pos.y);
        //rotate(this.body.angle);
        
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        //console.log(pos.y);
        pop();
    }
}