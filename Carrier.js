class Carrier {
    constructor(x, y, width, height, angle) {
        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});
        this.width = width;
        Matter.Body.setAngle(this.body, angle);
        this.height = height;
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill(0);
        rect(0, 0, this.width, this.height);
        pop();
    }   
}