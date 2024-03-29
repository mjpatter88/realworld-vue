export interface UserSubmit {
  email: string;
  password: string;
}

export interface UserResponse {
  user: User;
}

export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image?: null;
}
