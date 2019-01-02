# Bears-Team-12
Communities | Voyage-7 | https://chingu.io/

Communities is a wiki type space for users to create subject related spaces for their related articles and knowledge. 

To start this project locally: 

## Usage

Project requires [MongoDB](https://www.mongodb.com/) installed.

Go to https://console.developers.google.com/, create a project, enable the Google+ API, and obtain the ID and Secret credentials.

Go to https://developers.facebook.com, create an app, and obtain a Facebook Login ID and Secret.

Create a .env file in the server folder and save the following in the file:

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
FACEBOOK_CALLBACK_URL=http://localhost:3000/auth/facebook/callback
```

Setup a database connection in the `server/knexfile.js` file. By default it uses `mysql`, however, you can change it to use `postgresql` by uninstalling `mysql` with `$ npm uninstall mysql`, then install the node `postgresql` module with `$ npm i pg`.

Again, change your connection settings in `server/knexfile.js`, and make sure you replace `mysql` with `pg`.

You must install `knex` globally with `$ npm i -g knex`.

Then in your Terminal(s):

* `$ npm i` in the server folder
* `$ npm i` in the app folder
* `$ knex migrate:latest` in the server folder
* `$ npm start` in the server folder
* `$ npm start` in the app folder

Congrats, your app should be up and running in the following URLs:

* UI: http://localhost:3000
* Service: http://localhost:4000
* GraphQL: http://localhost:4000/graphql
