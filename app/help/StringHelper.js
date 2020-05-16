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