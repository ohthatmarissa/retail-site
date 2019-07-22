import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selesctedCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectedCartItemsCount = createSelector(
    [selesctedCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
        0
    )
);