import { Label } from "semantic-ui-react";
import { useThemeContext } from "@blogchain/components";

const ThemedLabel = ({ children }) => {
    const [ theme ] = useThemeContext();
    const additionalProps = {};

    if (theme.isDark) {
        additionalProps['color'] = 'black';
    }

    return (
        <Label pointing as='a' tag {...additionalProps}>
            { children }
        </Label>
    )
}

const UITags = () => (
    Array.from([
        'Алгоритмы', 'python', 'video scene detection', 'video processing', 'обработка видео', 'computer vision',
        'компьютерное зрение', 'динамическое программирование', 'питон', 'video analysis', 'анализ видео'
    ], (label, i) => (
        <ThemedLabel key={i} pointing as='a' tag>
            { label }
        </ThemedLabel>
    ))
);

export default UITags;