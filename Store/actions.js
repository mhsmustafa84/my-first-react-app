import { axiosInstance } from "./../network";

export const getProductsList = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get(`/api/v1/products`);
        console.log(response.data)
        dispatch({
            type: "GET_PRODUCTS_LIST",
            payload: [...response.data],
        });
    } catch (err) {
        console.log(err);
    }
};

export const count = (payload) => ({
    type: 'COUNTER',
    payload
});

export const cartItems = (payload) => ({
    type: 'CARTITEMS',
    payload
});
export const cartItemsID = (payload) => ({
    type: 'CARTITEMSID',
    payload
});