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

const carPassing = (cars, speed) => {
  cars.push({
    time: Date.now(),
    speed,
  });
  return cars;
}

const whereCanIPark = (spots, vehicle) => {
  const allowedMarkers = ['R'];

  if (vehicle === 'small' || vehicle === 'motorcycle') {
    allowedMarkers.push('S');

    if (vehicle === 'motorcycle') {
      allowedMarkers.push('M');
    }
  }

  return spots.reduce((allowedSpot, row, rowIndex) => {
    if (allowedSpot === false) {
      // Try to find a spot
      const columnIndex = row.findIndex(marker => {
        return allowedMarkers.includes(marker);
      });

      if (columnIndex >= 0) {
        allowedSpot = [columnIndex, rowIndex];
      }
    }

    return allowedSpot;
  }, false);
}


const busTimes = buses => {
  return Object.entries(buses)
    .reduce((times, bus) => {
      const busKey = bus[0];
      const busValue = bus[1];
      times[busKey] = busValue.distance / busValue.speed;
      return times;
    }, {});
}

const checkAir = function (samples, threshold) {
  const dirtySamples = samples.filter(sample => {
    return sample === 'dirty';
  });

  sampleResults = dirtySamples.length / samples.length;

  return sampleResults > threshold ? 'Polluted' : 'Clean';
}

const lightsOn = function(lights) {
  return lights.map(light => {
    light.on = true;
    return light;
  });
}

const lightsOff = function(lights) {
  return lights.map(light => {
    light.on = false;
    return light;
  });
}

const toggleLights = function(lights, lightsAreOn) {
  return lights.map(light => {
    light.on = !light.on;
    return light;
  });
}

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  const price = 1 + distanceTraveled * 0.25 + (numberOfPeople >=30 ? 0.25 : 0);
  return `\$${price.toFixed(2)}`;
}

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

const judgeVegetable = (vegetables, metric) => {
  return vegetables.reduce((contender, vegetable) => {
    if (!contender || contender[metric] < vegetable[metric]) {
      contender = vegetable;
    }

    return contender;
  }, null).submitter;
}


const countTickets = (tickets) => {
  return tickets.reduce((count, ticket) => {
    return {
      ...count,
      [ticket]: count[ticket] + 1,
    };
  }, {
    red: 0,
    green: 0,
    blue: 0,
  });
}

const bestOdds = (tickets, raffleEntries) => {
  let bestOddsTicket = {};

  for (let [color, count] of Object.entries(countTickets(tickets))) {
    const odds = count / raffleEntries[color];
    if (!bestOddsTicket.odds || odds > bestOddsTicket.odds) {
      bestOddsTicket = {
        odds: odds,
        color: color,
      };
    }
  }

  return `You have the best odds of winning the ${bestOddsTicket.color} raffle.`
}

const pumpkinSpiceProducts = [
  {
    name: 'pie',
    price: 5,
    dose: 30,
  },
  {
    name: 'latte',
    price: 3,
    dose: 15,
  },
  {
    name: 'macaron',
    price: 1,
    dose: 3,
  },
];

const pumpkinSpice = money => {
  let remainingMoney = money;

  const servings = pumpkinSpiceProducts.map(pumpkinSpiceProduct => {
    const serving = Math.floor(remainingMoney / pumpkinSpiceProduct.price);
    remainingMoney = remainingMoney % pumpkinSpiceProduct.price;
    return serving;
  });

  return servings.concat([servings.reduce((totalDose, servingCount, servingIndex) => {
    return totalDose + pumpkinSpiceProducts[servingIndex].dose * servingCount;
  }, 0)]);
}

const sphereVolume = function (radius) {
  return 4 / 3 * PI * radius ** 3;
}

const coneVolume = function (radius, height) {
  return PI * radius ** 2 * height / 3;
}

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

const solidVolume = function(solid) {
  switch(solid.type) {
    case 'sphere':
      return sphereVolume(solid.radius);
    case 'cone':
      return coneVolume(solid.radius, solid.height);
    case 'prism':
      return prismVolume(solid.height, solid.width, solid.depth);
    default:
      return 0;
  }
}

const totalVolume = function (solids) {
  return solids.reduce((lastVolume, solid) => {
    return lastVolume + solidVolume(solid);
  }, 0);
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  return recipes.filter(recipe =>
    bakeryA.some(bakeryAIngredient => recipe.ingredients.includes(bakeryAIngredient)) &&
    bakeryB.some(bakeryBIngredient => recipe.ingredients.includes(bakeryBIngredient))
  )[0].name;
}
