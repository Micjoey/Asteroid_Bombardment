


const Util = {
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length)
    },

    scale(vec,m) {
        return [vec[0] * m, vec[1] * m];
    },

    inherits: function inherits(childClass, parentClass){
        childClass.prototype = Object.create(parentClass.prototype);
        childClass.prototype.constructor = childClass;
    },
}

module.exports = Util