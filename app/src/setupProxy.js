const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/auth', { target: 'http://localhost:4000' })),
  app.use(proxy('/graphql', { target: 'http://localhost:4000' }))
}