const termTopics = (interviews) => {
  return interviews.reduce((accumulator, currentValue) => {
    switch (currentValue) {
      case 'smart city':
        accumulator[0]++;
        break;
      case 'arts funding':
        accumulator[1]++;
        break;
      case 'transportation':
        accumulator[2]++;
        break;
    }
    return accumulator;
  }, [0, 0, 0]);
}
