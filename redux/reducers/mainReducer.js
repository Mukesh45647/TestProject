import {ADD_NEW_FUEL_SUCCESS, ADD_NEW_FUEL_FAIL} from '../action/mainAction';

const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_FUEL_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_NEW_FUEL_FAIL:
      return {
        ...state,
        error: action.payload,
      };
  }

  return state;
}
