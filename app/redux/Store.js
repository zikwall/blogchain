// dependencies
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// application
import rootReducer from './reducers';
import { EnvHelper } from "@blogchain/help";

const loggerMiddleware = createLogger();

export const makeStore = (initialState, options) => {
    const middlewares = [
        thunkMiddleware,
        loggerMiddleware,
    ];

    return createStore(rootReducer, initialState,
        !EnvHelper.isDevelopment()
            ? applyMiddleware(...middlewares)
            : composeWithDevTools(applyMiddleware(...middlewares))
    );
};
