class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("walking_1.png")
      World.add(world, this.body);
    }
   display(){
         var pos = this.body.position;
         var angle = this.body.angle;

         push();
         translate(pos.x,pos.y);
         imageMode(CENTER)
         image(this.image,0,0,200,250)
         pop();
     }
}