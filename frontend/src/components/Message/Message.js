import React from 'react';

const Message = ({ mio, mensaje, nick }) => {
	return (
		<div
			style={{
				backgroundColor: 'gray',
				marginTop: 15,
				marginLeft: 50,
				marginRight: 50,
				display: 'flex',
				direction: 'rtl',
				justifyContent: 'flex-end'
			}}
		>
			<div style={{ marginLeft: 40 }}>
				<h4>{nick}</h4>
				<p>{mensaje}</p>
			</div>
		</div>
	);
};

export default Message;
