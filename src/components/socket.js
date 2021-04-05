import io from 'socket.io-client'
//const ENDPOINT = 'http://127.0.0.1:4001'
const ENDPOINT = "https://pacific-beyond-27860.herokuapp.com/"
export const socket = io(ENDPOINT)