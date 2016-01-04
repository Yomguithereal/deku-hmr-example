# Deku HMR example

Straightforward example of HMR setup for [deku](https://github.com/dekujs/deku). Everything will be hot-reloaded, from components to the redux reducers, actions etc.

## Starting the app

```bash
npm install
npm start
```

Then wait for compilation and open `localhost:3000`.

## Pointers

HMR-related things are in the [`main.jsx`](main.jsx) file and in the [`configureStore.js`](configureStore.js) one.

## Dependencies

```json
{
  "dependencies": {
    "deku": "^2.0.0-rc7",
    "redux": "^3.0.5"
  },
  "devDependencies": {
    "babel-core": "^6.3.26",
    "babel-loader": "^6.2.0",
    "babel-plugin-transform-react-jsx": "^6.3.13",
    "babel-preset-es2015": "^6.3.13",
    "express": "^4.13.3",
    "webpack": "^1.12.9",
    "webpack-dev-middleware": "^1.4.0",
    "webpack-hot-middleware": "^2.6.0"
  }
}
```
