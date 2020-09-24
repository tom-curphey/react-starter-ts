import { createContext } from 'react';

export interface IAppContext {
  currentCard: string;
  dispatch: (type: any) => void;
}

export const initialAppState = {
  currentCard: '',
  dispatch: () => {},
};

export const AppContext = createContext<IAppContext>(initialAppState);
