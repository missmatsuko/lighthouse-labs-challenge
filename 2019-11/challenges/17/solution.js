const judgeVegetable = (vegetables, metric) => {
  return vegetables.reduce((contender, vegetable) => {
    if (!contender || contender[metric] < vegetable[metric]) {
      contender = vegetable;
    }

    return contender;
  }, null).submitter;
}
