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
