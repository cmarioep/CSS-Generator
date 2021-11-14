import { createSlice, configureStore } from '@reduxjs/toolkit';

const values = {
    x: 5,
    y: 5,
    blur: 5,
    spread: 0,
    color: {r: 59, g: 57, b: 57, a:1}
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
            state.blur= (action.payload < 0) ? 0 : action.payload;
         },
        setSpread(state, action) {
            state.spread= action.payload;
        },
        setColor(state, action) {
            state.color= action.payload;
        }
    }
});


const store = configureStore({
    reducer: setProperties.reducer
});


export const setPropertiesActions = setProperties.actions;


export default store;