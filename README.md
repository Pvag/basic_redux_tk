# Notes about Redux Toolkit

## Install

`nvm use`

`npm install`

### Note about redux-related packages

The following packages are needed in order for the store to work, and for our app to use it:
- @reduxjs/tooklit
- react-redux

## Run

`npm start`

## Notes written along with the [Redux Toolkit Quick Start tutorial](https://redux-toolkit.js.org/tutorials/quick-start)

How to set up and use Redux Toolkit with React-Redux.

## Counter App

### Simple example of store setup

Files
- _src/features/counter/counterSlice.ts_
	- defines the slice with
		- initial state (`count`)
		- reducers
		- action creators (as keys of reducers)
	- exports action creators and the reducer
- _src/app/store.ts_
	- creates a store using `configureStore`, using the reducer as parameter
	- exports the created store
- _src/index.js_
	- imports
		- `Provider` from 'react-redux'
		- store from 'src/app/store'
	- wraps `<Provider>` around `<App />`
		- makes the store available app-wide
- _src/features/counter/Counter.tsx_ (client) --> connected component
	- imports
		- `useSelector` (get data from the `counter` slice) and `useDispatch` (dispatch actions) from 'react-redux'
		- action creators from _src/features/counter/counterSlice.ts_
	- reads data from the imported store slice
	- dispatch actions