class Particles{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.4
            
        }
   
        this.r=15
        this.body=Bodies.circle(x,y,this.r/2,options)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke()
        fill(this.color);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
    




}