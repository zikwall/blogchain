export const cutAfter = (needle, string) => {
    let n = string.indexOf(needle);
    if (n) {
        string = string.substring(0, n !== -1 ? n : string.length);
    }

    return string;
};