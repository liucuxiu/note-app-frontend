# note-app

## Stack

- React 18.2.0

## Main structure of project (src folder)

- `App.js`: main file to run project.
- `containers`: contains all pages of application.
- `components`: contains all components.
- `services`: contains all functions for http request.
- `utils`: contains helper functions.

## Setup and Development

```sh
# install dependencies
npm install

# copy, and fill secret key
cp .env.example .env

# start app local
npm start
```

Starts the development server and makes your application accessible at
`localhost:3000`. Changes in the application code will be hot-reloaded.
