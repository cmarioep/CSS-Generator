import { createSlice, configureStore } from '@reduxjs/toolkit';

const values = {
    x: 0,
}

const setProperties = createSlice({
    name: 'properties',
    initialState: values,
    reducers: {
        setX(state, action) {
            state.x= action.payload;
        }
    }
});


const store = configureStore({
    reducer: setProperties.reducer
});


export const setPropertiesActions = setProperties.actions;


export default store;