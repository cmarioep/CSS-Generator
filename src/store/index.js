import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialValues = {
    // Initial values for box-shadow
    box_xOffset: -10,
    box_yOffset: 10,
    box_blur: 0,
    box_spread: 0,
    box_color: {r: 59, g: 57, b: 57, a:1},

    // Initial values for text-shadow
    text_xOffset: -4,
    text_yOffset: 4,
    text_blur: 2,
    text_color: {r: 219, g: 100, b: 100, a:1},
}

const setProperties = createSlice({
    name: 'properties',
    initialState: initialValues,
    reducers: {
        // Actions to set text-shadow properties
        setX__boxShadow(state, action) {
            state.box_xOffset= action.payload;
        },
        setY__boxShadow(state, action) {
            state.box_yOffset= action.payload;
        },
        setBlur__boxShadow(state, action) {
            state.box_blur= (action.payload < 0) ? 0 : action.payload;
         },
        setSpread__boxShadow(state, action) {
            state.box_spread= action.payload;
        },
        setColor__boxShadow(state, action) {
            state.box_color= action.payload;
        },
        // Actions to set text-shadow properties
        setX__textShadow(state, action) {
            state.text_xOffset= action.payload;
        },
        setY__textShadow(state, action) {
            state.text_yOffset= action.payload;
        },
        setBlur__textShadow(state, action) {
            state.text_blur= (action.payload < 0) ? 0 : action.payload;
        },
        setColor__textShadow(state, action) {
            state.text_color= action.payload;
        },
    }
});


const store = configureStore({
    reducer: setProperties.reducer
});


export const setPropertiesActions = setProperties.actions;


export default store;