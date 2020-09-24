export const isEmpty = (value: any) => {
  return (
    value === false ||
    value === undefined ||
    value === 'undefined' ||
    value === null ||
    value === 0 ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};

export const checkNumberInput = (e: any) => {
  const { keyCode } = e;

  if (
    (keyCode >= 48 && keyCode <= 57) ||
    (keyCode >= 96 && keyCode <= 105) ||
    keyCode === 8 ||
    keyCode === 9 ||
    keyCode === 37 ||
    keyCode === 39 ||
    keyCode === 46 ||
    keyCode === 190
  ) {
    return;
  }
  return e.preventDefault();
};
