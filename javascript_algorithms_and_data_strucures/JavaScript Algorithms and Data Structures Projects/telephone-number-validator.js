function telephoneCheck(str) {
  //Check if contains other caracters than [0-9], '(', ')', ' ', and '-'
  if (!/^[0-9-()\s]*$/g.test(str)) {
    return false;
  }
  //Check if there are unpaired '(' ')'
  if (!((str.match(/\(/g ) || "").length == (str.match(/\)/g) || "").length)) {
    return false;
  }
  //Check if the number starts with '-'
  if (/^-/.test(str)) {
    return false;
  }
  //Check if the number is wrapped around '(' ')'
  if (/^[()]/.test(str) && /[()]$/.test(str)) {
    return false;
  }
  //Check if it has all the numbers as well as the correct country code
  let phoneNumber = str.match(/[0-9]/g);
  if (phoneNumber.length === 11) {
    if (phoneNumber[0] != 1) {
      return false;
    }
  } else if (phoneNumber.length !== 10) {
    return false;
  }
  //Check if the numbers are grouped correctly
  if (phoneNumber.length !== 11) {
    if (str.replace("(","").split(/\W/g).map(group => {return !(group.split("").length < 3);}).some(elm => elm == false)){
      return false;
    };
  }
  return true;
}

console.log(telephoneCheck("(555)555-5555"));