$(function() {
    'use strict';

    $.plot("#flotBar1", [{
        data: [
            [0, 10],
            [2, 8],
            [4, 5],
            [6, 13],
            [8, 5],
            [10, 17],
            [12, 4],
            [14, 16]
        ]
    }], {
        series: {
            bars: {
                show: true,
                lineWidth: 0,
                fillColor: '#7571F9'
            }
        },
        grid: {
            borderWidth: 1,
            borderColor: 'transparent'
        },
        yaxis: {
            tickColor: 'transparent',
            font: {
                color: '#fff',
                size: 10
            }
        },
        xaxis: {
            tickColor: 'transparent',
            font: {
                color: '#fff',
                size: 10
            }
        }
    });

    $.plot("#flotBar2", [{
        data: [
            [0, 3],
            [2, 8],
            [4, 5],
            [6, 13],
            [8, 5],
            [10, 7],
            [12, 8],
            [14, 10]
        ],
        bars: {
            show: true,
            lineWidth: 0,
            fillColor: '#7571F9'
        }
    }, {
        data: [
            [1, 5],
            [3, 7],
            [5, 10],
            [7, 7],
            [9, 9],
            [11, 5],
            [13, 4],
            [15, 6]
        ],
        bars: {
            show: true,
            lineWidth: 0,
            fillColor: '#ff5e5e'
        }
    }], {
        grid: {
            borderWidth: 1,
            borderColor: 'transparent'
        },
        yaxis: {
            tickColor: 'transparent',
            font: {
                color: '#fff',
                size: 10
            }
        },
        xaxis: {
            tickColor: 'transparent',
            font: {
                color: '#fff',
                size: 10
            }
        }
    });

    var newCust = [
        [4, 1],
        [5, 3],
        [6, 6],
        [7, 5],
        [8, 7],
        [9, 8],
        [10, 10]
    ];
    var retCust = [
        [4, 1],
        [5, 2],
        [6, 5],
        [7, 3],
        [8, 5],
        [9, 6],
        [10, 9]
    ];

    var plot = $.plot($('#flotLine1'), [{
            data: newCust,
            label: 'New Customer',
            color: '#ff5e5e'
        },
        {
            data: retCust,
            label: 'Returning Customer',
            color: '#7571F9'
        }
    ], {
        series: {
            lines: {
                show: true,
                lineWidth: 1
            },
            shadowSize: 0
        },
        points: {
            show: false,
        },
        legend: {
            noColumns: 1,
            position: 'nw'
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderColor: '#ddd',
            borderWidth: 0,
            labelMargin: 5,
            backgroundColor: 'transparent'
        },
        yaxis: {
            min: 0,
            max: 15,
            color: 'transparent',
            font: {
                size: 10,
                color: '#999'
            }
        },
        xaxis: {
            color: 'transparent',
            font: {
                size: 10,
                color: '#999'
            }
        }
    });

    var plot = $.plot($('#flotLine2'), [{
            data: newCust,
            label: 'New Customer',
            color: '#ff5e5e'
        },
        {
            data: retCust,
            label: 'Returning Customer',
            color: '#7571F9'
        }
    ], {
        series: {
            lines: {
                show: false
            },
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                //fill: 0.4
            },
            shadowSize: 0
        },
        points: {
            show: false,
        },
        legend: {
            noColumns: 1,
            position: 'nw'
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderColor: '#ddd',
            borderWidth: 0,
            labelMargin: 5,
            backgroundColor: 'transparent'
        },
        yaxis: {
            min: 0,
            max: 15,
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        },
        xaxis: {
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        }
    });

    var newCust2 = [
        [0, 10],
        [1, 7],
        [2, 8],
        [3, 9],
        [4, 6],
        [5, 5],
        [6, 7]
    ];
    var retCust2 = [
        [0, 8],
        [1, 5],
        [2, 6],
        [3, 8],
        [4, 4],
        [5, 3],
        [6, 6]
    ];

    var plot = $.plot($('#flotLine3'), [{
            data: newCust2,
            label: 'New Customer',
            color: '#F37AAD'
        },
        {
            data: retCust2,
            label: 'Returning Customer',
            color: '#6AC3C9'
        }
    ], {
        series: {
            lines: {
                show: true,
                lineWidth: 1
            },
            shadowSize: 0
        },
        points: {
            show: true,
        },
        legend: {
            noColumns: 1,
            position: 'nw'
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderColor: '#ddd',
            borderWidth: 0,
            labelMargin: 5,
            backgroundColor: 'transparent'
        },
        yaxis: {
            min: 0,
            max: 15,
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        },
        xaxis: {
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        }
    });

    var plot = $.plot($('#flotLine4'), [{
            data: newCust2,
            label: 'New Customer',
            color: '#F37AAD'
        },
        {
            data: retCust2,
            label: 'Returning Customer',
            color: '#6AC3C9'
        }
    ], {
        series: {
            lines: {
                show: false
            },
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                //fill: 0.4
            },
            shadowSize: 0
        },
        points: {
            show: true,
        },
        legend: {
            noColumns: 1,
            position: 'nw'
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderColor: '#ddd',
            borderWidth: 0,
            labelMargin: 5,
            backgroundColor: 'transparent'
        },
        yaxis: {
            min: 0,
            max: 15,
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        },
        xaxis: {
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        }
    });

    var plot = $.plot($('#flotArea1'), [{
            data: newCust,
            label: 'New Customer',
            color: '#ff5e5e'
        },
        {
            data: retCust,
            label: 'Returning Customer',
            color: '#7571F9'
        }
    ], {
        series: {
            lines: {
                show: true,
                lineWidth: 0,
                fill: 0.8
            },
            shadowSize: 0
        },
        points: {
            show: false,
        },
        legend: {
            noColumns: 1,
            position: 'nw'
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderColor: '#ddd',
            borderWidth: 0,
            labelMargin: 5,
            backgroundColor: 'transparent'
        },
        yaxis: {
            min: 0,
            max: 15,
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        },
        xaxis: {
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        }
    });

    var plot = $.plot($('#flotArea2'), [{
            data: newCust,
            label: 'New Customer',
            color: '#ff5e5e'
        },
        {
            data: retCust,
            label: 'Returning Customer',
            color: '#7571F9'
        }
    ], {
        series: {
            lines: {
                show: false
            },
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 0,
                fill: 0.8
            },
            shadowSize: 0
        },
        points: {
            show: false,
        },
        legend: {
            noColumns: 1,
            position: 'nw'
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderColor: '#ddd',
            borderWidth: 0,
            labelMargin: 5,
            backgroundColor: 'transparent'
        },
        yaxis: {
            min: 0,
            max: 15,
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        },
        xaxis: {
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        }
    });

    var previousPoint = null;

    $('#flotLine3, #flotLine4').bind('plothover', function(event, pos, item) {
        $('#x').text(pos.x.toFixed(2));
        $('#y').text(pos.y.toFixed(2));

        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                $('#tooltip').remove();
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);

                showTooltip(item.pageX, item.pageY, item.series.label + ' of ' + x + ' = ' + y);
            }
        } else {

            $('#tooltip').remove();
            previousPoint = null;
        }
    });

    $('#flotLine3, #flotLine4').bind('plotclick', function(event, pos, item) {
        if (item) {
            plot.highlight(item.series, item.datapoint);
        }
    });

    function showTooltip(x, y, contents) {
        $('<div id="tooltip" class="tooltipflot">' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5
        }).appendTo('body').fadeIn(200);
    }


    /*********** REAL TIME UPDATES **************/

    var data = [],
        totalPoints = 50;

    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;
            if (y < 0) {
                y = 0;
            } else if (y > 100) {
                y = 100;
            }
            data.push(y);
        }
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }
        return res;
    }


    // Set up the control widget
    var updateInterval = 1000;

    var plot4 = $.plot('#flotRealtime1', [getRandomData()], {
        colors: ['#ff5e5e'],
        series: {
            lines: {
                show: true,
                lineWidth: 1
            },
            shadowSize: 0 // Drawing is faster without shadows
        },
        grid: {
            borderColor: 'transparent',
            borderWidth: 1,
            labelMargin: 5
        },
        xaxis: {
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        },
        yaxis: {
            min: 0,
            max: 100,
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        }
    });

    var plot5 = $.plot('#flotRealtime2', [getRandomData()], {
        colors: ['#ff5e5e'],
        series: {
            lines: {
                show: true,
                lineWidth: 0,
                fill: 0.9
            },
            shadowSize: 0 // Drawing is faster without shadows
        },
        grid: {
            borderColor: 'transparent',
            borderWidth: 1,
            labelMargin: 5
        },
        xaxis: {
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        },
        yaxis: {
            min: 0,
            max: 100,
            color: 'transparent',
            font: {
                size: 10,
                color: '#fff'
            }
        }
    });

    function update_plot4() {
        plot4.setData([getRandomData()]);
        plot4.draw();
        setTimeout(update_plot4, updateInterval);
    }

    function update_plot5() {
        plot5.setData([getRandomData()]);
        plot5.draw();
        setTimeout(update_plot5, updateInterval);
    }

    update_plot4();
    update_plot5();


    /**************** PIE CHART *******************/
    var piedata = [{
            label: "Series 1",
            data: [
                [1, 50]
            ],
            color: '#e1e8f0'
        },
        {
            label: "Series 2",
            data: [
                [1, 90]
            ],
            color: '#7571F9'
        },
        {
            label: "Series 3",
            data: [
                [1, 50]
            ],
            color: '#ff5e5e'
        },
        {
            label: "Series 4",
            data: [
                [1, 70]
            ],
            color: '#e62739'
        },
        {
            label: "Series 5",
            data: [
                [1, 30]
            ],
            color: '#9097c4'
        }
    ];

    $.plot('#flotPie1', piedata, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 2 / 3,
                    formatter: labelFormatter,
                    threshold: 0.1
                }
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        }
    });

    $.plot('#flotPie2', piedata, {
        series: {
            pie: {
                show: true,
                radius: 1,
                innerRadius: 0.5,
                label: {
                    show: true,
                    radius: 2 / 3,
                    formatter: labelFormatter,
                    threshold: 0.1
                }
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        }
    });

    function labelFormatter(label, series) {
        return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
    }

});