run the following commands for Google social sign in functionality

npm install
npx auth secret #this will create an environment variable, an .env.local file
in the .env.local file, 
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

Go to your google cloud console, API & Services >> Credentials, copy paste client ID & secret

Finally, npm run dev



