class launcher{
    fly()
    {
        this.launcher.bodyA = null;
        this.launcher.bodyB = null;
    }
    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.bodyB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}