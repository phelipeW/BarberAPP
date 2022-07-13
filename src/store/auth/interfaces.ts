interface IState {
  loading: boolean;
  isAuthenticated: boolean;
  username: string;
}

interface IActions {
  login: (registerNumber: number, password: string) => void;
  logout: () => void;
  resetState: () => void;
}

interface IAuthResponse {
  username: string;
  email: string;
  token: string;
}

interface IAuthStore {
  state: IState;
  actions: IActions;
}

export { IState, IActions, IAuthResponse, IAuthStore };
