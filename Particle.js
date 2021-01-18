class Particle{

    constructor(x,y){
   
     var option = {
   
     restitution : 0.4
   
     }
   
     this.body = Bodies.Circle(x,y,this.radius,option)
     this.radius = radius;
     this.color = color(random(0,255),random(0,255),random(0,255));
     World.add(world,this.body);
    
    }
   
   display(){
   
   var pos = this.body.position;
   var angle = this.body.angle;
   
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   fill(this.color);
   ellipseMode(RADIUS);
   ellipse(pos.x,pos.y,10,10);
   pop();
   
   }
   
   }