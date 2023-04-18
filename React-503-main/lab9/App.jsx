import { Cat } from 'react-kawaii';
import useCat from './hooks/useCat';
import CatSize from './components/CatSize';
import CatColor from './components/CatColor';
import CatMood from './components/CatMood';

function App() {
	const { currentSize, currentMood, currentColor } = useCat();

	return (
		<div className='App'>
			<Cat size={currentSize} mood={currentMood} color={currentColor} />
			<CatMood />
			<CatSize />
			<CatColor />
		</div>
	);
}

export default App;