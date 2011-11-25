var ${widget.shortname}_message_controller = {
    init:function() {
	$('#messageForm').submit(function(event) {
	    var subject = $('#subject').val();
	    var message = $('#message').val();
	    ${widget.shortname}_message_controller.send(subject, message);
	});
	$('#cancel').click(function(event) {
	    ${widget.shortname}_message_controller.cancel();
	});

    },

    send:function(subject, message) {
	var proxy = widget.proxify(${message.url});
	var form = $("#messageForm");
	$.ajax({
	    type: 'POST',
	    url: proxy,
	    data: form.serialize,
	    success: function(data){
		alert("form submitted, response: " + data);
	    },
	    error: function(xhr, error) {
		alert("Sorry, there was an error sending your message");
	    }
	});
    },

    cancel:function() {
	history.back();
	return false;
    }
}

$('#home').live('pageshow',function(event) {
    ${widget.shortname}_message_controller.init(); 
});