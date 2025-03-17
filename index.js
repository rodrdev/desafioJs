const apiResponse = {
  user: [{ name: "Bruno" }, { name: "Anderson" }, { name: "Filipe" }],
  machine: [{ name: "Silo" }, { name: "Sauna" }, { name: "Sense" }],
  challenge: [
    { name: "Weak RSA" },
    { name: "I know mag1k" },
    { name: "Tear Or Dear" },
  ],
  team: [{ name: "HTB 1" }, { name: "HTB 2" }, { name: "HTB 3" }],
  company: [{ name: "All Net" }, { name: "Tix" }, { name: "AT Telecom" }],
};

const input = "e";

function filterResults(data, query) {
  const categoryNames = {
    user: "Users",
    machine: "Machines",
    challenge: "Challenges",
    team: "Teams",
    company: "Companies",
  };

  return Object.entries(data)
    .map(([key, items]) => {
      const matches = items
        .map((item) => item.name)
        .filter((name) => name.toLowerCase().includes(query.toLowerCase()));

      return `- ${categoryNames[key]}:\n  ${
        matches.length ? matches.join("\n  ") : "[ ]"
      }`;
    })
    .join("\n");
}

console.log(filterResults(apiResponse, input));
