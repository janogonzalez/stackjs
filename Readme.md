# stack.js

A simple stack data structure for Node.js and the browser.

## Installation

As component for the browser:

```
$ component install janogonzalez/stackjs
```

As npm for Node.js:

```
$ npm install stackjs
```

## Example

```js
var Stack = require('stackjs');

var stack = new Stack();

stack.push(10);
stack.size(); // 1
stack.peek(); // 10
stack.pop(); // 10
```

## API

### Stack()

Initializes a new empty `Stack`.

### stack#empty()

Returns whether the `Stack` is empty or not.

### stack#peek()

Peeks at the top element of the `Stack`.
Throws an `Error` when the stack is empty.

### stack#pop()

Pops the top element of the `Stack`.
Throws an `Error` when the stack is empty.

### stack#push(element)

Pushes the `element` at the top of the `Stack` and returns its new size.

### stack#size()

Returns the size of the `Stack`.

## Testing

```
$ npm test
```

## Licence

MIT
