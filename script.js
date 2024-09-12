const transform = (str) => {
    return str
        .split('')
        .map((char, index) => `${index}${char.toUpperCase()}`)
        .join('');
};

function transformString() {
    const inputString = document.getElementById('userInput').value;
    const result = transform(inputString);
    document.getElementById('output').innerText = result;
}
