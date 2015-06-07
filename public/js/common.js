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


function dealsMain(){
	/* Set max height on scroll sections( e.g. Deals page ) */
	var mainSectionHeight = $(window).outerHeight() - $('header').outerHeight();

	var min = 850;
	if(mainSectionHeight > 850){
		min = mainSectionHeight;
	}

	setTimeout(function() {
		$('.scroll-container').css({
			'max-height': mainSectionHeight - $('.dashboard-page-tittle').outerHeight(),
			'min-height' : min 
		});

		/* Set min height on .main */
		$('.main').css('min-height', min);

		$('.scroll-container').css('min-height', min - 55);

		$('#dashboardApprovals .approvals').css('min-height', $(document).height() - 55);
	}, 100);
}

dealsMain();

/* Step indicator - select a step before active one*/
$('.verified').last().css('display', 'block');


/* Dashboard mobile navigation */
$('.dashboard-nav .navbar-toggle').on('click', function(){
	$(this).siblings('.dashboard-nav').toggleClass('opened');
});

/* Open filter dropdown */
$('.filter-btn, .advanced-search').on('click', function(){
	$(this).parent('div').toggleClass('open');
});
/* Close filter dropdown */
$('.filter-dropdown .close').on('click', function(){
	$(this).parents('div').toggleClass('open');
});
/* Dashboard mobile navigation toggle */
$('aside .navbar-toggle').on('click', function(){
  $(this).parents('aside').toggleClass('opened');
});