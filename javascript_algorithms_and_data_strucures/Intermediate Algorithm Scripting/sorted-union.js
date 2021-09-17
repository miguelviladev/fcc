function uniteUnique() {
  //Definir o array completo
  let sumArr = [];
  let finalArr = [];
  Object.values(arguments).map(arr => arr.map(elm => sumArr.push(elm)));
  //Processar as ocorrências
  for (let i = 0; i < sumArr.length; i++) {
    if (!finalArr.includes(sumArr[i])) {
      finalArr.push(sumArr[i]);
    }
  }
  return finalArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));