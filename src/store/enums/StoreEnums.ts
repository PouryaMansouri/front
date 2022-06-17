enum Actions {
  ADD_CLASSNAME = "addClassName",
  VERIFY_AUTH = "verifyAuth",
  LOGIN = "login",
  LOGOUT = "logout",
  REGISTER = "register",
  UPDATE_USER = "updateUser",
  FORGOT_PASSWORD = "forgotPassword",
}

enum Mutations {
  SET_CLASSNAME_BY_POSITION = "appendBreadcrumb",
  PURGE_AUTH = "logOut",
  SET_AUTH = "setAuth",
  SET_USER = "setUser",
  SET_PASSWORD = "setPassword",
  SET_ERROR = "setError",
}

export { Actions, Mutations };
