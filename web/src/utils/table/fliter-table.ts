export const filterArray = (list: string[]) => {
  const array: { text: string; value: string }[] = Array.from(
    new Set(list)
  ).map((item) => {
    return { text: item, value: item };
  });

  return array;
};
