const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  const price = 1 + distanceTraveled * 0.25 + (numberOfPeople >=30 ? 0.25 : 0);
  return `\$${price.toFixed(2)}`;
}
