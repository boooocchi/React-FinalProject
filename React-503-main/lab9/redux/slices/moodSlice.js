import { createSlice } from '@reduxjs/toolkit';
import { getMoods } from '../middleware/fetch';

const initialState = {
	moods: [],
	currentMood: undefined,
};

const moodSlice = createSlice({
	name: 'mood',
	initialState,
	reducers: {
		updateMood: (state, action) => {
			return { ...state, currentMood: action.payload };
		},
	},
	extraReducers: {
		[getMoods.fulfilled]: (state, action) => {
			state.moods = action.payload;
		},
	},
});

export const { updateMood } = moodSlice.actions;
export default moodSlice.reducer;