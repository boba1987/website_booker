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
	var min = 850;
	if(mainSectionHeight > 850){
		min = mainSectionHeight;
	}

	$('.scroll-container').css({
		'max-height': mainSectionHeight - $('.dashboard-page-tittle').outerHeight(),
		'min-height' : min 
	});

	/* Set min height on .main */
	$('.main').css('min-height', min);

	$('.scroll-container').css('min-height', min - 55);

	$('#dashboardApprovals .approvals').css('min-height', $(document).height() - 55);
}

dealsMain();
