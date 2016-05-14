function lifesMeaning() {
// console.log("Code monkey");
// var is42 = "Code like a champion!"
  var not42 = ["It's a mystery...", "Life is but a dream", "I like Cookies and milk", "Yo mama's got a glass eye with a phish in it.", "Yo mama's got a peg leg with a kick stand"];
if (arguments[0] === 42) {
  console.log( "Code like a champion");
} else {
  // console.log("It's a mystery...")
  console.log( not42[(Math.floor(Math.random() * (not42.length)))]);
}
}
 // else {

//
// lifesMeaning(42);
lifesMeaning(42);
