function MovingObject(hash) {
  this.pos = hash['pos']; //[30,30]
  this.vel = hash['vel']; //[10,10]
  this.radius = hash['radius'];
  this.color = hash['color'];
  this.game = hash['game'];
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0 , Math.PI * 2, true );
  ctx.fill();
}

MovingObject.prototype.move = function() {
  this.pos = this.game.wrap(this.pos);
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let xSq = Math.pow(this.pos[0] - otherObject.pos[0],2);
  let ySq = Math.pow(this.pos[1] - otherObject.pos[1],2);
  let distance = Math.sqrt(xSq + ySq);
  let radii_sum = this.radius + otherObject.radius;
  if (distance < radii_sum) {
    return true;
  }
  return false;
}

MovingObject.prototype.collideWith = function(otherObject) {
  this.game.remove(otherObject);
  this.game.remove(this);
}

module.exports = MovingObject;