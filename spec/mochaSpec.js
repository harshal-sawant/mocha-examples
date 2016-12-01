//Assertion library
var chai = require('chai');

describe('Mocha test suite', function(){
    it('should run a basic suit',function(){
        chai.expect(1+1).to.equal(3);
    })
})