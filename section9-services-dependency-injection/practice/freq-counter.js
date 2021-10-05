function sameFrequency(num1, num2) {
  const str1 = `${num1}`;
  const str2 = `${num2}`;
  const n1 = str1.split("");
  const n2 = str2.split("");
  if (n1.length !== n2.length) return false;
  const freq1 = {};
  const freq2 = {};

  for (const i of n1) {
    freq1[i] = freq1[i] ? (freq1[i] += 1) : 1;
  }
  for (const i of n2) {
    freq2[i] = freq2[i] ? (freq2[i] += 1) : 1;
  }

  const test = Object.keys(freq1);

  for (const num of test) {
    if (freq1[num] !== freq2[num]) {
      return false;
    }
  }

  return true;
}
