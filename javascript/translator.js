const BRAILLE_TO_ENGLISH = {
    '0.....': ['a', '1'],
    '0.0...': ['b', '2'],
    '00....': ['c', '3'],
    '00.0..': ['d', '4'],
    '0..0..': ['e', '5'],
    '000...': ['f', '6'],
    '0000..': ['g', '7'],
    '0.00..': ['h', '8'],
    '.00...': ['i', '9'],
    '.000..': ['j', '0'],
    '0...0.': 'k',
    '0.0.0.': 'l',
    '00..0.': 'm',
    '00.00.': 'n',
    '0..00.': 'o',
    '000.0.': 'p',
    '00000.': 'q',
    '0.000.': 'r',
    '.00.0.': 's',
    '.0000.': 't',
    '0...00': 'u',
    '0.0.00': 'v',
    '.000.0': 'w',
    '00..00': 'x',
    '00.000': 'y',
    '0..000': 'z',
    '.....0': 'capital follows', 
    '.0...0': 'decimal follows', 
    '.0.000': 'number follows', 
    '..00.0': '.', 
    '..0...': ',', 
    '..0.00': '?', 
    '..000.': '!', 
    '..00..': ':', 
    '..0.0.': ';', 
    '....00': '-', 
    '.0..0.': '/', 
    '.00..0': '<', 
    '0..00.': '>', 
    '0.0..0': '(', 
    '.0.00.': ')', 
    '......': ' ', 
    '0.....': '1', 
    '0.0...': '2', 
    '00....': '3', 
    '00.0..': '4', 
    '0..0..': '5', 
    '000...': '6', 
    '0000..': '7', 
    '0.00..': '8', 
    '.00...': '9', 
}

const ENGLISH_TO_BRAILLE = {};
for (const [key, value] of Object.entries(BRAILLE_TO_ENGLISH)) {
    ENGLISH_TO_BRAILLE[value] = key;
}

function brailleToEnglish(brailleString) {
    let result = '';
    for (let i = 0; i < brailleString.length; i += 6) {
        let brailleChar = brailleString.substring(i, i + 6);
        if (brailleChar == '.....0') {
            result = result + BRAILLE_TO_ENGLISH[brailleChar].toUpperCase(); 
        } else if (brailleChar == '.0.000') {
            if (Array.isArray(BRAILLE_TO_ENGLISH(brailleChar))) {
                result = result + 
            }
        } else {
            result = result + BRAILLE_TO_ENGLISH[brailleChar]; 
        }
    }
    return result;
}

function englishToBraille(englishString) {
    let result = '';
    for (let char of englishString.toLowerCase()) {
        result += ENGLISH_TO_BRAILLE[char] || '?';
    }
    return result;
}

function translate(inputString) {
    if (/^[O.]+$/.test(inputString)) {
        return brailleToEnglish(inputString);
    } else {
        return englishToBraille(inputString);
    }
}

const args = process.argv.slice(2);
if (args.length !== 1) {
    console.log('Usage: node translator.js "input_string"');
    process.exit(1);
}

const inputString = args[0];
console.log(translate(inputString));



