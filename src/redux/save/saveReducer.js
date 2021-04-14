import * as actionTypes from "./saveTypes";

const INITIAL_STATE = {
    items: [
        {
            "id": "0",
            "name": "Cow"
        },
        {
            "id": "1",
            "name": "Chicken"
        },
        {
            "id": "2",
            "name": "Pig"
        },
        {
            "id": "3",
            "name": "Goat"
        }
    ],
    savedItems: []
}

const saveReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.SAVE_ITEM:
            const animal = state.items.find(animal => animal.id === action.payload.id)

            const alreadySaved = state.savedItems.find(animal => animal.id === action.payload.id ? true : false)

            return {
                ...state,
                savedItems: !alreadySaved ? [...state.savedItems, {...animal}] : [...state.savedItems] 
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                savedItems: state.savedItems.filter(animal =>
                    animal.id !== action.payload.id
                )
            }
        default:
            return state;
    }
}

export default saveReducer;