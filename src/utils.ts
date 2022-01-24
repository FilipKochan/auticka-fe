export const classHandler = (
  baseClass: string,
  isActive?: boolean,
  isVisible?: boolean,
  isDisabled?: boolean
): string => {
  const resultClasses = [baseClass];
  resultClasses.push(isActive ? `${baseClass}--active` : '');
  resultClasses.push(isVisible ? `${baseClass}--visible` : '');
  resultClasses.push(isDisabled ? `${baseClass}--disabled` : '');
  return resultClasses.join(' ');
};

export const saveJWTToLocalStorage = (jwt: string) => {
  window.localStorage.setItem('jwt', jwt);
};

export const getJWTFromLocalStorage = () => {
  return window.localStorage.getItem('jwt');
};
