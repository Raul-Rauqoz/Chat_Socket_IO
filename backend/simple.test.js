describe('Test', () => {
	it('test messages', () => {
		const messages = require('./messages/messages');
		expect(typeof messages).toBe('object');
	});
	it('test users', () => {
		const users = require('./messages/users');
		expect(typeof users).toBe('object');
	});
});
