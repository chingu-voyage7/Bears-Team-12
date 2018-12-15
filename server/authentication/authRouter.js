const express = require('express')
const authRouter = express.Router()
const passport = require('passport')

authRouter.get('/auth/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

authRouter.get('/auth/facebook', 
  passport.authenticate('facebook'))

// Successful authentication, redirect home.
// Failed authentication, redirect home.
authRouter.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/')
  })

authRouter.get('/auth/facebook/isSignedIn', (req, res) => {
  if (req.user) {
    console.log(req.user)
    res.send(req.user)
  } else {
    console.log('You are not signed in')
    res.send(null)
  }
})

module.exports = authRouter