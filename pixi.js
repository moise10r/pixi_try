const Application = PIXI.Application;

const app = new Application({
    width: document.body.clientWidth,
    height: 900,
    antialias: true,
    transparent: false,
    resolution: 1
});

document.body.appendChild(app.view);