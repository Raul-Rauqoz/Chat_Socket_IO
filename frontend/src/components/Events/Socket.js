import socket_client from 'socket.io-client';
const socket = socket_client('http://localhost:4000/', { transports: [ 'websocket' ] });
