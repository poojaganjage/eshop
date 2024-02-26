const initialState = {
    basket: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                //...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((basketItem) => { return basketItem.id === action.item.id});
            const newBasket = [...state.basket];
            if(index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove the product id ${action.item.id} as it's not in the basket`);
            }
            return {
                //...state,
                basket: newBasket
            }
        case "default":
            throw new Error();
    }
    return state;
}
export default reducer;
