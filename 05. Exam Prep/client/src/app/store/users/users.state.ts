export interface IUsersState {
  userRegistered: boolean,
  userAuthenticated: boolean,
  token: string,
  username: string
}

export const initilaState: IUsersState = {
  userRegistered: false,
  userAuthenticated: false,
  token: null,
  username: null
};
