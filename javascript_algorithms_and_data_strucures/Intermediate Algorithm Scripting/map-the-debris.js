function orbitalPeriod(arr) {
  const gm = 398600.4418;
  const r = 6367.4447;
  const pi = 3.141592653589793;
  return arr.map(body => {
    let h = body.avgAlt;
    let d = r + h;
    let t = Math.round(2 * pi * Math.sqrt(Math.pow(d, 3) / gm));
    return {name: body.name, orbitalPeriod: t};
  });
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));