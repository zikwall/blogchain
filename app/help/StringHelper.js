/**
 * @return {string}
 */
export function REST(base, ...parts) {
    if (parts.length === 1) {
        return base + '/' + parts;
    }

    parts.forEach((part) => {
        base += `/${part}`;
    });

    return base;
}

export function toBoolean(string) {
    const booleanMap = {
        true: true, false: false,
    };

    const value = String(string).toLowerCase();

    if (!booleanMap.hasOwnProperty(value)) {
        return false;
    }

    return booleanMap[value];
}