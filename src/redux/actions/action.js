export const login = (content) => ({
  type: "LOGIN",
  payload: content,
});
export const logout = () => ({
  type: "LOGOUT",
  payload: {},
});
