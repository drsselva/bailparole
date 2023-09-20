/*..............................Ajax Cookie And Csrf Stuff.............................................*/

	function getCookie(name) {
    	var cookieValue = null;
    	if (document.cookie && document.cookie != '') {
        	var cookies = document.cookie.split(';');
        	for (var i = 0; i < cookies.length; i++) {
            	var cookie = jQuery.trim(cookies[i]);
            	// Does this cookie string begin with the name we want?
            	if (cookie.substring(0, name.length + 1) == (name + '=')) {
                	cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                	break;
            	}
        	}
    	}
    	return cookieValue;
	}
	var csrftoken = getCookie('csrftoken');
	function csrfSafeMethod(method) {
   		// these HTTP methods do not require CSRF protection
    	return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	}
	$.ajaxSetup({
    	beforeSend: function(xhr, settings) {
        	if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            	xhr.setRequestHeader("X-CSRFToken", csrftoken);
        	}
    	}
	});


$('#guide-download-form').on('submit', function(e){
    e.preventDefault();
    var formData = $(this).serialize();
    $('#submit-for-pdf-btn').disable = true;
    $.ajax({
        url:$(this).attr('action'),
        type:"POST",
        csefmiddlewaretoken:csrftoken,
        dataType:'json',
        data:formData,
        success:function(data){
            if (data.success == 'yes'){
                // $('#id_subscribe_email').hide();
                // $('#guide-download-form').html(' ');
                var imgSrc = $('#tick-img-src').attr('href');

                $('#guide-download-form').hide();
                $('.show-after-form-submit').show();

            }
            else if (data.invalid === 'yes'){
                $('#guide-download-form-error').html('Please enter a valid email ');

            }
        },
        error:function(rs, e){
            alert('error');
        }
    })
});
