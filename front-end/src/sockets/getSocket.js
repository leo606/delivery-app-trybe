import { io } from 'socket.io-client';
// import getLocalStorage from '../helpers/getLocalStorage';

const SOCKET_URL = 'http://localhost:3001';

let socket = null;

export function newConn(id, role) {
  socket = io(SOCKET_URL);
  socket.emit('newConn', { id, role });
}

export default function getSocket() {
  if (socket) return socket;
}
