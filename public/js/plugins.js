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
        disabled: true,
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
    $('.carousel').carousel({
        interval: false
    });
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
    /* Data provided to chart */
    var xAxisCategories = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        yAxixData = [ 1100, 3020, 3300, 3350, 3609, 6400, 10005, 14036, 20063, 30057, 30000, 26000];
    if($('.highcharts-container').length > 0){
        /* When chart init, provide x axis, y axis data and chart title */
        renderChart('#chartContainer-visits', 'Visits' ,xAxisCategories, yAxixData);
    } 
    /* Set the placement of a tooltip */
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
    /* Tooltip settings */
    $('.info-flyout').tooltip(placement);
    /* Tab selection settings */
    $('#sell-tabs a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
    /* Sell picker dropdown plugin */
    $('.dropdown-menu li .dropdown-select .card-content').on('click', function(){
        $(this).parents('.dropdown.dropdown-select').find('.card-content-head').html($(this).html());
    });
    /* Trigger click on first option so it's selected */
    $('.dropdown-menu li:first-child .dropdown-select .card-content').trigger('click');
    /* On/Off switch init */
    var swithcConfigObj = {
            size: "small",
            onColor: "primary",
            offColor: "primary",
            onText: "&nbsp;",
            offText: "&nbsp;",
            handleWidth: 10
        },
        dashboardSwitchConfig = {
            size: "small",
            onColor: "primary",
            offColor: "primary",
            onText: "ON",
            offText: "OFF",
            handleWidth: 10
        };
    if($("[name='rev-checkbox']").length > 0){
        $("[name='rev-checkbox']").bootstrapSwitch(swithcConfigObj);
    }

    if($("[name='dash-checkbox']").length > 0){
        $("[name='dash-checkbox']").bootstrapSwitch(dashboardSwitchConfig);
    }

    $('.switch-holder [name="on-switch"]').on('click', function(){
        $(this).prev().find('input').bootstrapSwitch('state', true)
    });

    $('.switch-holder [name="off-switch"]').on('click', function(){
        $(this).next().find('input').bootstrapSwitch('state', false)
    });
    /* Init datepicker */
    $('#date-from, #date-to').datepicker();
}());
// Place any jQuery/helper plugins in here.
