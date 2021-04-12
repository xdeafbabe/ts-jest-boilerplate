import { Greeter } from '../src/index';


describe('Greeter', () => {
    test('greet world', () => {
        const greeter = new Greeter('world');
        expect(greeter.greet()).toBe('Hello, world!');
    });

    test('greet Laura', () => {
        const greeter = new Greeter('Laura');
        expect(greeter.greet()).toBe('Hello, Laura!');
    });
});