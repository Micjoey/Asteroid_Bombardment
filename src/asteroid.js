const MovingObject = require("./moving_object");
const Util = require("./util");

const DEFAULTS = {
    COLOR: "#505050",
    RADIUS: 25, 
    SPEED: 4
    
};

function Asteroid(options) {
    options = options || {};
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = DEFAULTS.RADIUS;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    debugger
    // MovingObject.call(this, options);
}


module.exports = Asteroid

