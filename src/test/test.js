var chai = require('chai');
var expect = chai.expect;
var main = require('../js/main.js');


// *** simple functions tests *** //

describe('Basic Function Tests', function() {

});


// *** Stubbing out ajax requests *** //

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
        main.testing();
        expect($.ajax.calledOnce).to.be.true;
        done();
    })

})


// *** Using a mock server setup *** //

describe('Mock Server', function() {

    beforeEach(function() {
        server = sinon.fakeServer.create();
    });

    afterEach(function() {
        server.restore();
    });

    it('should send data for /testroute get', function() {

        server.respondWith('GET', '/testroute',
            [200, {'Content-Type' : 'application/json'},
            '{"stuff":"is", "really":"cool"}']);

        main.mockServerTest();

        // console.log(server.requests);
        server.respond();
    })

    it('should send data for /testroute post', function() {

        server.respondWith('POST', '/testroute',
            [200, {'Content-Type' : 'application/json'},
            '{"content" : "posted"}']);

        main.mockServerPost();

        expect(mockServerPost).to.be.calledOnce;
        expect(mockServerPost).to.be.cal

        server.respond();

    })

})



