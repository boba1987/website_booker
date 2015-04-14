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

/* Set max height on scroll sections( e.g. Deals page ) */
var mainSectionHeight = $(window).height() - $('header').outerHeight();

function dealsMain(){
	$('.scroll-container').css({
		'max-height': mainSectionHeight - $('.dashboard-page-tittle').outerHeight(),
		'height' : mainSectionHeight - $('.dashboard-page-tittle').outerHeight()
	});
}

/* Set min height on .main */
(function(){
	$('.main').css('min-height', mainSectionHeight);
}());
