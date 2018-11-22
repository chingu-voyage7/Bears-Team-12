const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const port = 3035

http.listen(port, () => console.log(`Listening on port : ${port}`) )

app.get('/api/test', (req, res) => {

	console.log('endpoint hit')
})
