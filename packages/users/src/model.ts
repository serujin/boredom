export type User = {
  id: string;
} & UserData;

export type UserData = {
  email: string;
  password: string;
};
