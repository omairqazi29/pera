(function($) {
    "use strict"

    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart1);
    function drawChart1() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
        ]);

        var options = {
                fontName: 'Hind Madurai',
                backgroundColor: 'transparent',
                height: 400,
                fontSize: 14,
                chartArea: {
                    left: '5%',
                    width: '90%',
                    height: 350
                },
                tooltip: {
                    textStyle: {
                        fontName: 'Hind Madurai',
                        fontSize: 14
                    }
                },
                hAxis: {
                    textStyle: {
                        color: "#FFFFFF"
                    },
                    gridlines: {
                        color: "transparent"
                    },
                    baselineColor: 'transparent'
                },
                vAxis: {
                    textStyle: {
                        color: "#FFFFFF"
                    },
                    baselineColor: 'transparent',
                    gridlines: {
                        color: 'transparent',
                        count: 10
                    },
                    minValue: 0
                },
                legend: {
                    position: 'top',
                    alignment: 'center',
                    textStyle: {
                        fontSize: 13,
                        color: "#FFFFFF"
                    }
                },
            };

        var chart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
        chart.draw(data, options);
    };

    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart2);
    function drawChart2() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2013',  1000,      400],
            ['2014',  1170,      460],
            ['2015',  660,       1120],
            ['2016',  1030,      540]
        ]);

        var options = {
            backgroundColor: 'transparent',
            height: 400,
            curveType: 'function',
            fontSize: 14,
            chartArea: {
                left: '5%',
                width: '90%',
                height: 300
            },
            pointSize: 4,
            tooltip: {
                textStyle: {
                    fontName: 'Hind Madurai',
                    fontSize: 14
                }
            },
            hAxis: {
                textStyle: {
                    color: "#FFFFFF"
                },
                gridlines: {
                    color: "#FFFFFF"
                },
                baselineColor: 'transparent'
            },
            vAxis: {
                // title: axislabel,

                textStyle: {
                    color: "#FFFFFF"
                },
                titleTextStyle: {
                    fontSize: 14,
                    italic: false
                },
                gridarea: {
                    color: '#f5f5f5',
                    count: 10
                },
                gridlines: {
                    color: 'transparent',
                },
                minValue: 0
            },
            legend: {
                position: 'top',
                alignment: 'end',
                textStyle: {
                    fontSize: 14,
                    color: "#FFFFFF"
                }
            },
        };

        var chart = new google.visualization.AreaChart(document.getElementById('area-chart'));
        chart.draw(data, options);
    };

    $(window).resize(function(){
        drawChart1();
        drawChart2();
    });
    
    
})(jQuery);