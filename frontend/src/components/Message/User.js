import React from 'react';
import { get_connect_, get_messages_ } from '../Events/Socket';

const User = ({ user, setUser_, setLogin_ }) => {
	const submit_ = () => {
		if (user !== '') {
			setLogin_(true);
			get_connect_(user);
			get_messages_();
		} else {
			alert('Ingresa tu nick');
		}
	};

	return (
		<div className="App-header">
			<h3>Ingresa tu nombre</h3>
			<input value={user} onChange={(e) => setUser_(e.target.value)} style={{ fontSize: 25 }} type={'text'} />
			<button style={{ marginTop: 20, fontSize: 25 }} onClick={submit_}>
				Ingresar
			</button>
		</div>
	);
};

export default User;
