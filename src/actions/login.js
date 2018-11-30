export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export function login() {
  return {
    type: LOGIN
  }
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error
  }
}

const url = `http://demo4344141.mockable.io/login`;

export function loginRequest() {
  return (dispatch) => {
    dispatch(login());
    fetch(url, {
      method: 'POST'
    })
    .then((response) => {
      return response.json();
    }).then((data) => {
      dispatch(loginSuccess(data));
    }).catch((error) => {
      dispatch(loginFailed(error));
    })
  }
}