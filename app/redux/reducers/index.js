import { combineReducers } from 'redux'
import authentication, { getUser, getToken } from './auth';
import { themeReducer } from "@blogchain/components/ui/theme/context";

const rootReducer = combineReducers({
    authentication,
    themeReducer,
});

export default rootReducer;

export {
    getToken, getUser
}
