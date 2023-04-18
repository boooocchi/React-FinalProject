import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL =
	'https://gist.githubusercontent.com/andasan/4f4976c373654f73b0a465a2441c2c91/raw/1b3c99936426b59ba4a92c7afe12fc109e4dbdcd/moods.json';

export const getMoods = createAsyncThunk('moods/getMoods', async () => {
	const response = await axios.get(URL);
	return response.data.moods;
});