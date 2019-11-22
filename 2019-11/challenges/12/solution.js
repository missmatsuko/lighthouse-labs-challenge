const checkAir = function (samples, threshold) {
  const dirtySamples = samples.filter(sample => {
    return sample === 'dirty';
  });

  sampleResults = dirtySamples.length / samples.length;

  return sampleResults > threshold ? 'Polluted' : 'Clean';
}
