const poll = new Map();
const addOption = option => {
  if (option === "") return "Option cannot be empty.";
  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
  return `Option "${option}" already exists.`;
}
console.log(addOption("SI"));
console.log(addOption("NO"));
console.log(addOption("NS/NC"));

const vote = (option, voterId) => {
  if (!poll.has(option)) return `Option "${option}" does not exist.`;
  
  const voters = poll.get(option);
  if (voters.has(voterId)) return `Voter ${voterId} has already voted for "${option}".`;

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`
  
}
console.log(vote("SI", 345));
console.log(vote("SI", 678));
console.log(vote("NO", 578));
console.log(vote("SI", 578));
console.log(vote("NO", 578));

const displayResults = () => {
  let results = "Poll Results:";

  poll.forEach((value, key) => {
    results += `\n${key}: ${value.size} votes`;
  });
  return results;
}
console.log(displayResults());

