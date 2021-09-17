//“A” and “T” are always paired together, and “G” and “C” are always paired together.
function pairElement(str) {
  return str.split("").map(function(char) {
    if (char === "A") {
      return ["A", "T"];
    }
    if (char === "T") {
      return ["T", "A"];
    }
    if (char === "G") {
      return ["G", "C"];
    }
    if (char === "C") {
      return ["C", "G"];
    }
  });
}

console.log(pairElement("GCG"));