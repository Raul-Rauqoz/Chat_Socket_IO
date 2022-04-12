const base_url = 'http://localhost:4000';

export const get_all_messages_ = async () => {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};

	try {
		const pre = await fetch(`${base_url}/messages`, requestOptions);
		const post = await pre.json();
		return post;
	} catch (error) {
		return error;
	}
};

export const delete_all_messages_ = async () => {
	let headersList = {
		Accept: '*/*',
		'User-Agent': 'Thunder Client (https://www.thunderclient.com)'
	};

	try {
		return await fetch('http://localhost:4000/delete_all', {
			method: 'DELETE',
			headers: headersList
		});
	} catch (error) {
		return error;
	}
};
