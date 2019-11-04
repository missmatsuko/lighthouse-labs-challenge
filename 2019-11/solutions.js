const doorToDoor = (volunteers, neighbourhoods) => {
  return neighbourhoods.length / volunteers.length;
}

const interviewAnswer = (topic) => {
  switch(topic) {
    case 'arts funding':
      return "We'll have to get creative!"
      break;
    case 'economy':
      return "Time is money."
      break;
    case 'transportation':
      return "It's going to be a long road, so we better get moving."
      break;
    default:
      return "QUACK!";
  }
}

const castVote = (name, votes) => {
  const keyedVotes = {
    Tim: votes[0],
    Sally: votes[1],
    Beth: votes[2],
  };

  keyedVotes[name]++;

  return Object.values(keyedVotes);
}

const registerToVote = (name, unregisteredVoters) => {
  return unregisteredVoters.filter(voter => voter !== name);
}
