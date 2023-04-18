import useCat from '../hooks/useCat';

const CatColor = () => {
	const { currentColor, handleColor } = useCat();

	return (
		<>
			<section>
				<h3>Color</h3>
				<input type='color' value={currentColor} onChange={handleColor} />
			</section>
		</>
	);
};

export default CatColor;