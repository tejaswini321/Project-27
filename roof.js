class Roof{
    constructor(){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(400,100,800,5,options);
        this.width = 500;
        this.height = 40;

        World.add(world,this.body);
    }
     display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill("grey");
        rect(pos.x,pos.y,this.width,this.height);
        
     }
}