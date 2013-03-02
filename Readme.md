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
stack.push(5);
stack.size(); // 2
stack.peek(); // 5
stack.pop(); // 5
stack.size(); // 1
```

## API

### Stack()

Initializes a new empty `Stack`.

### Stack#empty()

Returns whether the stack is empty or not.

### Stack#peek()

Peeks at the top element of the stack.
Throws an `Error` when the stack is empty.

### Stack#pop()

Pops the top element of the stack.
Throws an `Error` when the stack is empty.

### Stack#push(element)

Pushes the `element` at the top of the stack and returns its new size.

### Stack#size()

Returns the size of the stack.

## Testing

```
$ npm test
```

## Licence

MIT
