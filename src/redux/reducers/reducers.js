const initialState = {
  user: {
    name: "",
    email: "",
  },
  cartProduct: [],
  isMenuOpen: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export const reducers = (state = initialState, action) => {
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
      case "LOGOUT": {
        return {
          ...initialState,
        };
      }
      case "ADDORDERS": {
        const { _id, title, price, name, color, img } = action.payload;
        const newProduct = {
          id: _id,
          title,
          price,
          name,
          color,
          quantity: 1,
          img,
        };
        let existedProduct, index;
        let cartProduct = [...state.cartProduct];

        if (state.cartProduct) {
          const isAny = state.cartProduct.find((pd) => pd.id === _id);
          if (isAny) {
            index = cartProduct.indexOf(isAny);

            existedProduct = {
              ...newProduct,
              quantity: isAny.quantity + 1,
            };

            cartProduct.splice(index, 1, existedProduct);
          } else {
            cartProduct = [...cartProduct, newProduct];
          }
        } else {
          cartProduct = [newProduct];
        }

        return {
          ...state,
          cartProduct,
        };
      }
      case "TOGGLEMENU": {
        if (state.isMenuOpen === true) {
          return {
            ...state,
            isMenuOpen: false,
          };
        } else {
          return {
            ...state,
            isMenuOpen: true,
          };
        }
      }
      default:
        return state;
    }
  }
  return action;
};
