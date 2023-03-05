const Application = PIXI.Application;

const app = new Application({
    width: 800,
    height: 800,
    antialias: true,
    transparent: false,
});
document.body.appendChild(app.view);

app.renderer.backgroundColor = 0x061639;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.view.style.position = "absolute";
const Graphics = PIXI.Graphics;
const rectangle = new Graphics();
rectangle.beginFill(0x66CCFF)
.drawRect(200, 200, 100, 120)
.endFill();

// draw a circle
const circle = new Graphics();
circle.beginFill(0x66CCFF);
circle.drawCircle(0, 0, 32);
circle.endFill();

// position the circle sprite
// circle.x = 250;
// circle.y = 250;

app.stage.addChild(circle);
app.stage.addChild(rectangle);

app.stage.addChild(rectangle);