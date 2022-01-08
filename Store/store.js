import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./combineReducers";
import thunk from "redux-thunk";


//redux dev tool
// const devToolsExtension =
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(reducers, devToolsExtension );

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;