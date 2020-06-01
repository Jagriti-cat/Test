//<script>
//let Engine = Matter.Engine,
//    Render = Matter.Render,
//    World = Matter.World,
//    Bodies = Matter.Bodies,
//    Composites = Matter.Composites;
//let engine = Engine.create();
//let render = Render.create({
//    element: document.body,
//    engine: engine
//});
//Engine.run(engine);
//Render.run(render);
 
//let ball=Bodies.circle(200, 10, 40);
//let floor=Bodies.trapezoid(340,300,500,100,.9,{isStatic: true});
//let myCar=Composites.car(390, 0, 100, 30, 40);
//let myCradle=Composites.newtonsCradle(600, 100, 5, 10, 160);
//World.add(engine.world, [ball,floor,myCar,myCradle]);
 
//let world = engine.world;
//let Mouse= Matter.Mouse;
//let MouseConstraint=Matter.MouseConstraint;
//let mouse = Mouse.create(render.canvas);
//let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
//World.add(world, mouseConstraint);
//let render.mouse = mouse;
//</script>
//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var b1, b2, b3,b4,b5,b6,bar;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

createCanvas(800, 700);
rectMode(CENTER);

let engine = Engine.create();
let render = Render.create({
    element: document.body,
    engine: engine
});
Engine.run(engine);
Render.run(render);
 
let ball=Bodies.circle(200, 10, 40);
let floor=Bodies.trapezoid(340,300,500,100,.9,{isStatic: true});
let myCar=Composites.car(390, 0, 100, 30, 40);
let myCradle=Composites.newtonsCradle(600, 100, 5, 10, 160);
World.add(engine.world, [ball,floor,myCar,myCradle]);
 
let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);
let render.mouse = mouse;


