describe('Test', () => {
	it('Test messages', () => {
		const messages = require('./messages/messages');
		expect(typeof messages).toBe('object');
	});
	it('Test users', () => {
		const users = require('./messages/users');
		expect(typeof users).toBe('object');
	});
});
