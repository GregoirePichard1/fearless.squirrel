function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second
    console.log("RotateAngle: " + rotateAngle)
    console.log("moveDistance: " + moveDistance)
    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    //For the ennemy
    ennemy1.accelerate(1);
    
    if (ennemy1.position.x > 100)
    {
        for (let i = 0; i < 50; i++)
        {
            ennemy1.decelerate(1);
            ennemy1.move();   
        }
        
    }
    player1.move();
    ennemy1.move();
    controls.update();
}