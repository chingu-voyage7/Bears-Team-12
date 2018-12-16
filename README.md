# Bears-Team-12
Communities | Voyage-7 | https://chingu.io/

Communities is a wiki type space for users to create subject related spaces for their related articles and knowledge. 

To start this project locally: 

Project requires mongodb installed

Go to https://developers.facebook.com, create an app, and obtain an a Facebook Login ID and Secret.

Create a .env file in the server folder
Save the following in the .env file in the server folder
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
FACEBOOK_CALLBACK_URL=http://localhost:3000/auth/facebook/callback

Then in your Terminal(s):
Run npm i in server folder
Run npm i in app folder
Run mongod 
Run npm start in server folder
Run npm start in app folder

UI: http://localhost:3000
Service: http://localhost:4000
GraphQL: http://localhost:4000/graphql

(MongoDB: http://localhost:27017)
