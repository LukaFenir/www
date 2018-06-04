# Heath End Website

## Setup
You'll need to have both [node](https://nodejs.org/en/) (>=8) and [yarn](https://yarnpkg.com/en/docs/getting-started) (any version works) installed
Install the dependencies. This is done with `yarn`. 

### React
React is set up under `src/client` with `react-router-4` for client-side routing. 

- An router is setup under `src/client/router.jsx`
- A default layout is setup under `src/client/components/layout.jsx`
- Pages can be found under `src/client/components/pages`
- Webpack is setup to resolve files with the following extensions:
  - `.jsx`
  - `.js`
  - `.css`
  - `.json`
  - Files with these extensions can be imported as `import { x } from './myFile'` and webpack will worry about the extension.

## Scripts

### Running the server
This is an express server, with the HTTP server exposed (under `bin/www`). You can easily swap this out for a HTTPS server and include your certificates. Running the app is simple:

- `yarn start`

### Building
Because we're using React with JSX, the JSX has to be built. A polyfill (set up to ie >= 11) is provided.

- `yarn build`

If you want to keep building after a file's saved:

- `yarn run watch`


**Note:** This boilerplate includes a service worker, setup to cache the bundle and index file. 

To ensure that you can view your changes, in the developer console, go to application, click 'service workers' and select 'bypass for network'.

The code for the worker is under `public/javascripts/worker.js`. 

#### Heroku

If you're deploying to Heroku - a Procfile is setup for you. Use `heroku local`. The package [`local-env-var`](https://www.npmjs.com/package/local-env-var) is included to load from your `.env`.