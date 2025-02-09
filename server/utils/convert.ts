export const convertToUrl = (title: string) => {
    const polishChars = [
        { char: 'ą', replace: 'a' },
        { char: 'ć', replace: 'c' },
        { char: 'ę', replace: 'e' },
        { char: 'ł', replace: 'l' },
        { char: 'ń', replace: 'n' },
        { char: 'ó', replace: 'o' },
        { char: 'ś', replace: 's' },
        { char: 'ź', replace: 'z' },
        { char: 'ż', replace: 'z' }
    ]

    polishChars.forEach(char => {
        title = title.replaceAll(char.char, char.replace);
    });
    
    return title.toLowerCase().replace(/ /g, '-');
}