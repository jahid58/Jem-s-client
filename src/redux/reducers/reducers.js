const initialState = {
  user: { name: "", email: "" },
};

const initialAction = {
  type: "",
};
// eslint-disable-next-line import/no-anonymous-default-export
export const addUser = (state = initialState, action = initialAction) => {
  if (action.type) {
    switch (action.type) {
      case "LOGIN": {
        const { name, email } = action.payload;
        return {
          ...state.user,
          name,
          email,
        };
      }
      default:
        return state.user;
    }
  }
  return action;
};
