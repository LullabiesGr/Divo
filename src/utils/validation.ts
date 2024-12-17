interface PasswordStrength {
  score: number;
  feedback: string;
}

export const validatePassword = (password: string): PasswordStrength => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  let score = 0;
  let feedback = '';

  if (password.length >= minLength) score++;
  if (hasUpperCase) score++;
  if (hasLowerCase) score++;
  if (hasNumbers) score++;
  if (hasSpecialChar) score++;

  if (score < 3) {
    feedback = 'Password should include uppercase, lowercase, numbers, and special characters';
  } else if (score < 4) {
    feedback = 'Good password, but could be stronger';
  } else {
    feedback = 'Strong password!';
  }

  return { score, feedback };
};