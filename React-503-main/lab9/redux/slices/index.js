import { combineReducers } from 'redux';
import moodSliceReducer from './moodSlice';
import sizeSliceReducer from './sizeSlice';
import colorSliceReducer from './colorSlice';

export const rootReducer = combineReducers({
	moodData: moodSliceReducer,
	sizeData: sizeSliceReducer,
	colorData: colorSliceReducer,
});