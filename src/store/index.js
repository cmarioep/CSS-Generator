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
        setX(state, action) {
            state.box_xOffset= action.payload;
        },
        setY(state, action) {
            state.box_yOffset= action.payload;
        },
        setBlur(state, action) {
            state.box_blur= (action.payload < 0) ? 0 : action.payload;
         },
        setSpread(state, action) {
            state.box_spread= action.payload;
        },
        setColor(state, action) {
            state.box_color= action.payload;
        }
    }
});


const store = configureStore({
    reducer: setProperties.reducer
});


export const setPropertiesActions = setProperties.actions;


export default store;