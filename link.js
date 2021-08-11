class Link{
    constructor(bodyA, bodyB){
        var lastLink = bodyA.body.bodies.length-1;
        this.link = Matter.Constraint.create({
            bodyA: bodyA.bodyA.bodies[lastLink],
            bodyB: bodyB,
            length: -10,
            stiffness: 0.01
        });
        World.add(world,this.link);
    }
}