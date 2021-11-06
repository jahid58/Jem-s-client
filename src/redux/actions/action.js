export const login = (content) => ({
  type: "LOGIN",
  payload: content,
});
export const logout = () => ({
  type: "LOGOUT",
  payload: {},
});
export const orders = (content) => ({
  type: "ADDORDERS",
  payload: content,
});
