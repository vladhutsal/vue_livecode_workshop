export type optionalStr = string | undefined;

interface IUserData {
  description: string;
  public_msg: string;
  timestamp?: number;
}

export interface IUser {
  name: string;
  data: IUserData;
}
