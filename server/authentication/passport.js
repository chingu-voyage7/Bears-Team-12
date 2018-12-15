const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models/User')

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL
  },
  (accessToken, refreshToken, profile, done) => {

    console.log('Signing in as ', profile)
    
    User.findOne({ facebookId: profile.id }).then((err, user) => {
      if (err) return err
      if (user) {
        console.log('Signed in as ', user, 'with facebook profile ', profile)
        done(null, user)
      } else {
        new User({
          facebookId: profile.id
        }).save().then((newUser) => {
          console.log('New user created: ', newUser)
          done(null, newUser)
        })
      }
    });
  
  }

));

passport.serializeUser((user, done) => {
	done(null, user.id)
})

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user)
	})
})
