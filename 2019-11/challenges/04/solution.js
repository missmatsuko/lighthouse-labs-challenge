const registerToVote = (name, unregisteredVoters) => {
  return unregisteredVoters.filter(voter => voter !== name);
}
