function add(x) {
  return function(y) {
    return function(z) {
      return x + y +z;
    }
  }
}
console.log(add(10)(20)(30));

var adicionar = add(10)(10)
console.log(adicionar(10));