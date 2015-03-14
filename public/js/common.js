/* Common app fetures */

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