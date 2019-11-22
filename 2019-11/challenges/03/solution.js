const castVote = (name, votes) => {
  const keyedVotes = {
    Tim: votes[0],
    Sally: votes[1],
    Beth: votes[2],
  };

  keyedVotes[name]++;

  return Object.values(keyedVotes);
}
