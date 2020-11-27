class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY

        var options={
            bodyA:body1,
            bodyB:body2,
            length:300,
            stiffness:0.08,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        
        World.add(world,this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        strokeWeight(2);
        stroke(0);
        var string1x = posA.x;
        var string1y = posA.y;
        var string2x = posB.x+this.offsetX;
        var string2y = posB.y+this.offsetY;

        line(string1x,string1y,string2x,string2y);
    }

}