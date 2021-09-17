function convertHTML(str) {
  let entities = {"&": "&amp;", "<" : "&lt;", ">" : "&gt;", "\"" : "&quot;", "'": "&apos;"};
  let arr = [];
  str.split("").map(char => {
    if (entities.hasOwnProperty(char)) {
      char = entities[char];
    }
    arr.push(char);
  });
  return arr.join("");
}

console.log(convertHTML("Dolce & Gabbana"));