import * as actionTypes from "./saveTypes";

export const saveItem = (itemID) => {
    return {
        type: actionTypes.SAVE_ITEM,
        payload: {
            id: itemID
        }
    }
}

export const removeItem = (itemID) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        payload: {
            id: itemID
        }
    }
}