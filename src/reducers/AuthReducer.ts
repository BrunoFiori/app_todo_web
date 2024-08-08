import { LOGIN, REFRESH_TOKEN } from '../Actions/AuthActions';

interface loginUser {
  email: string | null;
  password: string | null;
}

const loginUserInitialState: loginUser = {
  email: null,
  password: null,
};

const initialState = {
  user: null,
  token: null,
};

const authReducer = (state = initialState, action: loginUser) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.user };
    case REFRESH_TOKEN:
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};

export default authReducer;
