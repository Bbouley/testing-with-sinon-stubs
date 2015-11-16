// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

});


function mockServerTest() {
    $.get('/testroute', function(data) {
        console.log(data);
    });
}


function testing() {
    $.ajax({
        url : '/testroute',
        datatype : 'json',
        success : function(data) {
            console.log(data);
        }
    })
}
