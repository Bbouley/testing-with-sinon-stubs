// var sinon = require('sinon');
var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Basic Function Tests', function() {

});

// describe('Stub Ajax Tests', function() {

//     beforeEach(function() {
//         sinon.spy($, 'ajax');
//     })

//     afterEach(function() {
//         $.ajax.restore();
//     })

//     var stubData = [{
//         link : 'www.StubLink.com',
//         title : 'Stub Title',
//         description : 'This is a test of if you described something and such',
//     }]

//     it('should make an ajax call', function(done) {
//         testing();
//         expect($.ajax.calledOnce).to.be.true;
//         done();
//     })

// })

describe('Mock Server', function() {

    beforeEach(function() {
        server = sinon.fakeServer.create();
    });

    afterEach(function() {
        server.restore();
    });

    it('should send a fake jquery request', function() {

        server.respondWith('GET', '/testroute',
            [200, {'Content-Type' : 'application/json'},
            '{"stuff":"is", "really":"cool"}']);

        var callbacks = [sinon.spy(), sinon.spy()];

        mockServerTest();

        console.log(server.requests);
        server.respond();
    })

})



// *** trying to use sinon to mock a server *** //


// describe('Stub With Fake Server', function() {

//      var stubData = [{
//         link : 'www.StubLink.com',
//         title : 'Stub Title',
//         description : 'This is a test of if you described something and such',
//     }]

//     beforeEach(function() {
//         var server = sinon.fakeServer.create();
//     })

//     afterEach(function() {
//         server.restore();
//     })

//     it('should send mock data back on get', function() {
//         server.respondWith('GET', '/testroute',
//             [200, {'Content-Type' : 'application/json'},
//             [stubData]])
//     })

// })
