const text_truncate = (str, length = 100, ending = "...") => {
  return `${str.slice(0, length - 3)} ${ending}`;
};

console.log(text_truncate("We are doing JS string exercises.", 19));
