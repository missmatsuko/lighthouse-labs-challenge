const voter_signatures = [
  'Bill Billiamson',
  'Kate Etak',
  'Simon Simonson',
  'Brandon Brandonus',
  'Jane Janesford'
]

const voter_ids = [
  'Bill Billiamson',
  'Kate Etak',
  'Simon Simonson',
  'Brandon Brandonus',
  'Jane Janesford'
]

const result = voterTurnout(voter_signatures, voter_ids)

assert.equal(result, 'All clear, we can count the votes!')
