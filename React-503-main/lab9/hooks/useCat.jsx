import { useSelector, useDispatch } from 'react-redux';
import {
	updateMood,
	increaseSize,
	decreaseSize,
	updateColor,
} from '../redux/store';

const useCat = () => {
	const dispatch = useDispatch();
	const moods = useSelector((state) => state.moodData.moods);
	const currentMood = useSelector((state) => state.moodData.currentMood);
	const currentSize = useSelector((state) => state.sizeData.size);
	const currentColor = useSelector((state) => state.colorData.color);

	const handleMoodUpdate = (event) => {
		const mood = event.target.dataset.type;
		dispatch(updateMood(mood));
	};

	const handleSize = (choice) => {
		choice === '+' ? dispatch(increaseSize()) : dispatch(decreaseSize());
	};

	const handleColor = (event) => {
		const color = event.target.value;
		dispatch(updateColor(color));
	};

	return {
		moods,
		currentMood,
		currentSize,
		currentColor,
		handleMoodUpdate,
		handleSize,
		handleColor,
	};
};

export default useCat;