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
