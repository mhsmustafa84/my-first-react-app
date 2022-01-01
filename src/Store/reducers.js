export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'COUNTER':
            return action.payload
        default:
            return state;
    }
};

export const cartItemsReducer = (state = 0, action) => {
    switch (action.type) {
        case 'CARTITEMS':
            return action.payload;
        default:
            return state;
    }
};

export const cartItemsIDReducer = (state = [0], action) => {
    switch (action.type) {
        case 'CARTITEMSID':
            state.push(action.payload);
            return state
        default:
            return state;
    }
};

export const ProductsReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_PRODUCTS_LIST":
            return action.payload;
        default:
            return state;
    }
};