import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './components/Events/Socket';

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
