Fast Google Social sign-in set up while keeping a nextjs project completely bare bones

run the following commands for Google social sign in functionality

npm install

npx auth secret #this will create an environment variable, an .env.local file

in the .env.local file, add the following

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

Go to your google cloud console, API & Services >> Credentials, copy paste client ID & secret

Finally, npm run dev



