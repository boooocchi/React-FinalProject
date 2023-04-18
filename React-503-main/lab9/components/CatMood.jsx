import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useCat from '../hooks/useCat';
import { getMoods } from '../redux/store';

const CatMood = () => {
	const { moods, handleMoodUpdate } = useCat();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMoods());
	}, []);

	return (
		<>
			<section>
				<h3>Mood</h3>
				{Object.values(moods).map((mood) => (
					<button key={mood} data-type={mood} onClick={handleMoodUpdate}>
						{mood}
					</button>
				))}
			</section>
		</>
	);
};

export default CatMood;