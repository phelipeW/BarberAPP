import { IAuthResponse } from './interfaces';

async function login(
  registerNumber: number,
  password: string,
): Promise<IAuthResponse> {
  return {
    username: 'admin',
    email: 'admin@example.com',
    token: 'JWT_TOKEN',
  };
}

export { login };
