import { AuthRequestInstance } from "../../Axios/auth";
const SET_USER_DATA = "auth/SET_USER_DATA";
const REMOVE_USER_DATA = "auth/REMOVE_USER_DATA";
const initialState = {
  isAuth: false,
  name: "",
  email: "",
  birthday: null,
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
    case REMOVE_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
const setAuthUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});
const removeAuthUserData = (payload) => ({
  type: REMOVE_USER_DATA,
  payload,
});
const getAuthUserData = () => async (dispatch) => {
  const response = await AuthRequestInstance.me();
  if (response.statusCode === 200) {
    const { lastName, firstName, email, birthday } = response.userInfo;
    const payload = {
      name: `${lastName} ${firstName}`,
      email,
      birthday,
      isAuth: true,
    };
    dispatch(setAuthUserData(payload));
  }
};
export const login = (authInfo) => async (dispatch) => {
  const response = await AuthRequestInstance.login(authInfo);
  if (response.statusCode === 200) {
    localStorage.setItem("token", response.accessToken);
    dispatch(getAuthUserData());
  }
};

export const logout = () => (dispatch) => {
  console.log("Dispatch : ", dispatch);
  localStorage.removeItem("token");
  return dispatch(
    removeAuthUserData({
      isAuth: false,
      name: false,
      email: false,
      birthday: null,
    })
  );
};
