// import { addedChar } from './added_characters';

xdescribe('Three added characters', () => {
    test("addedChar('aabbcc', 'aacccbbcc') should return ‘c’", () => {
        expect(addedChar('aabbcc', 'aacccbbcc')).toBe('c');
    });

    test("addedChar('abcde', '2db2a2ec') should return ‘2’", () => {
        expect(addedChar('abcde', '2db2a2ec')).toBe('2');
    });

    test("addedChar('hello', 'aacccbbcc') should return ‘c’", () => {
        expect(addedChar('hello', 'aacccbbcc')).toBe('c');
    });
});