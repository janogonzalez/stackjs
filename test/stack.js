describe('Stack()', function() {
  it('returns an new Stack', function() {
    expect(new Stack()).to.be.a(Stack);
  });

  describe('#isEmpty()', function() {
    it('returns true when the stack is empty', function() {
      var stack = new Stack();
      expect(stack.isEmpty()).to.be(true);
    });

    it('returns false when the stack is not empty', function() {
      var stack = new Stack();
      stack.push('jano');
      expect(stack.isEmpty()).to.be(false);
    });
  });

  describe('#peek()', function() {
    it('fails when the stack is empty', function() {
      var stack = new Stack();
      expect(function() {
        stack.peek();
      }).to.throwError('Stack is empty');
    });

    it('returns the top element of the stack', function() {
      var stack = new Stack();
      stack.push('jano');
      stack.push('valentina');
      expect(stack.peek()).to.be('valentina');
    });
  });

  describe('#pop()', function() {
    it('fails when the stack is empty', function() {
      var stack = new Stack();
      expect(function() {
        stack.pop();
      }).to.throwError('Stack is empty');
    });

    it('pops the top element of the stack', function() {
      var stack = new Stack();
      stack.push('jano');
      stack.push('valentina');
      expect(stack.pop()).to.be('valentina');
      expect(stack.size()).to.be(1);
    });
  });

  describe('#push()', function() {
    it('pushes an element to the top of the stack', function() {
      var stack = new Stack();
      stack.push('jano');
      stack.push('valentina');
      expect(stack.peek()).to.be('valentina');
      expect(stack.size()).to.be(2);
    });

    it('returns the new size of the stack', function() {
      var stack = new Stack();
      expect(stack.push('jano')).to.be(1);
    });
  });

  describe('#size()', function() {
    it('returns 0 when the stack is empty', function() {
      var stack = new Stack();
      expect(stack.size()).to.be(0);
    });

    it('returns the size of the stack', function() {
      var stack = new Stack();
      stack.push('jano');
      stack.push('valentina');
      expect(stack.size()).to.be(2);
    });
  });
});
