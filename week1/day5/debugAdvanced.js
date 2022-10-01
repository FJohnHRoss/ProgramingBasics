function greeting() {
  return "Hello World";
}
var word = greeting();
word = Object.assign([], word); // this translates a sting into a array that is letter by letter.
console.log(word)

