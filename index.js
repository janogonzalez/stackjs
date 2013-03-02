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
 * Returns whether the `Stack` is empty or not.
 *
 * @return {Boolean}
 * @api public
 */
Stack.prototype.empty = function() {
  return this.size() === 0;
};

/**
 * Peeks at the top element of the `Stack`.
 *
 * @return {Object}
 * @throws {Error} when the `Stack` is empty.
 * @api public
 */
Stack.prototype.peek = function() {
  if (this.empty()) throw new Error('Stack is empty');

  return this._elements[this.size() - 1];
};

/**
 * Pops the top element of the `Stack`.
 *
 * @return {Object}
 * @throws {Error} when the `Stack` is empty.
 * @api public
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
 * @api public
 */
Stack.prototype.push = function(element) {
  return this._elements.push(element);
};

/**
 * Returns the size of the `Stack`.
 *
 * @return {Number}
 * @api public
 */
Stack.prototype.size = function() {
  return this._elements.length;
};
