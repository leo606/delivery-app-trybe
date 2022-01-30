import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3001';

let socket = null;

export default function getSocket() {
  if (socket) return socket;
  socket = io(SOCKET_URL);
  return socket;
}
