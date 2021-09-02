import {NEWS, NEWSCOMPONENT, NOTIFFICATIONS, QRCODE, TOKEN} from './action';

const initialState = {
  token: '',
  qrCode: '',
  notiffications: '',
  news: '',
  newsComponent: '',
};

export default function appReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    // ------------------
    case TOKEN: {
      return {
        ...state,
        questions: payload,
      };
    }
    // ------------------
    case QRCODE: {
      return {
        ...state,
        qrCode: payload,
      };
    }
    // ------------------
    case NOTIFFICATIONS: {
      return {
        ...state,
        notiffications: payload,
      };
    }
    // ------------------
    case NEWS: {
      return {
        ...state,
        news: payload,
      };
    }
    // ------------------
    case NEWSCOMPONENT: {
      return {
        ...state,
        newsComponent: payload,
      };
    }
    // ------------------
    default: {
      return state;
    }
  }
}
