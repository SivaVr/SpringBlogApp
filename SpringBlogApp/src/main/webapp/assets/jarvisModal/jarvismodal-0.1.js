/*
  Copyright 2012 Siva Vr
  Version: 0.1 Timestamp: Wed May  03 017:22:42 PST 2017
  This alpha version not for commercial purpose.
 */
jQuery.fn.jarvisModal = function(b) {
	b = $(b)[0];
	var a = this[0];	
	var newModal = $(a);
	newModal.toggleClass('jarvismodal');
	var closeModal = newModal.find('.close-link');
	closeModal.click(function(){
		newModal.removeClass('jarvismodal');
	});		  
}