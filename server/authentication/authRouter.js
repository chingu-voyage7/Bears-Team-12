const express = require('express')
const authRouter = express.Router()
const passport = require('passport')

// Sign out
authRouter.get('/auth/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// Facebook sign in 
authRouter.get('/auth/facebook', 
  passport.authenticate('facebook'))

// Facebook callback
authRouter.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    console.log('Logged in to Facebook successfully')
    res.redirect('/')
  })

// Google sign in
authRouter.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

// Google callback
authRouter.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('Logged in to Google successfully')
    res.redirect('/');
  });

// Check if you are signed in
authRouter.get('/auth/check', (req, res) => {
  if (req.user) {
    console.log(req.user)
    res.send(req.user)
  } else {
    console.log('You are not signed in')
    res.send(null)
  }
})

module.exports = authRouter