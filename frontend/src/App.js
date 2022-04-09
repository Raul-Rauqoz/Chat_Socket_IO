import { useEffect } from 'react';
import './App.css';
import { get_home_ } from './components/Middlewares/Fetch';

const App = () => {
	useEffect(() => {
		get_home_().then((data) => console.log(data));
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<code>Rauqoz</code>
			</header>
		</div>
	);
};

export default App;
