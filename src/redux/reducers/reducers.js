const initialState = {
  user: {
    name: "",
    email: "",
    orders: [],
  },
};

const initialAction = {
  type: "",
  payload: { name: "", email: "", orders: [] },
};
// eslint-disable-next-line import/no-anonymous-default-export
export const addUser = (state = initialState, action = initialAction) => {
  if (action.type) {
    switch (action.type) {
      case "LOGIN": {
        const { name, email, orders } = action.payload;
        return {
          ...state.user,
          name,
          email,
          orders,
        };
      }
      case "LOGOUT": {
        return {
          ...initialState,
        };
      }
      case "ADDORDERS": {
        const { orders } = action.payload;
        return {
          ...state.user,
          orders,
        };
      }
      default:
        return state;
    }
  }
  return action;
};
