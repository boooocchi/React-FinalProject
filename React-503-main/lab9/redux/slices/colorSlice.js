import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	color: '#FFFFFF',
};

const colorSlice = createSlice({
	name: 'color',
	initialState,
	reducers: {
		updateColor: (state, action) => {
			return { ...state, color: action.payload };
		},
	},
});

export const { updateColor } = colorSlice.actions;
export default colorSlice.reducer;