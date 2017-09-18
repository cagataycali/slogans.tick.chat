// Generated from https://www.shopify.com/tools/slogan-maker/
let slogans = []

let lenghtOfButtons = $('button').length

for (var i = 2; i < lenghtOfButtons; i++) {
  slogans.push($($('button')[i]).text().trim())
}

console.log(slogans);
