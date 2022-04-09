const base_url = 'http://localhost:4000/';

export const get_home_ = async () => {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};

	try {
		const pre = await (await fetch(base_url, requestOptions)).json();
		return pre;
	} catch (error) {
		return error;
	}
};
