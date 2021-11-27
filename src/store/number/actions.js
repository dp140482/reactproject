import { apiUrl } from "../../utils/constants";

export const REQUEST_NOD_LOADING = "NOD::REQUEST_LOADING";
export const REQUEST_NOD_FAILURE = "NOD::REQUEST_FAILURE";
export const REQUEST_NOD_SUCCESS = "NOD::REQUEST_SUCCESS";

export const getNODLoading = () => ({
  type: REQUEST_NOD_LOADING,
});
export const getNODSuccess = (recievedStruct) => ({
  type: REQUEST_NOD_SUCCESS,
  payload: recievedStruct,
});
export const getNODFailure = (err) => ({
  type: REQUEST_NOD_FAILURE,
  payload: err,
});

export const getNOD = () => async (dispatch) => {
  dispatch(getNODLoading());

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const result = await response.json();
    dispatch(getNODSuccess(result));
  } catch (err) {
    // console.warn(err);
    if (err.message === "Failed to fetch") {
      dispatch(getNODFailure("Ошибка соединения при запросе"));
    } else {
      dispatch(getNODFailure(err.message));
    }
  }
};