/**
 * Expose `Stack`.
 */
module.exports = Stack;

/**
 * Initializes a new empty `Stack`.
 *
 * @return {Stack}
 */
function Stack() {
  this._elements = [];
}

/**
 * Returns whether the `Stack` is empty or not.
 *
 * @return {Boolean}
 */
Stack.prototype.empty = function() {
  return this.size() === 0;
};

/**
 * Peeks at the top element of the `Stack`.
 *
 * @return {Object}
 * @throws {Error} when the stack is empty.
 */
Stack.prototype.peek = function() {
  if (this.empty()) throw new Error('Stack is empty');

  return this._elements[this.size() - 1];
};

/**
 * Pops the top element of the `Stack`.
 *
 * @return {Object}
 * @throws {Error} when the stack is empty.
 */
Stack.prototype.pop = function() {
  if (this.empty()) throw new Error('Stack is empty');

  return this._elements.pop();
};

/**
 * Pushes the `element` at the top of the `Stack` and returns its new size.
 *
 * @param {Object} element
 * @return {Number}
 */
Stack.prototype.push = function(element) {
  return this._elements.push(element);
};

/**
 * Returns the size of the `Stack`.
 *
 * @return {Number}
 */
Stack.prototype.size = function() {
  return this._elements.length;
};
