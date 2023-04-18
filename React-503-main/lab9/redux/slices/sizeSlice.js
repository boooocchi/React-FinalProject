import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	size: 250,
};

const sizeSlice = createSlice({
	name: 'size',
	initialState,
	reducers: {
		increaseSize: (state, action) => {
			return { ...state, size: state.size + 10 };
		},
		decreaseSize: (state, action) => {
		
			return { ...state, size: state.size - 10 };
		},
	},
});

export const { increaseSize, decreaseSize } = sizeSlice.actions;
export default sizeSlice.reducer;