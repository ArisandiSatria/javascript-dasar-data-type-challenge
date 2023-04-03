const firstNameOnly = (string) => {
  return `${string.split(" ")[0]} ${string
    .split(" ")
    [string.split(" ").length - 1].charAt(0)}.`;
};

console.log(firstNameOnly("David Winalda"));
