import { useThemeContext } from "@blogchain/components/ui/theme/context";
import { SwitcherComponent } from "@blogchain/components/ui/theme/switcher";

const UIThemeSwitcher = () => {
    const [ state, dispatch ] = useThemeContext();
    const { isDark } = state;

    return (
        <SwitcherComponent
            isDarkMode={isDark}
            onSwitch={() => {
                dispatch()
            }}
        />
    )
}

export default UIThemeSwitcher;