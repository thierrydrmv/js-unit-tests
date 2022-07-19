const average = (myArray) => {
  let valor = 0;
  if (myArray.length === 0) { return undefined; }
  for (let i = 0; i < myArray.length; i += 1) {
    valor += myArray[i];
    if (typeof myArray[i] !== 'number') {
      return undefined;
    }
  }
  let resultado = Math.round(valor / myArray.length);
  return resultado;
};

module.exports = average;
