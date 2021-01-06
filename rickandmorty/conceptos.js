const sumar = async (n1, n2) => {
  const result = await (n1 + n2); // espera hasta que el resultado se resuelva
  return result;
};
