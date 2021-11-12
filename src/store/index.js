import { createSlice, configureStore } from '@reduxjs/toolkit';

const values = {
    x: 1,
    y: 2,
    blur: 3,
    spread: 4,
}

const setProperties = createSlice({
    name: 'properties',
    initialState: values,
    reducers: {
        setX(state, action) {
            state.x= action.payload;
        },
        setY(state, action) {
            state.y= action.payload;
        },
        setBlur(state, action) {
            state.blur= action.payload;
        },
        setSpread(state, action) {
            state.spread= action.payload;
        }
    }
});


const store = configureStore({
    reducer: setProperties.reducer
});


export const setPropertiesActions = setProperties.actions;


export default store;