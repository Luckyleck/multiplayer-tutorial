const socket = io('ws://localhost:5000')

socket.on('connect', () => {
    console.log('user connected', socket.id)
})

socket.on('map', (map) => {
    console.log('map', map)
})