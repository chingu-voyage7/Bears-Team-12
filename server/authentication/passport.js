const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/User')

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('Signed in to Facebook as ', profile)
    User.findOne({ facebookId: profile.id }).then((err, user) => {
      if (err) return err
      if (user) {
        console.log('MongoDB user found ', user)
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

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {

    User.findOne({ googleId: profile.id }, (err, user) => {
      if (err) return err
      if (user) {
        console.log('MongoDB user found ', user)
        cb(err, user)
      } else {
        new User ({
          googleId: profile.id
        }).save().then((newUser) => {
          console.log('New user created: ', newUser)
          cb(err, newUser)
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
