import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { getMoods } from './middleware/fetch';

//slice
import { rootReducer } from './slices';
import { increaseSize, decreaseSize} from './slices/sizeSlice';
import { updateColor } from './slices/colorSlice';
import { updateMood } from './slices/moodSlice';


let middleware = [thunk];
if (import.meta.env.DEV) {
	middleware = [...middleware, logger];
}

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware,
});

const persistor = persistStore(store);

const AppProvider = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>{children}</PersistGate>
		</Provider>
	);
};

export {
	AppProvider,
	store,
	updateMood,
	increaseSize,
	decreaseSize,
	updateColor,
	getMoods,
};