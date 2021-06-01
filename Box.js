
  class Box {
    constructor(x,y,width,height){
       var options = {
       isStatic: false,
       friction: 0.5,
       density: 0.1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width = width
        this.height = height
    }
    display(){
        push ()
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angel)
        rectMode(CENTER)
        fill ("red")
        rect(0,0,this.width,this.height)
        pop ()
    }   
}