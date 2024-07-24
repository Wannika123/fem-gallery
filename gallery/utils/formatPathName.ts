export function formatPathName(name: string) {
    if (/é/.test(name)) {
        name = name.replace(/é/, 'e')
    }
    return name.toLowerCase().split(' ').join('-');
}