export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGOUT_SUCCESS = "FETCH_LOGOUT_SUCCESS";

export const doLogin = (data) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: data,
  };
};
export const doLogout = () => {
  return {
    type: FETCH_LOGOUT_SUCCESS,
  };
};
