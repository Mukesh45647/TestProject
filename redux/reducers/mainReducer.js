import {GET_COUNTRY_CODE_SUCCES,  GET_COUNTRYCODE_FAIL, SET_SELECTED_LIST_SUCCESS, SET_SELECTED_ITEM_SUCCESS} from '../action/mainAction';

const initialState = {
  CountryList: [],
  error: {}, 
  selectedList: [], 
  selectedItem: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY_CODE_SUCCES:
      return {
        ...state,
        CountryList: action.payload,
      };
    case GET_COUNTRYCODE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
      case SET_SELECTED_LIST_SUCCESS:
        return{
          ...state, 
          selectedList: action.payload
        }
        case SET_SELECTED_ITEM_SUCCESS:
          console.log('1222--> ',action.payload )
        return{
          ...state, 
          selectedItem: action.payload
        }
  }

  return state;
}
