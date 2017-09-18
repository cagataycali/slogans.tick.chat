const slogans = require('./slogans.json');

// https://stackoverflow.com/a/24137301/8542909
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function randomSlogan () {
  return slogans.random()
}

window.randomSlogan = randomSlogan
module.exports.randomSlogan = randomSlogan
