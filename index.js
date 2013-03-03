/**
 * Expose `Stack`.
 */
module.exports = Stack;

/**
 * Initializes a new empty `Stack`.
 *
 * @return {Stack}
 * @api public
 */
function Stack() {
  this._elements = [];
}

/**
 * Returns whether the stack is empty or not.
 *
 * @return {Boolean}
 * @api public
 */
Stack.prototype.isEmpty = function() {
  return this.size() === 0;
};

/**
 * Peeks at the top element of the stack.
 *
 * @return {Object}
 * @throws {Error} when the stack is empty.
 * @api public
 */
Stack.prototype.peek = function() {
  if (this.isEmpty()) throw new Error('Stack is empty');

  return this._elements[this.size() - 1];
};

/**
 * Pops the top element of the stack.
 *
 * @return {Object}
 * @throws {Error} when the stack is empty.
 * @api public
 */
Stack.prototype.pop = function() {
  if (this.isEmpty()) throw new Error('Stack is empty');

  return this._elements.pop();
};

/**
 * Pushes the `element` at the top of the stack and returns its new size.
 *
 * @param {Object} element
 * @return {Number}
 * @api public
 */
Stack.prototype.push = function(element) {
  return this._elements.push(element);
};

/**
 * Returns the size of the stack.
 *
 * @return {Number}
 * @api public
 */
Stack.prototype.size = function() {
  return this._elements.length;
};
