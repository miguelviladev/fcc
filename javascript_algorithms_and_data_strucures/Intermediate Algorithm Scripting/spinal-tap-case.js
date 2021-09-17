function spinalCase(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "-").split(/(?=[A-Z])/).join("-").replace(/--/g,"-").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));