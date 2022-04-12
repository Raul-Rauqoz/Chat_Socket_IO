import React from 'react';

const MessageM = ({ nick, mensaje }) => {
	return (
		<div
			style={{
				backgroundColor: 'green',
				marginTop: 15,
				marginLeft: 50,
				marginRight: 50,
				display: 'flex',
				direction: 'rtl',
				justifyContent: 'flex-start'
			}}
		>
			<div style={{ marginRight: 40 }}>
				<h4>{nick}</h4>
				<p>{mensaje}</p>
			</div>
		</div>
	);
};

export default MessageM;
