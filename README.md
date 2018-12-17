# Bears-Team-12
Communities | Voyage-7 | https://chingu.io/

Communities is a wiki type space for users to create subject related spaces for their related articles and knowledge. 

To start this project locally: 

## Usage

Project requires [MongoDB](https://www.mongodb.com/) installed.

Go to https://developers.facebook.com, create an app, and obtain a Facebook Login ID and Secret.

Create a .env file in the server folder and save the following in the file:

```
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
FACEBOOK_CALLBACK_URL=http://localhost:3000/auth/facebook/callback
```

Then in your Terminal(s):

* `$ npm i` in the server folder
* `$ npm i` in the app folder
* `$ mongod`
* `$ npm start` in the server folder
* `$ npm start` in the app folder

Congrats, your app should be up and running in the following URLs:

* UI: http://localhost:3000
* Service: http://localhost:4000
* GraphQL: http://localhost:4000/graphql
