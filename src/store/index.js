import {createStore} from 'redux';

const properties = 
    {
        x: 0,
    }

const setPropertiesReducer = (state = properties, action) => {

    if (action.type === 'setX') {
        return {
            x: action.payload,
        }
    }
    
    return state;

}

const store = createStore(setPropertiesReducer);

export default store;