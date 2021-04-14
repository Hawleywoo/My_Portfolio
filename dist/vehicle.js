function Vehicle(x,y){
    this.pos = createVector(random(width), random(height))
    this.target = createVector(x,y)
    this.vel = createVector()
    this.acc = createVector()
    this.r = 7
    this.maxSpeed = 10
    this.maxForce = 1;
}

Vehicle.prototype.behaviors = function(){
    let arrive = this.arrive(this.target)
    let mouse = createVector(mouseX, mouseY)
    let flee = this.flee(mouse)
    arrive.mult(1)
    flee.mult(5)
    this.applyForce(arrive)
    this.applyForce(flee)
}

Vehicle.prototype.applyForce = function(force){
    this.acc.add(force)
}

Vehicle.prototype.update = function(){
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.acc.mult(0)
}

Vehicle.prototype.show = function(){
    stroke(255)
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y)
}

Vehicle.prototype.arrive = function(){
    let desired = p5.Vector.sub(target, this.pos)
    let distance = desired.mag()
    let speed = this.maxSpeed

    if(distance  < 100){
        let speed = map(d, 0, 100, 0, this.maxSpeed)
    } 

    desired.setMag(this.maxSpeed)
    let steer = p5.Vector.sub(desired, this.vel)
    steer.limit(this.maxForce)
    return steer
}

Vehicle.prototype.flee = function(target){
    let desired = p5.Vector.sub(target, this.pos)
    let d = desired.mag()
    if(d < 50){
        desired.setMag(this.maxSpeed)
        desired.mult(-1)
        let steer = p5.Vector.sub(desired, this.vel)
        steer.limit(this.maxForce)
        return steer
    } else {
        return createVector(0,0)
    }
}