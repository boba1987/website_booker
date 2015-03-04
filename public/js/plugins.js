// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    /**
    Chosen plugin init
    */
    $(".chosen-select").chosen({disable_search_threshold: 10});
    /** 
    Range slider init
    */
    $( ".slider-range-blue" ).slider({
      range: true,
      min: 0,
      max: 1500,
      values: [ 500, 1300 ],
      slide: function( event, ui ) {
        $( ".slider-range-label-min" ).val( "$" + ui.values[ 0 ] );
        $( ".slider-range-label-max" ).val( "$" + ui.values[ 1 ] );
      }
    });
    $( ".slider-range-label-min" ).val( "$" + $( ".slider-range-blue" ).slider( "values", 0 ));
    $( ".slider-range-label-max" ).val( "$" + $( ".slider-range-blue" ).slider( "values", 1 ));
    /** 
    Rate slider init
    */
    $( "#rate-range-slider" ).slider({
        range: "max",
        value: 50,
        min: 1,
        max: 100,
        slide: function( event, ui ) {
            $( "#rate-range-slider-val" ).val( ui.value );
        }
    });
    $( "#rate-range-slider-val" ).val( $( "#rate-range-slider" ).slider( "value" ) );
}());
// Place any jQuery/helper plugins in here.
