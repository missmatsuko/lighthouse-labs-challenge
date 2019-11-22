const finalPosition = (moves) => {
  return moves.reduce((position, direction) => {
    switch(direction) {
      case 'north':
        position[1]++;
        break;
      case 'south':
        position[1]--;
        break;
      case 'west':
        position[0]--;
        break;
      case 'east':
        position[0]++;
        break;
    }

    return position;
  }, [0,0]);
}
