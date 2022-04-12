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

export const post_add_message_ = async () => {
	let headersList = {
		Accept: '*/*'
	};

	try {
		const pre = await fetch(`${base_url}/add_message`, {
			method: 'POST',
			headers: headersList
		});
		const post = await pre.json();
		return post;
	} catch (error) {
		return error;
	}
};
