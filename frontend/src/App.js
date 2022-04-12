import { useRef, useState } from 'react';
import './App.css';
import Message from './components/Message/Message';
import User from './components/Message/User';
import { add_message_, socket } from './components/Events/Socket';
import { get_all_messages_, post_add_message_ } from './components/Middlewares/Fetch';
import MessageM from './components/Message/MessageM';

const App = () => {
	const ref_scroll = useRef(null);
	const [ login, setLogin_ ] = useState(false);
	const [ user, setUser_ ] = useState('');
	const [ message, setMessage_ ] = useState('');
	const [ data, setData_ ] = useState([]);

	const submit_ = () => {
		add_message_({ nick: user, message });
		ref_scroll.current.focus();
		post_add_message_();
		setMessage_('');
	};

	socket.on('get_messages_b', () => {
		get_all_messages_().then((data) => {
			let pre = [];
			data.forEach((e) => {
				if (e.nick === user) {
					pre.push(<MessageM mensaje={e.message} nick={e.nick} me={true} key={e.id} />);
				} else {
					pre.push(<Message mensaje={e.message} nick={e.nick} me={false} key={e.id} />);
				}
			});
			setData_(pre);
		});
	});

	return (
		<div style={{ marginTop: 50 }}>
			{login === false ? (
				<User setUser_={setUser_} user={user} setLogin_={setLogin_} setData_={setData_} />
			) : (
				<div>
					<div
						style={{ marginLeft: '20vw', marginRight: '20vw', height: '70vh', overflow: 'auto' }}
						ref={ref_scroll}
					>
						{data.map((e) => e)}
					</div>
					<div style={{ marginLeft: '20vw', marginRight: '20vw' }}>
						<input
							type={'text'}
							style={{ width: '48vw', fontSize: 20 }}
							value={message}
							onChange={(e) => setMessage_(e.target.value)}
						/>
						<button style={{ width: '10vw', fontSize: 20 }} onClick={submit_}>
							hola
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
