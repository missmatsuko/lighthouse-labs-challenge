const doorToDoor = (volunteers, neighbourhoods) => {
  const numVolunteers = volunteers.length;
const numNeighbourhoods = neighbourhoods.length;
return numNeighbourhoods / numVolunteers;
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
