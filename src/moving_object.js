import Util from './util';

function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    // this.game = options.game;
}

const mo = new MovingObject({
    pos: [30,30],
    vel: [10,10],
    radius: 5,
    color: "#00ff00"
})

MovingObject.prototype.draw = function draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,2* Math.PI, true
    );
    ctx.fill();
};

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
MovingObject.prototype.move = function move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
        offsetX = this.vel[0] * velocityScale
        offsetY = this.vel[1] * velocityScale

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY]

}

export default MovingObject;

