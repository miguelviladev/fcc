function whatIsInAName(collection, source) {
  let srcProp = Object.keys(source);
  return collection.filter(object => {
    for (let i = 0; i < srcProp.length; i++) {
      if (!object.hasOwnProperty(srcProp[i]) || object[srcProp[i]] !== source[srcProp[i]]) {
        return false;
      }
    }
    return true;
  });
}

let mainArr = [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }];
console.log(whatIsInAName(mainArr, { "apple": 1, "cookie": 2 }));