function urlSlug(title) {
  //return title.trim().toLowerCase().split(" ").join("-");
  return title.toLowerCase().split(" ").filter(word => word !== "").join("-");
}

console.log(urlSlug(" Winter Is  Coming"));