import { hello, greet } from './hello-world';

describe('Hello World', () => {
  test('Say Hi!', () => {
    expect(hello()).toEqual('Hello, World!');
  });
});

describe('Greet', () => {
  test('Returns one messsage', () => {
    const greeting = 'Hello, World!';

    expect(greet(greeting)).toEqual(greeting);
  });

  test('Returns a different message', () => {
    const greeting = '¡Hola, mundo!';

    expect(greet(greeting)).toEqual(greeting);
  });
});
