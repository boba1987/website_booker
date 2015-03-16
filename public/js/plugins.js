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
    /**
    Carousel init
    */
    $('.carousel').carousel();
    /**
    Highcharts init and settings
    */
    function renderChart(id, title, xAxisCat, yAxisD){
        $(id).highcharts({
            chart: {
                type: 'area',
                height: 200
            },
            title: {
                text: title,
                style: {
                    "font-size": "14px",
                    "color": "#51575e"
                },
                align: "left",
                y: 10
            },
            legend: {
                enabled: false,
                borderColor: 'transparent',
                layout: 'vertical',
                itemStyle: {
                    "font-size": "14px",
                    "color": "#51575e"
                }
            },
            xAxis: {
                lineColor: 'transparent',
                type: 'datetime',
                labels: {
                    y: 15
                },
                dateTimeLabelFormats: {
                    day: '%b'
                },
                categories: xAxisCat
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    x: 15
                },
                gridLineColor: 'transparent',
                labels: {
                    formatter: function () {
                        return this.value / 1000 + 'k';
                    }
                }
            },
            tooltip: {
                pointFormat: '${point.y}',
                borderColor: 'transparent',
                backgroundColor: 'transparent',
                shadow: false,
                style: {
                    color: '#0084ff',
                    fontSize: '12px',
                    padding: '8px',
                    fontWeight: 'bold'
                }
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Visits',
                data: yAxisD,
                color: "#e6e9ee",
                fillOpacity: 1,
                marker: {
                    fillColor: '#0084ff'
                }
            }]
        });
    };
    var xAxisCategories = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        yAxixData = [ 1100, 3020, 3300, 3350, 3609, 6400, 10005, 14036, 20063, 30057, 30000, 26000];
    if($('.highcharts-container').length > 0){
        /* When chart init, provide x axis, y axis data and chart title */
        renderChart('#chartContainer-visits', 'Visits' ,xAxisCategories, yAxixData);
    } 

    var placement;
    /* Bottstrap tooltip plugin init */
    if($(window).width() < 1200){
        placement = {
            "placement" : "top"
        }
    }else{
        placement = {
            "placement" : "right"
        }
    }

    $('.info-flyout').tooltip(placement);
}());
// Place any jQuery/helper plugins in here.
