class Plinko{

 constructor(x,y){

  var option = {

  restitution : 0.4

  }

  this.body = Bodies.Circle(x,y,this.radius,option)
  this.radius = 10;
  World.add(world,this.body);
 
 }

display(){

var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
fill("white");
ellipseMode(RADIUS);
ellipse(pos.x,pos.y,10,10);
pop();

}

}