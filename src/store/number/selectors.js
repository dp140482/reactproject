export const selectRecievedStruct = state => state.nod.number;
export const selectStatus = state => state.nod.request.status;
export const selectError = state => state.nod.request.error;
export const selectCopyright = state => state.nod.number.copyright?.copyright;
export const selectNOD = state => {
    return {
        number: state.nod.number.contents?.nod.numbers.number,
        chinese: state.nod.number.contents?.nod.numbers.numerals.chinese.display,
        roman: state.nod.number.contents?.nod.numbers.numerals.roman.display,
        binary: state.nod.number.contents?.nod.numbers.bases.binary.value,
        octal: state.nod.number.contents?.nod.numbers.bases.octal.value,
        hexadecimal: state.nod.number.contents?.nod.numbers.bases.hexadecimal.value,
        ternary: state.nod.number.contents?.nod.numbers.bases.ternary.value,
        duodecimal: state.nod.number.contents?.nod.numbers.bases.duodecimal.value
    };
};