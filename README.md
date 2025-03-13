Tea Maker Selection Tool

This app is Dockerized into different containers, when it's deployed it creates a few components:
- Front-end, Typescript/React app
- Back-end, Typescript/NodeJS app
- Postgres DB
- Flyway for initializing the DB schema and prepolating with some data
- Redis

## Instructions

After cloning the repo, from the root directory build the app with:
> docker compose build

Then you can run it with:
> docker compose up -d


Once you are done, it can be stopped with:
> docker compose down

## Using the app
On your browser you can go to:
> http://localhost:3000

That will show the app with basic functionality for running a round of tea, and for viewing historical data.
On the top right corner there's the option to do a `Login`, that will fake a real login flow and the app will have a new option on the sidebar menu (My Preferences)
it shows the list of Players that are assigned to the only user existing in the DB.
