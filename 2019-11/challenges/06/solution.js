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
