import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  requestPassword: string,
  userPassword: string,
) => {
  return await bcrypt.compare(requestPassword, userPassword);
};
