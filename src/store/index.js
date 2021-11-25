import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialValues = {
    // Initial values for box-shadow
    boxShadow_xOffset: -10,
    boxShadow_yOffset: 10,
    boxShadow_blur: 0,
    boxShadow_spread: 0,
    boxShadow_color: {r: 59, g: 57, b: 57, a:1},

    // Initial values for text-shadow
    textShadow_xOffset: -4,
    textShadow_yOffset: 4,
    textShadow_blur: 2,
    textShadow_color: {r: 219, g: 100, b: 100, a:1},

    // Initial values for Glass-Morphism
    glassMorphism_opacity: 0.369,
    glassMorphism_border: 2,
    glassMorphism_borderRadius: 5,
    glassMorphism_blurFilter: 11,
    glassMorphism_color: {r: 22, g: 101, b: 16}

}

const setProperties = createSlice({
    name: 'properties',
    initialState: initialValues,
    reducers: {
        // Actions to set text-shadow properties
        setX__boxShadow(state, action) {
            state.boxShadow_xOffset= action.payload;
        },
        setY__boxShadow(state, action) {
            state.boxShadow_yOffset= action.payload;
        },
        setBlur__boxShadow(state, action) {
            state.boxShadow_blur= (action.payload < 0) ? 0 : action.payload;
         },
        setSpread__boxShadow(state, action) {
            state.boxShadow_spread= action.payload;
        },
        setColor__boxShadow(state, action) {
            state.boxShadow_color= action.payload;
        },
        // Actions to set text-shadow properties
        setX__textShadow(state, action) {
            state.textShadow_xOffset= action.payload;
        },
        setY__textShadow(state, action) {
            state.textShadow_yOffset= action.payload;
        },
        setBlur__textShadow(state, action) {
            state.textShadow_blur= (action.payload < 0) ? 0 : action.payload;
        },
        setColor__textShadow(state, action) {
            state.textShadow_color= action.payload;
        },
    }
});


const store = configureStore({
    reducer: setProperties.reducer
});


export const setPropertiesActions = setProperties.actions;


export default store;