export const removeDuplciates = (list: number[]) => {
  const cache: { [key: string]: number } = {};
  const result: number[] = [];

  list.forEach((item) => {
    if (cache[`number-${item}`]) {
      return;
    } else {
      cache[`number-${item}`] = item;
      result.push(item);
    }
  });

  return result;
};
