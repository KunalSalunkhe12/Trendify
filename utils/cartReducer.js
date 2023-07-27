export const cartReducer = (state, action) => {
    switch (action.type) {
        case "INITIALIZE_CART":
            return { ...action.cart };
        case "ADD_TO_CART":
            const quantity = state.products[action.item._id] ? state.products[action.item._id].quantity + 1 : 1;
            const newItem = {
                [action.item._id]: {
                    item: action.item,
                    quantity: quantity,
                }
            };
            return { products: { ...state.products, ...newItem } };
        case "REMOVE_FROM_CART":
            if (state.products[action.id].quantity > 1) {
                state.products[action.id].quantity -= 1;
            } else {
                delete state.products[action.id];
            }
            return { products: { ...state.products } };

        default: throw new Error("Unknown action type");
    }
}