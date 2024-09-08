export function useCheckString(str: string = "") {
  const chars = Array.from(str);
  const stringCount = str.length;
  const hasUppercase = chars.some((char) => /[A-Z]/.test(char));
  const hasLowercase = chars.some((char) => /[a-z]/.test(char));
  const hasNumeric = chars.some(
    (char) => !isNaN(parseInt(char)) && char !== " "
  );
  const hasSpecial = chars.some((char) => /[!@#$%^&*(),.?":{}|<>]/.test(char));

  return {
    hasUppercase,
    hasLowercase,
    hasNumeric,
    hasSpecial,
    stringCount,
  };
}
