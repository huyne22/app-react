import {
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGOUT_SUCCESS,
} from "../action/userAction";
const initialState = {
  account: {
    access_token: null,
    refresh_token: null,
    email: null,
  },
  isAuth: false,
  language: "vi",
};
const userReducer = (state = initialState, acction) => {
  switch (acction.type) {
    case FETCH_LOGIN_SUCCESS:
      // console.log("check acction", acction);
      // console.log("check acction", acction?.payload?.data[0].TenDangNhap);
      return {
        ...state,
        account: {
          access_token: acction?.payload?.token?.access_token,
          refresh_token: acction?.payload?.token?.refresh_token,
          email: acction?.payload?.data[0]?.TenDangNhap,
        },
        isAuth: true,
        language: "vi",
      };
    case FETCH_LOGOUT_SUCCESS:
      return {
        ...state,
        account: {
          access_token: null,
          refresh_token: null,
          email: null,
        },
        isAuth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
