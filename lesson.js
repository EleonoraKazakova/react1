function descendingOrder(n) {
  let result = [];
  const numArray = Array.from(String(n), Number);

  for (i = 0; i < numArray.length; i++) {
    let k = [...result, numArray[i]];

    for (j = 0; j < result.length; j++) {
      if (numArray[i] > result[j]) {
        k = [...result.slice(0, j), numArray[i], ...result.slice(j)];
        break;
      }
    }

    result = k;
  }

  return Number(result.join(""));
}
descendingOrder(12895);
