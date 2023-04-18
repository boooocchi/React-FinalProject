import useCat from '../hooks/useCat';

const CatSize = () => {
	const { handleSize } = useCat();

	return (
		<>
			<section>
				<h3>Size</h3>
				<button onClick={() => handleSize('+')}>+</button>
				<button onClick={() => handleSize('-')}>-</button>
			</section>
		</>
	);
};

export default CatSize;