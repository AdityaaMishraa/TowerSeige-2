class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            density:0.5

        }
      
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255
        World.add(world, this.body);
      }
      display(){
        // console.log(this.body.speed)
        if(this.body.speed>8){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          World.remove(world, this.body);
          translate(pos.x, pos.y);
          rotate(angle);
          this.Visiblity = this.Visiblity - 10;
          tint(255,this.Visiblity)
          rectMode(CENTER);
          rect(this.body.position.x,this.body.position.y,this.width, this.height);
          pop();
        } else{
          rectMode(CENTER);
          rect(this.body.position.x,this.body.position.y,this.width, this.height);
           }
          }
}