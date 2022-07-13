import create from 'zustand';
import produce from 'immer';
import { IAuthStore, IState } from './interfaces';
import { login } from './services';

const initialState: IState = {
  isAuthenticated: false,
  loading: false,
  username: 'B13',
};

export const useAuthStore = create<IAuthStore>((set, get) => ({
  state: initialState,
  actions: {
    login: async (registerNumber, password) => {
      set(
        produce(({ state }: IAuthStore) => {
          state.loading = true;
        }),
      );

      const data = await login(registerNumber, password);

      if (data) {
        set(
          produce(({ state }: IAuthStore) => {
            state.isAuthenticated = true;
            state.loading = false;
          }),
        );
      }
    },
    logout: () => {},
    resetState: () => {},
  },
}));
