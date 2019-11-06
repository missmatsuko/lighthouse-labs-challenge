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

const chooseStations = (stations) => {
  return stations
    .filter(station => {
      const capacity = station[1];
      const type = station[2];

      return capacity >=20 && ['school', 'community centre'].includes(type);
    })
    .map(station => station[0])
  ;
}

const voterTurnout = (voter_signatures, voter_ids) => {
  const sameLength = voter_signatures.length === voter_ids.length;

  if (!sameLength) {
    return false;
  }

  const sameItems = voter_signatures.every((signature, index) => {
    return signature === voter_ids[index];
  });

  return sameItems ? 'All clear, we can count the votes!' : 'FRAUD!';
}
