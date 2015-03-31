/* Common app fetures */

/* Prevent default by class selector */
$('.prevent-default').on('click', function(event){
	event.preventDefault();
});
/* Password reveal function */
$('.reveal-pass').on({
	mousedown: function(event) {
		$(this).next().attr('type', 'text');
	},
	mouseout: function(){
		$(this).next().attr('type', 'password');
	},
	mouseup: function(event){
		$(this).next().attr('type', 'password');	
	}
});
/* Custom checkbox click event */
$('.custom-checkbox label').on('click', function(){
	$(this).toggleClass('checked');
});
/* Disabled layout */
$('[data-disabled="true"]').append('<div class="disabled"></div>');
/* Trigger file upload click */
$('.uploader').click(function(){
	$(this).parents('.uploaded-docs-holder').siblings('input[type=file]').click();
    return false;
});