class Division{

constructor(x,y,width,height){

option = {

isStatic : true

}

this.body = Bodies.Rectangle(x,y,width,height,option);
this.width = width;
this.height = height;
World.add(world,this.body)

}

display(){

var pos = this.body.position

rectMode(CENTER);
fill("white");
rect(pos.x,pos.y,this.width,this,height)

}


}