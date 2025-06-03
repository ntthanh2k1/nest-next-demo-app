import * as bcrypt from 'bcrypt';

const saltRounds = 10;

const hashPassword = async (password: string): Promise<string | undefined> => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error(error);
  }
};

export { hashPassword };
