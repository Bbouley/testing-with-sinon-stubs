

var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Basic Function Tests', function() {

});

describe('Stub Ajax Tests', function() {

    beforeEach(function() {
        sinon.spy($, 'ajax');
    })

    afterEach(function() {
        $.ajax.restore();
    })

    var stubData = [{
        link : 'www.StubLink.com',
        title : 'Stub Title',
        description : 'This is a test of if you described something and such',
    }]

    it('should make an ajax call', function(done) {
        testing();
        expect($.ajax.calledOnce).to.be.true;
        done();
    })

})
