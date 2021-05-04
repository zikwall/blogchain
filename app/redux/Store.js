// dependencies
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// application
import rootReducer from './reducers';
import { EnvHelper } from "@blogchain/help";

export const makeStore = (initialState, options) => {
    const middlewares = [
        thunkMiddleware,
    ];

    if (EnvHelper.isDevelopment()) {
        middlewares.push(createLogger());
    }

    return createStore(rootReducer, initialState,
        !EnvHelper.isDevelopment()
            ? applyMiddleware(...middlewares)
            : composeWithDevTools(applyMiddleware(...middlewares))
    );
};
