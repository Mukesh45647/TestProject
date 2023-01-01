export const GET_COUNTRY_CODE_SUCCES = 'GET_COUNTRY_CODE_SUCCES';
export const GET_COUNTRYCODE_FAIL = 'GET_COUNTRYCODE_FAIL';
export const SET_SELECTED_ITEM_SUCCESS = 'SET_SELECTED_ITEM_SUCCESS'
export const SET_SELECTED_ITEM_FAIL = 'SET_SELECTED_ITEM_FAIL'
export const SET_SELECTED_LIST_SUCCESS = 'SET_SELECTED_LIST_SUCCESS'
export const SET_SELECTED_LIST_FAIL = 'SET_SELECTED_ITEM_FAIL'


const BASE_URL = 'https://vipankumar.com/SmartHealth/api/'

export const getCountries = () => {
    // console.log("32523523552353",token)
    var result = [];
    return async dispatch => {
        const res = await fetch(`${BASE_URL}/getCountries`, {
            method: "GET",
        })
        let response = await res.json();
        if (response.status) {
            dispatch({
                type: GET_COUNTRY_CODE_SUCCES,
                payload: response.data
            });
        } 
        else {
            dispatch({
                type: GET_COUNTRYCODE_FAIL,
                payload: response.data.status
            });
        }
        return response;
    }
}


export const setSelectedItem = data => {
    var result = {};
    return async dispatch => {
        dispatch({
            type: SET_SELECTED_ITEM_SUCCESS,
            payload: data,
          });
      return result;
    };
  };
  

  export const setSelectedList = data => {
    var result = [];
    return async dispatch => {
        dispatch({
            type: SET_SELECTED_LIST_SUCCESS,
            payload: data,
          });
      return result;
    };
  };

