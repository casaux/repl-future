$(document).ready(function(){
	
	
	$("a.au-btn").bind("click",function(){
		
		
		
		//$( "body" ).prepend( "<div id='modal'></div>" );

		
		/*
		
		var href = $(this).attr('href');


		$(this).html('Saving...');
		
		$("*").css("cursor", "progress");

		
             // Delay setting the location for one second
        setTimeout(function() {window.location = href}, 2000);
        return false;
		*/
		
	});
	
	
	$(".cancel").bind("click",function(){
		
		
		if (confirm('Are you sure you want to cancel your ARN application?')) {
			
			location.href="cancelled.html";
			
		} else {
			// Do nothing!
		}
		
	});
	
	
});