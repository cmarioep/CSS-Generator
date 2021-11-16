import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialValues = {
    box_xOffset: -10, // The horizontal offset of the box-shadow
    box_yOffset: 10,  // The vertical offset of the box-shadow
    box_blur: 0,
    box_spread: 0,
    box_color: {r: 59, g: 57, b: 57, a:1}
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