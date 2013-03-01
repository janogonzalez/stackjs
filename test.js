var Stack = require('./index');

describe('Stack()', function() {
  it('returns an new Stack', function() {
    (new Stack()).should.be.an.instanceof(Stack);
  });

  describe('#empty', function() {
    it('returns true when the stack is empty', function() {
      var stack = new Stack();
      stack.empty().should.be.equal(true);
    });

    it('returns false when the stack is not empty', function() {
      var stack = new Stack();
      stack.push('jano');
      stack.empty().should.be.equal(false);
    });
  });

  describe('#peek()', function() {
    it('fails when the stack is empty', function() {
      var stack = new Stack();
      (function() {
        stack.peek().should.be.equal(0);
      }).should.throwError('Stack is empty');
    });

    it('returns the top element of the stack', function() {
      var stack = new Stack();
      stack.push('jano');
      stack.push('valentina');
      stack.peek().should.be.equal('valentina');
    });
  });

  describe('#pop()', function() {
    it('fails when the stack is empty', function() {
      var stack = new Stack();
      (function() {
        stack.pop();
      }).should.throwError('Stack is empty');
    });

    it('pops the top element of the stack', function() {
      var stack = new Stack();
      stack.push('jano');
      stack.push('valentina');
      stack.pop().should.be.equal('valentina');
      stack.size().should.be.equal(1);
    });
  });

  describe('#push()', function() {
    it('pushes an element to the top of the stack', function() {
      var stack = new Stack();
      stack.push('jano');
      stack.push('valentina');
      stack.peek().should.equal('valentina');
      stack.size().should.be.equal(2);
    });

    it('returns the new size of the stack', function() {
      var stack = new Stack();
      stack.push('jano').should.equal(1);
    });
  });

  describe('#size()', function() {
    it('returns 0 when the stack is empty', function() {
      var stack = new Stack();
      stack.size().should.be.equal(0);
    });

    it('returns the size of the stack', function() {
      var stack = new Stack();
      stack.push('jano');
      stack.push('valentina');
      stack.size().should.be.equal(2);
    });
  });
});
