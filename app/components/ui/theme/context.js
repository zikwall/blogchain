import { createContext, useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Cookie } from "@blogchain/help";
import { USER_THEME } from "@blogchain/constants";

export function themeReducer(state = { isDark: false }, action) {
    switch (action.type) {
        case 'TO_WHITE':
            return { ...state, isDark: false }
        case 'TO_DARK':
            return { ...state, isDark: true }
        default:
            return state
    }
}

export const toDarkMode = () => {
    return (dispatch) => {
        dispatch({type: 'TO_DARK'});
    };
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const state = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();

    const dispatchWithContext = () => {
        dispatch({ type: state.isDark ? 'TO_WHITE' : 'TO_DARK' });
        Cookie.setCookie(USER_THEME, !state.isDark);
    };

    return (
        <ThemeContext.Provider value={[ state, dispatchWithContext ]}>
            { children }
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeProvider must be used within a ThemeProvider')
    }
    return context;
}
