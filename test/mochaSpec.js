/*
    - need this file inside 'test' folder only
    - run "npm test" in cmd 
*/

//Assertion library
var chai = require('chai');

describe('Mocha test suite', function(){
    it('should run a basic suit-1',function(){
        //console.log(chai);
        //chai.expect(1+1).to.equal(3);
        chai.expect(1+1).to.equal(2);
    })

    //skipping
    xit('should run a basic suit',function(){
        chai.expect(1+1).to.equal(2);
    })

    //will execute only this test case
    //it.only('should run a basic suit-2',function(){
    it('should run a basic suit-2',function(){
        //console.log(chai);
        //chai.expect(1+1).to.equal(3);
        chai.expect(1+1).to.equal(2);
    })

    describe('Async test', function(){

        it('should fetch name from service', function(done) {
        var name = '';
        setTimeout(function(){
            name= 'vinayak';
            chai.expect(name).to.equal('vinayak');
            done();
        }, 1000)

        
        });
    });

})