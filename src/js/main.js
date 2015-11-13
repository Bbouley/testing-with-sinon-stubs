// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  testing();
});

function testing() {
    $.ajax({
        url : '/testroute',
        datatype : 'json',
        success : function(data) {
            console.log(data);
        }
    })
}
