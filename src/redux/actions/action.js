export const login = (content) => ({
  type: "LOGIN",
  payload: content,
});
export const logout = () => ({
  type: "LOGOUT",
  payload: {},
});
export const orders = (content) => ({
  type: "ADD_ORDERS",
  payload: content,
});
export const toggleMenu = () => ({
  type: "TOGGLE_MENU",
  payload: {},
});
export const removeProduct = (content) => ({
  type: "REMOVE_PRODUCT",
  payload: content,
});
export const addFavorite = (content) => ({
  type: "ADD_FAVORITE",
  payload: content,
});
