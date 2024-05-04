export declare type LoginCredentials = {
  clientId: string;
  clientSecret: string;
  grantType: string;
  email: string;
  password: string;
};

export declare type LoginResponse = {
  tokenType: string;
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
};
