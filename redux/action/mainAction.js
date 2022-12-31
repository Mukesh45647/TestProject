export const ADD_NEW_FUEL_SUCCESS = 'ADD_NEW_FUEL_SUCCESS';
export const ADD_NEW_FUEL_FAIL = 'ADD_NEW_FUEL_FAIL';

// export const NewFuelTypeByUser = data => {
//     var result = [];
//     return async dispatch => {
//       await axios
//         .post(`${BASE_URL}/profile/NewFuelTypeByUser`, data)
//         .then(function (response) {
//           result = response.data;
//           if (result.success) {
//             dispatch({
//               type: ADD_NEW_FUEL_SUCCESS,
//               payload: response.data,
//             });
//           } else {
//             dispatch({
//               type: ADD_NEW_FUEL_FAIL,
//               payload: response.data.status,
//             });
//           }
//         })
//         .catch(function (error) {
//           console.log(error);
//           result = {
//             success: false,
//             message: error.message,
//           };
//         });

//       return result;
//     };
//   };
