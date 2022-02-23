const initialState = {
  user: {
    name: "",
    email: "",
  },
  cartProduct: [],
  message: "",
  totalCount: {},
  favoriteProduct: [],
  isMenuOpen: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export const reducers = (state = initialState, action) => {
  if (action.type) {
    switch (action.type) {
      case "LOGIN": {
        const { name, email } = action.payload;
        const user = { name, email };
        return {
          ...state,
          user,
        };
      }
      case "LOGOUT": {
        return {
          ...initialState,
        };
      }

      //  Adding product  to the cart dropdown
      case "ADD_ORDERS": {
        const { _id, title, price, name, color, img } = action.payload;
        const newProduct = {
          _id: _id,
          title,
          price,
          name,
          color,
          quantity: 1,
          img,
        };
        let message;

        let cartProduct = [...state.cartProduct];

        if (state.cartProduct) {
          const isAny = state.cartProduct.find((pd) => pd._id === _id);

          if (isAny) {
            message = "Product already added";
          } else {
            cartProduct = [...cartProduct, newProduct];
            message = "Product added successfully";
          }
        } else {
          cartProduct = [newProduct];
          message = "Product added successfully";
        }
        // }
        let total = cartProduct?.reduce((total, pd) => pd.price, 0);
        const totalCount = {
          subTotal: total,
          tax: total * 2,
          total: total + total * 2,
        };
        return {
          ...state,
          cartProduct,
          totalCount,
          message,
        };
      }

      // Adding product to the favorite list
      case "ADD_FAVORITE": {
        const { _id, title, price, name, color, img } = action.payload;
        const newProduct = {
          _id: _id,
          title,
          price,
          name,
          color,
          quantity: 1,
          img,
        };
        let message;

        let favoriteProduct = [...state.favoriteProduct];

        if (state.favoriteProduct) {
          const isAny = state.favoriteProduct.find((pd) => pd._id === _id);

          if (isAny) {
            message = "Product already added to the favorite list";
          } else {
            favoriteProduct = [...state.favoriteProduct, newProduct];
          }
        } else {
          favoriteProduct = [newProduct];
          message = "Product added successfully to the favorite list";
        }

        return {
          ...state,
          favoriteProduct,

          message,
        };
      }
      case "TOGGLE_MENU": {
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
      case "REMOVE_PRODUCT": {
        let cartProduct = [...state.cartProduct];
        const id = action.payload;
        const target = cartProduct.find((pd) => pd._id === id);
        const index = cartProduct.indexOf(target);

        if (index === 0) {
          cartProduct.shift();
        } else {
          cartProduct.splice(index, 1);
        }
        const total = cartProduct?.reduce(
          (total, pd) => (total += pd.price * pd.quantity),
          0
        );

        const totalCount = {
          subTotal: total,
          tax: total * 0.01,
          total: total + total * 0.1,
        };

        return {
          ...state,
          cartProduct,
          totalCount,
        };
      }
      default:
        return state;
    }
  }
  return action;
};
