export const classHandler = (
  baseClass: string,
  isActive?: boolean,
  isVisible?: boolean
): string => {
  const resultClasses = [baseClass];
  resultClasses.push(isActive ? `${baseClass}--active` : "");
  resultClasses.push(isVisible ? `${baseClass}--visible` : "");
  return resultClasses.join(" ");
};
