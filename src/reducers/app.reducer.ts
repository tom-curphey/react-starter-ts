import { IAppContext } from '../contexts/App.context';

export const appReducer = (
  state: IAppContext,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case 'SET_CURRENT_CARD':
      return { ...state, appWidth: action.payload };
    default:
      return state;
  }
};
