import { TOGGLE_THEME } from '../actions/ThemeActions';

interface ThemeState {
  value: boolean;
}

type ThemeAction = {
  type: string;
};

const initialState: ThemeState = {
  value: true,
};

const ThemeReducer = (state: ThemeState = initialState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, value: !state.value };
    default:
      return state;
  }
};

export default ThemeReducer;
