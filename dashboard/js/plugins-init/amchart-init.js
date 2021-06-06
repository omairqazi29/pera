$(document).ready(function () {

    "use strict"; // Start of use strict

    //amchart
    var chart = AmCharts.makeChart("combined-bullet", {
        "type": "serial",
        "theme": "dark",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 2,
        "color": "#FFFFFF",
        "valueAxes": [{
            "id": "v1",
            "title": "Sales",
            "position": "left",
            "autoGridCount": false,
            "labelFunction": function (value) {
                return "$" + Math.round(value) + "M";
            }
        }, {
            "id": "v2",
            "title": "Market Days",
            "gridAlpha": 0,
            "position": "right",
            "autoGridCount": false
        }],
        "graphs": [{
            "id": "g3",
            "valueAxis": "v1",
            "lineColor": "#e1ede9",
            "fillColors": "#e1ede9",
            "fillAlphas": 1,
            "type": "column",
            "title": "Actual Sales",
            "valueField": "sales2",
            "clustered": false,
            "columnWidth": 0.5,
            "legendValueText": "$[[value]]M",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }, {
            "id": "g4",
            "valueAxis": "v1",
            "lineColor": "#03A9F5",
            "fillColors": "#03A9F5",
            "fillAlphas": 1,
            "type": "column",
            "title": "Target Sales",
            "valueField": "sales1",
            "clustered": false,
            "columnWidth": 0.3,
            "legendValueText": "$[[value]]M",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }, {
            "id": "g1",
            "valueAxis": "v2",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#0000FF",
            "type": "smoothedLine",
            "title": "Market Days",
            "useLineColorForBulletBorder": true,
            "valueField": "market1",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }, {
            "id": "g2",
            "valueAxis": "v2",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#F44336",
            "type": "smoothedLine",
            "dashLength": 5,
            "title": "Market Days ALL",
            "useLineColorForBulletBorder": true,
            "valueField": "market2",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }],
        "chartScrollbar": {
            "graph": "g1",
            "oppositeAxis": false,
            "offset": 30,
            "scrollbarHeight": 50,
            "backgroundAlpha": 0,
            "selectedBackgroundAlpha": 0.9,
            "selectedBackgroundColor": "#ffffff",
            "graphFillAlpha": 0,
            "graphLineAlpha": 0.5,
            "selectedGraphFillAlpha": 0,
            "selectedGraphLineAlpha": 1,
            "autoGridCount": true,
            "color": "#AAAAAA"
        },
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "legend": {
            "useGraphSettings": true,
            "color": "#FFFFFF",
            "position": "top"
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "export": {
            "enabled": true
        },
        "dataProvider": [{
            "date": "2013-01-16",
            "market1": 71,
            "market2": 75,
            "sales1": 5,
            "sales2": 8
        }, {
            "date": "2013-01-17",
            "market1": 74,
            "market2": 78,
            "sales1": 4,
            "sales2": 6
        }, {
            "date": "2013-01-18",
            "market1": 78,
            "market2": 88,
            "sales1": 5,
            "sales2": 2
        }, {
            "date": "2013-01-19",
            "market1": 85,
            "market2": 89,
            "sales1": 8,
            "sales2": 9
        }, {
            "date": "2013-01-20",
            "market1": 82,
            "market2": 89,
            "sales1": 9,
            "sales2": 6
        }, {
            "date": "2013-01-21",
            "market1": 83,
            "market2": 85,
            "sales1": 3,
            "sales2": 5
        }, {
            "date": "2013-01-22",
            "market1": 88,
            "market2": 92,
            "sales1": 5,
            "sales2": 7
        }, {
            "date": "2013-01-23",
            "market1": 85,
            "market2": 90,
            "sales1": 7,
            "sales2": 6
        }, {
            "date": "2013-01-24",
            "market1": 85,
            "market2": 91,
            "sales1": 9,
            "sales2": 5
        }, {
            "date": "2013-01-25",
            "market1": 80,
            "market2": 84,
            "sales1": 5,
            "sales2": 8
        }, {
            "date": "2013-01-26",
            "market1": 87,
            "market2": 92,
            "sales1": 4,
            "sales2": 8
        }, {
            "date": "2013-01-27",
            "market1": 84,
            "market2": 87,
            "sales1": 3,
            "sales2": 4
        }, {
            "date": "2013-01-28",
            "market1": 83,
            "market2": 88,
            "sales1": 5,
            "sales2": 7
        }, {
            "date": "2013-01-29",
            "market1": 84,
            "market2": 87,
            "sales1": 5,
            "sales2": 8
        }, {
            "date": "2013-01-30",
            "market1": 81,
            "market2": 85,
            "sales1": 4,
            "sales2": 7
        }]
    });

    var chartData = [{
        "date": "2017-01-01",
        "distance": 250,
        "townName": "New York",
        "townName2": "New York",
        "townSize": 25,
        "latitude": 40.71,
        "duration": 408
    }, {
        "date": "2017-01-02",
        "distance": 371,
        "townName": "Washington",
        "townSize": 14,
        "latitude": 38.89,
        "duration": 482
    }, {
        "date": "2017-01-03",
        "distance": 433,
        "townName": "Wilmington",
        "townSize": 6,
        "latitude": 34.22,
        "duration": 562
    }, {
        "date": "2017-01-04",
        "distance": 345,
        "townName": "Jacksonville",
        "townSize": 7,
        "latitude": 30.35,
        "duration": 379
    }, {
        "date": "2017-01-05",
        "distance": 480,
        "townName": "Miami",
        "townName2": "Miami",
        "townSize": 10,
        "latitude": 25.83,
        "duration": 501
    }, {
        "date": "2017-01-06",
        "distance": 386,
        "townName": "Tallahassee",
        "townSize": 7,
        "latitude": 30.46,
        "duration": 443
    }, {
        "date": "2017-01-07",
        "distance": 348,
        "townName": "New Orleans",
        "townSize": 10,
        "latitude": 29.94,
        "duration": 405
    }, {
        "date": "2017-01-08",
        "distance": 238,
        "townName": "Houston",
        "townName2": "Houston",
        "townSize": 16,
        "latitude": 29.76,
        "duration": 309
    }, {
        "date": "2017-01-09",
        "distance": 218,
        "townName": "Dalas",
        "townSize": 17,
        "latitude": 32.8,
        "duration": 287
    }, {
        "date": "2017-01-10",
        "distance": 349,
        "townName": "Oklahoma City",
        "townSize": 11,
        "latitude": 35.49,
        "duration": 485
    }, {
        "date": "2017-01-11",
        "distance": 603,
        "townName": "Kansas City",
        "townSize": 10,
        "latitude": 39.1,
        "duration": 890
    }, {
        "date": "2017-01-12",
        "distance": 534,
        "townName": "Denver",
        "townName2": "Denver",
        "townSize": 18,
        "latitude": 39.74,
        "duration": 810
    }, {
        "date": "2017-01-13",
        "townName": "Salt Lake City",
        "townSize": 12,
        "distance": 425,
        "duration": 670,
        "latitude": 40.75,
        "alpha": 0.4
    }, {
        "date": "2017-01-14",
        "latitude": 36.1,
        "duration": 470,
        "townName": "Las Vegas",
        "townName2": "Las Vegas",
        "bulletClass": "lastBullet"
    }, {
        "date": "2017-01-15"
    }, {
        "date": "2017-01-16"
    }];




    var chart = AmCharts.makeChart("duration-value-axis", {
        "type": "serial",
        "theme": "dark",

        "dataDateFormat": "YYYY-MM-DD",
        "dataProvider": chartData,

        "addClassNames": true,
        "startDuration": 1,
        "color": "#FFFFFF",
        "marginLeft": 0,

        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "minPeriod": "DD",
            "autoGridCount": false,
            "gridCount": 50,
            "gridAlpha": 0.1,
            // "gridColor": "#FFFFFF",
            "axisColor": "#555555",
            "dateFormats": [{
                "period": 'DD',
                "format": 'DD'
            }, {
                "period": 'WW',
                "format": 'MMM DD'
            }, {
                "period": 'MM',
                "format": 'MMM'
            }, {
                "period": 'YYYY',
                "format": 'YYYY'
            }]
        },

        "valueAxes": [{
            "id": "a1",
            "title": "distance",
            "gridAlpha": 0,
            "axisAlpha": 0
        }, {
            "id": "a2",
            "position": "right",
            "gridAlpha": 0,
            "axisAlpha": 0,
            "labelsEnabled": false
        }, {
            "id": "a3",
            "title": "duration",
            "position": "right",
            "gridAlpha": 0,
            "axisAlpha": 0,
            "inside": true,
            "duration": "mm",
            "durationUnits": {
                "DD": "d. ",
                "hh": "h ",
                "mm": "min",
                "ss": ""
            }
        }],
        "graphs": [{
            "id": "g1",
            "valueField": "distance",
            "title": "distance",
            "type": "column",
            "fillAlphas": 0.9,
            "valueAxis": "a1",
            "balloonText": "[[value]] miles",
            "legendValueText": "[[value]] mi",
            "legendPeriodValueText": "total: [[value.sum]] mi",
            "lineColor": "#428bca",
            "alphaField": "alpha"
        }, {
            "id": "g2",
            "valueField": "latitude",
            "classNameField": "bulletClass",
            "title": "latitude/city",
            "type": "line",
            "valueAxis": "a2",
            "lineColor": "#03A9F5",
            "lineThickness": 1,
            "legendValueText": "[[value]]/[[description]]",
            "descriptionField": "townName",
            "bullet": "round",
            "bulletSizeField": "townSize",
            "bulletBorderColor": "#0000FF",
            "bulletBorderAlpha": 1,
            "bulletBorderThickness": 2,
            "bulletColor": "#00A2FF",
            "labelText": "[[townName2]]",
            "labelPosition": "right",
            "balloonText": "latitude:[[value]]",
            "showBalloon": true,
            "animationPlayed": true
        }, {
            "id": "g3",
            "title": "duration",
            "valueField": "duration",
            "type": "line",
            "valueAxis": "a3",
            "lineColor": "#F44336",
            "balloonText": "[[value]]",
            "lineThickness": 1,
            "legendValueText": "[[value]]",
            "bullet": "square",
            "bulletBorderColor": "#F44336",
            "bulletBorderThickness": 1,
            "bulletBorderAlpha": 1,
            "dashLengthField": "dashLength",
            "animationPlayed": true
        }],

        "chartCursor": {
            "zoomable": false,
            "categoryBalloonDateFormat": "DD",
            "cursorAlpha": 0,
            "valueBalloonsEnabled": false
        },
        "legend": {
            "bulletType": "round",
            "equalWidths": false,
            "valueWidth": 120,
            "useGraphSettings": true,
            "color": "#FFFFFF"
        }
    });








    /**
     * SVG path for target icon
     */
    var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    /**
     * SVG path for plane icon
     */
    var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

    /**
     * Create the map
     */
    var map = AmCharts.makeChart("chartMap", {
        "type": "map",
        "theme": "light",

        "projection": "winkel3",
        "dataProvider": {
            "map": "worldLow",

            "lines": [{
                "id": "line1",
                "arc": -0.85,
                "alpha": 0.3,
                "latitudes": [23.684994, 48.8567, 43.8163, 34.3, 23, 61.524010, 20.593684, 33.223191],
                "longitudes": [90.356331, 2.3510, -79.4287, -118.15, -82, 105.318756, 78.962880, 43.679291]
            }, {
                "id": "line2",
                "alpha": 0,
                "color": "#F44336",
                "latitudes": [23.684994, 48.8567, 43.8163, 34.3, 23, 61.524010, 20.593684, 33.223191],
                "longitudes": [90.356331, 2.3510, -79.4287, -118.15, -82, 105.318756, 78.962880, 43.679291]
            }],
            "images": [{
                "svgPath": targetSVG,
                "title": "Bangladesh",
                "latitude": 23.684994,
                "longitude": 90.356331
            }, {
                "svgPath": targetSVG,
                "title": "Paris",
                "latitude": 48.8567,
                "longitude": 2.3510
            }, {
                "svgPath": targetSVG,
                "title": "Toronto",
                "latitude": 43.8163,
                "longitude": -79.4287
            }, {
                "svgPath": targetSVG,
                "title": "Los Angeles",
                "latitude": 34.3,
                "longitude": -118.15
            }, {
                "svgPath": targetSVG,
                "title": "Havana",
                "latitude": 23,
                "longitude": -82
            }, {}, {
                "svgPath": targetSVG,
                "title": "Russia",
                "latitude": 61.524010,
                "longitude": 105.318756
            }, {}, {
                "svgPath": targetSVG,
                "title": "India",
                "latitude": 20.593684,
                "longitude": 78.962880
            }, {}, {
                "svgPath": targetSVG,
                "title": "Iraq",
                "latitude": 33.223191,
                "longitude": 43.679291
            }, {
                "svgPath": planeSVG,
                "positionOnLine": 0,
                "color": "#0000FF",
                "alpha": 0.1,
                "animateAlongLine": true,
                "lineId": "line2",
                "flipDirection": true,
                "loop": true,
                "scale": 0.03,
                "positionScale": 1.3
            }, {
                "svgPath": planeSVG,
                "positionOnLine": 0,
                "color": "#0000FF",
                "animateAlongLine": true,
                "lineId": "line1",
                "flipDirection": true,
                "loop": true,
                "scale": 0.03,
                "positionScale": 1.8
            }]
        },

        "areasSettings": {
            "unlistedAreasColor": "#00A2FF"
        },

        "imagesSettings": {
            "color": "#E5343D",
            "rollOverColor": "#E5343D",
            "selectedColor": "#E5343D",
            "pauseDuration": 0.2,
            "animationDuration": 4,
            "adjustAnimationSpeed": true
        },

        "linesSettings": {
            "color": "#E5343D",
            "alpha": 0.4
        },

        "export": {
            "enabled": true
        }

    });








    //Column chart with images on top
    var chart = AmCharts.makeChart("column", {
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
            "name": "Salauddin",
            "points": 35654,
            "color": "#428bca",
            "bullet": "assets/plugins/amcharts/images/A04.png"
        }, {
            "name": "Tuhin",
            "points": 65456,
            "color": "#03A9F5",
            "bullet": "assets/plugins/amcharts/images/C02.png"
        }, {
            "name": "Jahangir",
            "points": 45724,
            "color": "#FFB61E",
            "bullet": "assets/plugins/amcharts/images/D02.png"
        }, {
            "name": "Tanjil",
            "points": 13654,
            "color": "#62d0f1",
            "bullet": "assets/plugins/amcharts/images/E01.png"
        }, {
            "name": "Naeem",
            "points": 53654,
            "color": "#E5343D",
            "bullet": "assets/plugins/amcharts/images/A04.png"
        }],
        "valueAxes": [{
            "maximum": 80000,
            "minimum": 0,
            "axisAlpha": 0,
            "dashLength": 4,
            "position": "left"
        }],
        "startDuration": 1,
        "graphs": [{
            "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
            "bulletOffset": 10,
            "bulletSize": 52,
            "colorField": "color",
            "cornerRadiusTop": 8,
            "customBulletField": "bullet",
            "fillAlphas": 0.9,
            "lineAlpha": 0,
            "type": "column",
            "valueField": "points"
        }],
        "marginTop": 0,
        "marginRight": 0,
        "marginLeft": 0,
        "marginBottom": 0,
        "autoMargins": false,
        "categoryField": "name",
        "categoryAxis": {
            "axisAlpha": 0,
            "gridAlpha": 0,
            "inside": true,
            "tickLength": 0
        },
        "export": {
            "enabled": true
        }
    });




    //Zoomable Value Axis
    var chart = AmCharts.makeChart("zoomable-chart", {
        "type": "serial",
        "theme": "light",
        "color": "#FFFFFF",
        "marginRight": 40,
        "marginLeft": 40,
        "autoMarginOffset": 20,
        "dataDateFormat": "YYYY-MM-DD",
        "valueAxes": [{
            "id": "v1",
            "axisAlpha": 0,
            "position": "left",
            "ignoreAxisWidth": true
        }],
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "graphs": [{
            "id": "g1",
            "balloon": {
                "drop": true,
                "adjustBorderColor": false,
                "color": "#ffffff",
                "type": "smoothedLine"
            },
            "fillAlphas": 0.2,
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "title": "red line",
            "useLineColorForBulletBorder": true,
            "valueField": "value",
            "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
        }],
        "chartCursor": {
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "zoomable": false,
            "valueZoomable": true,
            "valueLineAlpha": 0.5
        },
        "valueScrollbar": {
            "autoGridCount": true,
            "color": "#000000",
            "scrollbarHeight": 50
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "export": {
            "enabled": true
        },
        "dataProvider": [{
            "date": "2012-07-27",
            "value": 13
        }, {
            "date": "2012-07-28",
            "value": 11
        }, {
            "date": "2012-07-29",
            "value": 15
        }, {
            "date": "2012-07-30",
            "value": 16
        }, {
            "date": "2012-07-31",
            "value": 18
        }, {
            "date": "2012-08-01",
            "value": 13
        }, {
            "date": "2012-08-02",
            "value": 22
        }, {
            "date": "2012-08-03",
            "value": 23
        }, {
            "date": "2012-08-04",
            "value": 20
        }, {
            "date": "2012-08-05",
            "value": 17
        }, {
            "date": "2012-08-06",
            "value": 16
        }, {
            "date": "2012-08-07",
            "value": 18
        }, {
            "date": "2012-08-08",
            "value": 21
        }, {
            "date": "2012-08-09",
            "value": 26
        }, {
            "date": "2012-08-10",
            "value": 24
        }, {
            "date": "2012-08-11",
            "value": 29
        }, {
            "date": "2012-08-12",
            "value": 32
        }, {
            "date": "2012-08-13",
            "value": 18
        }, {
            "date": "2012-08-14",
            "value": 24
        }, {
            "date": "2012-08-15",
            "value": 22
        }, {
            "date": "2012-08-16",
            "value": 18
        }, {
            "date": "2012-08-17",
            "value": 19
        }, {
            "date": "2012-08-18",
            "value": 14
        }, {
            "date": "2012-08-19",
            "value": 15
        }, {
            "date": "2012-08-20",
            "value": 12
        }, {
            "date": "2012-08-21",
            "value": 8
        }, {
            "date": "2012-08-22",
            "value": 9
        }, {
            "date": "2012-08-23",
            "value": 8
        }, {
            "date": "2012-08-24",
            "value": 7
        }, {
            "date": "2012-08-25",
            "value": 5
        }, {
            "date": "2012-08-26",
            "value": 11
        }, {
            "date": "2012-08-27",
            "value": 13
        }, {
            "date": "2012-08-28",
            "value": 18
        }, {
            "date": "2012-08-29",
            "value": 20
        }, {
            "date": "2012-08-30",
            "value": 29
        }, {
            "date": "2012-08-31",
            "value": 33
        }, {
            "date": "2012-09-01",
            "value": 42
        }, {
            "date": "2012-09-02",
            "value": 35
        }, {
            "date": "2012-09-03",
            "value": 31
        }, {
            "date": "2012-09-04",
            "value": 47
        }, {
            "date": "2012-09-05",
            "value": 52
        }, {
            "date": "2012-09-06",
            "value": 46
        }, {
            "date": "2012-09-07",
            "value": 41
        }, {
            "date": "2012-09-08",
            "value": 43
        }, {
            "date": "2012-09-09",
            "value": 40
        }, {
            "date": "2012-09-10",
            "value": 39
        }, {
            "date": "2012-09-11",
            "value": 34
        }, {
            "date": "2012-09-12",
            "value": 29
        }, {
            "date": "2012-09-13",
            "value": 34
        }, {
            "date": "2012-09-14",
            "value": 37
        }, {
            "date": "2012-09-15",
            "value": 42
        }, {
            "date": "2012-09-16",
            "value": 49
        }, {
            "date": "2012-09-17",
            "value": 46
        }, {
            "date": "2012-09-18",
            "value": 47
        }, {
            "date": "2012-09-19",
            "value": 55
        }, {
            "date": "2012-09-20",
            "value": 59
        }, {
            "date": "2012-09-21",
            "value": 58
        }, {
            "date": "2012-09-22",
            "value": 57
        }, {
            "date": "2012-09-23",
            "value": 61
        }, {
            "date": "2012-09-24",
            "value": 59
        }, {
            "date": "2012-09-25",
            "value": 67
        }, {
            "date": "2012-09-26",
            "value": 65
        }, {
            "date": "2012-09-27",
            "value": 61
        }, {
            "date": "2012-09-28",
            "value": 66
        }, {
            "date": "2012-09-29",
            "value": 69
        }, {
            "date": "2012-09-30",
            "value": 71
        }, {
            "date": "2012-10-01",
            "value": 67
        }, {
            "date": "2012-10-02",
            "value": 63
        }, {
            "date": "2012-10-03",
            "value": 46
        }, {
            "date": "2012-10-04",
            "value": 32
        }, {
            "date": "2012-10-05",
            "value": 21
        }, {
            "date": "2012-10-06",
            "value": 18
        }, {
            "date": "2012-10-07",
            "value": 21
        }, {
            "date": "2012-10-08",
            "value": 28
        }, {
            "date": "2012-10-09",
            "value": 27
        }, {
            "date": "2012-10-10",
            "value": 36
        }, {
            "date": "2012-10-11",
            "value": 33
        }, {
            "date": "2012-10-12",
            "value": 31
        }, {
            "date": "2012-10-13",
            "value": 30
        }, {
            "date": "2012-10-14",
            "value": 34
        }, {
            "date": "2012-10-15",
            "value": 38
        }, {
            "date": "2012-10-16",
            "value": 37
        }, {
            "date": "2012-10-17",
            "value": 44
        }, {
            "date": "2012-10-18",
            "value": 49
        }, {
            "date": "2012-10-19",
            "value": 53
        }, {
            "date": "2012-10-20",
            "value": 57
        }, {
            "date": "2012-10-21",
            "value": 60
        }, {
            "date": "2012-10-22",
            "value": 61
        }, {
            "date": "2012-10-23",
            "value": 69
        }, {
            "date": "2012-10-24",
            "value": 67
        }, {
            "date": "2012-10-25",
            "value": 72
        }, {
            "date": "2012-10-26",
            "value": 77
        }, {
            "date": "2012-10-27",
            "value": 75
        }, {
            "date": "2012-10-28",
            "value": 70
        }, {
            "date": "2012-10-29",
            "value": 72
        }, {
            "date": "2012-10-30",
            "value": 70
        }, {
            "date": "2012-10-31",
            "value": 72
        }, {
            "date": "2012-11-01",
            "value": 73
        }, {
            "date": "2012-11-02",
            "value": 67
        }, {
            "date": "2012-11-03",
            "value": 68
        }, {
            "date": "2012-11-04",
            "value": 65
        }, {
            "date": "2012-11-05",
            "value": 71
        }, {
            "date": "2012-11-06",
            "value": 75
        }, {
            "date": "2012-11-07",
            "value": 74
        }, {
            "date": "2012-11-08",
            "value": 71
        }, {
            "date": "2012-11-09",
            "value": 76
        }, {
            "date": "2012-11-10",
            "value": 77
        }, {
            "date": "2012-11-11",
            "value": 81
        }, {
            "date": "2012-11-12",
            "value": 83
        }, {
            "date": "2012-11-13",
            "value": 80
        }, {
            "date": "2012-11-14",
            "value": 81
        }, {
            "date": "2012-11-15",
            "value": 87
        }, {
            "date": "2012-11-16",
            "value": 82
        }, {
            "date": "2012-11-17",
            "value": 86
        }, {
            "date": "2012-11-18",
            "value": 80
        }, {
            "date": "2012-11-19",
            "value": 87
        }, {
            "date": "2012-11-20",
            "value": 83
        }, {
            "date": "2012-11-21",
            "value": 85
        }, {
            "date": "2012-11-22",
            "value": 84
        }, {
            "date": "2012-11-23",
            "value": 82
        }, {
            "date": "2012-11-24",
            "value": 73
        }, {
            "date": "2012-11-25",
            "value": 71
        }, {
            "date": "2012-11-26",
            "value": 75
        }, {
            "date": "2012-11-27",
            "value": 79
        }, {
            "date": "2012-11-28",
            "value": 70
        }, {
            "date": "2012-11-29",
            "value": 73
        }, {
            "date": "2012-11-30",
            "value": 61
        }, {
            "date": "2012-12-01",
            "value": 62
        }, {
            "date": "2012-12-02",
            "value": 66
        }, {
            "date": "2012-12-03",
            "value": 65
        }, {
            "date": "2012-12-04",
            "value": 73
        }, {
            "date": "2012-12-05",
            "value": 79
        }, {
            "date": "2012-12-06",
            "value": 78
        }, {
            "date": "2012-12-07",
            "value": 78
        }, {
            "date": "2012-12-08",
            "value": 78
        }, {
            "date": "2012-12-09",
            "value": 74
        }, {
            "date": "2012-12-10",
            "value": 73
        }, {
            "date": "2012-12-11",
            "value": 75
        }, {
            "date": "2012-12-12",
            "value": 70
        }, {
            "date": "2012-12-13",
            "value": 77
        }, {
            "date": "2012-12-14",
            "value": 67
        }, {
            "date": "2012-12-15",
            "value": 62
        }, {
            "date": "2012-12-16",
            "value": 64
        }, {
            "date": "2012-12-17",
            "value": 61
        }, {
            "date": "2012-12-18",
            "value": 59
        }, {
            "date": "2012-12-19",
            "value": 53
        }, {
            "date": "2012-12-20",
            "value": 54
        }, {
            "date": "2012-12-21",
            "value": 56
        }, {
            "date": "2012-12-22",
            "value": 59
        }, {
            "date": "2012-12-23",
            "value": 58
        }, {
            "date": "2012-12-24",
            "value": 55
        }, {
            "date": "2012-12-25",
            "value": 52
        }, {
            "date": "2012-12-26",
            "value": 54
        }, {
            "date": "2012-12-27",
            "value": 50
        }, {
            "date": "2012-12-28",
            "value": 50
        }, {
            "date": "2012-12-29",
            "value": 51
        }, {
            "date": "2012-12-30",
            "value": 52
        }, {
            "date": "2012-12-31",
            "value": 58
        }, {
            "date": "2013-01-01",
            "value": 60
        }, {
            "date": "2013-01-02",
            "value": 67
        }, {
            "date": "2013-01-03",
            "value": 64
        }, {
            "date": "2013-01-04",
            "value": 66
        }, {
            "date": "2013-01-05",
            "value": 60
        }, {
            "date": "2013-01-06",
            "value": 63
        }, {
            "date": "2013-01-07",
            "value": 61
        }, {
            "date": "2013-01-08",
            "value": 60
        }, {
            "date": "2013-01-09",
            "value": 65
        }, {
            "date": "2013-01-10",
            "value": 75
        }, {
            "date": "2013-01-11",
            "value": 77
        }, {
            "date": "2013-01-12",
            "value": 78
        }, {
            "date": "2013-01-13",
            "value": 70
        }, {
            "date": "2013-01-14",
            "value": 70
        }, {
            "date": "2013-01-15",
            "value": 73
        }, {
            "date": "2013-01-16",
            "value": 71
        }, {
            "date": "2013-01-17",
            "value": 74
        }, {
            "date": "2013-01-18",
            "value": 78
        }, {
            "date": "2013-01-19",
            "value": 85
        }, {
            "date": "2013-01-20",
            "value": 82
        }, {
            "date": "2013-01-21",
            "value": 83
        }, {
            "date": "2013-01-22",
            "value": 88
        }, {
            "date": "2013-01-23",
            "value": 85
        }, {
            "date": "2013-01-24",
            "value": 85
        }, {
            "date": "2013-01-25",
            "value": 80
        }, {
            "date": "2013-01-26",
            "value": 87
        }, {
            "date": "2013-01-27",
            "value": 84
        }, {
            "date": "2013-01-28",
            "value": 83
        }, {
            "date": "2013-01-29",
            "value": 84
        }, {
            "date": "2013-01-30",
            "value": 81
        }]
    });


    var chart = AmCharts.makeChart("professional-candlesticks", {
        "type": "serial",
        "theme": "dark",
        "color": "#FFFFFF",
        "dataDateFormat": "YYYY-MM-DD",
        "valueAxes": [{
            "position": "left"
        }],
        "graphs": [{
            "id": "g1",
            "proCandlesticks": true,
            "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
            "closeField": "close",
            "fillColors": "#00A2FF",
            "highField": "high",
            "lineColor": "#00A2FF",
            "lineAlpha": 1,
            "lowField": "low",
            "fillAlphas": 0.9,
            "negativeFillColors": "#F44336",
            "negativeLineColor": "#F44336",
            "openField": "open",
            "title": "Price:",
            "type": "candlestick",
            "valueField": "close"
        }],
        "chartScrollbar": {
            "graph": "g1",
            "graphType": "line",
            "scrollbarHeight": 30
        },
        "chartCursor": {
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true
        },
        "dataProvider": [{
            "date": "2011-08-01",
            "open": "136.65",
            "high": "136.96",
            "low": "134.15",
            "close": "136.49"
        }, {
            "date": "2011-08-02",
            "open": "135.26",
            "high": "135.95",
            "low": "131.50",
            "close": "131.85"
        }, {
            "date": "2011-08-05",
            "open": "132.90",
            "high": "135.27",
            "low": "128.30",
            "close": "135.25"
        }, {
            "date": "2011-08-06",
            "open": "134.94",
            "high": "137.24",
            "low": "132.63",
            "close": "135.03"
        }, {
            "date": "2011-08-07",
            "open": "136.76",
            "high": "136.86",
            "low": "132.00",
            "close": "134.01"
        }, {
            "date": "2011-08-08",
            "open": "131.11",
            "high": "133.00",
            "low": "125.09",
            "close": "126.39"
        }, {
            "date": "2011-08-09",
            "open": "123.12",
            "high": "127.75",
            "low": "120.30",
            "close": "125.00"
        }, {
            "date": "2011-08-12",
            "open": "128.32",
            "high": "129.35",
            "low": "126.50",
            "close": "127.79"
        }, {
            "date": "2011-08-13",
            "open": "128.29",
            "high": "128.30",
            "low": "123.71",
            "close": "124.03"
        }, {
            "date": "2011-08-14",
            "open": "122.74",
            "high": "124.86",
            "low": "119.65",
            "close": "119.90"
        }, {
            "date": "2011-08-15",
            "open": "117.01",
            "high": "118.50",
            "low": "111.62",
            "close": "117.05"
        }, {
            "date": "2011-08-16",
            "open": "122.01",
            "high": "123.50",
            "low": "119.82",
            "close": "122.06"
        }, {
            "date": "2011-08-19",
            "open": "123.96",
            "high": "124.50",
            "low": "120.50",
            "close": "122.22"
        }, {
            "date": "2011-08-20",
            "open": "122.21",
            "high": "128.96",
            "low": "121.00",
            "close": "127.57"
        }, {
            "date": "2011-08-21",
            "open": "131.22",
            "high": "132.75",
            "low": "130.33",
            "close": "132.51"
        }, {
            "date": "2011-08-22",
            "open": "133.09",
            "high": "133.34",
            "low": "129.76",
            "close": "131.07"
        }, {
            "date": "2011-08-23",
            "open": "130.53",
            "high": "135.37",
            "low": "129.81",
            "close": "135.30"
        }, {
            "date": "2011-08-26",
            "open": "133.39",
            "high": "134.66",
            "low": "132.10",
            "close": "132.25"
        }, {
            "date": "2011-08-27",
            "open": "130.99",
            "high": "132.41",
            "low": "126.63",
            "close": "126.82"
        }, {
            "date": "2011-08-28",
            "open": "129.88",
            "high": "134.18",
            "low": "129.54",
            "close": "134.08"
        }, {
            "date": "2011-08-29",
            "open": "132.67",
            "high": "138.25",
            "low": "132.30",
            "close": "136.25"
        }, {
            "date": "2011-08-30",
            "open": "139.49",
            "high": "139.65",
            "low": "137.41",
            "close": "138.48"
        }, {
            "date": "2011-09-03",
            "open": "139.94",
            "high": "145.73",
            "low": "139.84",
            "close": "144.16"
        }, {
            "date": "2011-09-04",
            "open": "144.97",
            "high": "145.84",
            "low": "136.10",
            "close": "136.76"
        }, {
            "date": "2011-09-05",
            "open": "135.56",
            "high": "137.57",
            "low": "132.71",
            "close": "135.01"
        }, {
            "date": "2011-09-06",
            "open": "132.01",
            "high": "132.30",
            "low": "130.00",
            "close": "131.77"
        }, {
            "date": "2011-09-09",
            "open": "136.99",
            "high": "138.04",
            "low": "133.95",
            "close": "136.71"
        }, {
            "date": "2011-09-10",
            "open": "137.90",
            "high": "138.30",
            "low": "133.75",
            "close": "135.49"
        }, {
            "date": "2011-09-11",
            "open": "135.99",
            "high": "139.40",
            "low": "135.75",
            "close": "136.85"
        }, {
            "date": "2011-09-12",
            "open": "138.83",
            "high": "139.00",
            "low": "136.65",
            "close": "137.20"
        }, {
            "date": "2011-09-13",
            "open": "136.57",
            "high": "138.98",
            "low": "136.20",
            "close": "138.81"
        }, {
            "date": "2011-09-16",
            "open": "138.99",
            "high": "140.59",
            "low": "137.60",
            "close": "138.41"
        }, {
            "date": "2011-09-17",
            "open": "139.06",
            "high": "142.85",
            "low": "137.83",
            "close": "140.92"
        }, {
            "date": "2011-09-18",
            "open": "143.02",
            "high": "143.16",
            "low": "139.40",
            "close": "140.77"
        }, {
            "date": "2011-09-19",
            "open": "140.15",
            "high": "141.79",
            "low": "139.32",
            "close": "140.31"
        }, {
            "date": "2011-09-20",
            "open": "141.14",
            "high": "144.65",
            "low": "140.31",
            "close": "144.15"
        }, {
            "date": "2011-09-23",
            "open": "146.73",
            "high": "149.85",
            "low": "146.65",
            "close": "148.28"
        }, {
            "date": "2011-09-24",
            "open": "146.84",
            "high": "153.22",
            "low": "146.82",
            "close": "153.18"
        }, {
            "date": "2011-09-25",
            "open": "154.47",
            "high": "155.00",
            "low": "151.25",
            "close": "152.77"
        }, {
            "date": "2011-09-26",
            "open": "153.77",
            "high": "154.52",
            "low": "152.32",
            "close": "154.50"
        }, {
            "date": "2011-09-27",
            "open": "153.44",
            "high": "154.60",
            "low": "152.75",
            "close": "153.47"
        }, {
            "date": "2011-09-30",
            "open": "154.63",
            "high": "157.41",
            "low": "152.93",
            "close": "156.34"
        }, {
            "date": "2011-10-01",
            "open": "156.55",
            "high": "158.59",
            "low": "155.89",
            "close": "158.45"
        }, {
            "date": "2011-10-02",
            "open": "157.78",
            "high": "159.18",
            "low": "157.01",
            "close": "157.92"
        }, {
            "date": "2011-10-03",
            "open": "158.00",
            "high": "158.08",
            "low": "153.50",
            "close": "156.24"
        }, {
            "date": "2011-10-04",
            "open": "158.37",
            "high": "161.58",
            "low": "157.70",
            "close": "161.45"
        }, {
            "date": "2011-10-07",
            "open": "163.49",
            "high": "167.91",
            "low": "162.97",
            "close": "167.91"
        }, {
            "date": "2011-10-08",
            "open": "170.20",
            "high": "171.11",
            "low": "166.68",
            "close": "167.86"
        }, {
            "date": "2011-10-09",
            "open": "167.55",
            "high": "167.88",
            "low": "165.60",
            "close": "166.79"
        }, {
            "date": "2011-10-10",
            "open": "169.49",
            "high": "171.88",
            "low": "153.21",
            "close": "162.23"
        }, {
            "date": "2011-10-11",
            "open": "163.01",
            "high": "167.28",
            "low": "161.80",
            "close": "167.25"
        }, {
            "date": "2011-10-14",
            "open": "167.98",
            "high": "169.57",
            "low": "163.50",
            "close": "166.98"
        }, {
            "date": "2011-10-15",
            "open": "165.54",
            "high": "170.18",
            "low": "165.15",
            "close": "169.58"
        }, {
            "date": "2011-10-16",
            "open": "172.69",
            "high": "173.04",
            "low": "169.18",
            "close": "172.75"
        }, {
            "date": "2011-10-17",
            "open": "171.50",
            "high": "174.19",
            "low": "171.05",
            "close": "173.50"
        }, {
            "date": "2011-10-18",
            "open": "174.24",
            "high": "174.63",
            "low": "170.00",
            "close": "170.42"
        }, {
            "date": "2011-10-21",
            "open": "170.35",
            "high": "174.90",
            "low": "169.96",
            "close": "174.36"
        }, {
            "date": "2011-10-22",
            "open": "188.56",
            "high": "188.60",
            "low": "182.76",
            "close": "186.16"
        }, {
            "date": "2011-10-23",
            "open": "185.81",
            "high": "187.21",
            "low": "179.24",
            "close": "185.93"
        }, {
            "date": "2011-10-24",
            "open": "184.87",
            "high": "185.90",
            "low": "181.66",
            "close": "182.78"
        }, {
            "date": "2011-10-25",
            "open": "185.29",
            "high": "185.37",
            "low": "182.88",
            "close": "184.70"
        }, {
            "date": "2011-10-28",
            "open": "185.45",
            "high": "186.59",
            "low": "184.70",
            "close": "185.09"
        }, {
            "date": "2011-10-29",
            "open": "186.18",
            "high": "189.37",
            "low": "184.73",
            "close": "187.00"
        }, {
            "date": "2011-10-30",
            "open": "187.63",
            "high": "190.12",
            "low": "184.95",
            "close": "189.95"
        }, {
            "date": "2011-10-31",
            "open": "188.60",
            "high": "190.10",
            "low": "180.00",
            "close": "187.44"
        }, {
            "date": "2011-11-01",
            "open": "189.21",
            "high": "189.44",
            "low": "183.49",
            "close": "187.87"
        }, {
            "date": "2011-11-04",
            "open": "185.29",
            "high": "188.96",
            "low": "184.24",
            "close": "186.18"
        }, {
            "date": "2011-11-05",
            "open": "187.05",
            "high": "192.00",
            "low": "185.27",
            "close": "191.79"
        }, {
            "date": "2011-11-06",
            "open": "190.61",
            "high": "192.68",
            "low": "186.13",
            "close": "186.30"
        }, {
            "date": "2011-11-07",
            "open": "186.67",
            "high": "186.90",
            "low": "167.77",
            "close": "175.47"
        }, {
            "date": "2011-11-08",
            "open": "171.15",
            "high": "175.12",
            "low": "165.21",
            "close": "165.37"
        }, {
            "date": "2011-11-11",
            "open": "165.28",
            "high": "167.70",
            "low": "150.63",
            "close": "153.76"
        }, {
            "date": "2011-11-12",
            "open": "160.85",
            "high": "170.98",
            "low": "153.76",
            "close": "169.96"
        }, {
            "date": "2011-11-13",
            "open": "177.16",
            "high": "177.57",
            "low": "163.74",
            "close": "166.11"
        }, {
            "date": "2011-11-14",
            "open": "166.39",
            "high": "169.59",
            "low": "160.30",
            "close": "164.30"
        }, {
            "date": "2011-11-15",
            "open": "165.30",
            "high": "167.02",
            "low": "159.33",
            "close": "166.39"
        }, {
            "date": "2011-11-18",
            "open": "166.10",
            "high": "168.20",
            "low": "162.10",
            "close": "163.95"
        }, {
            "date": "2011-11-19",
            "open": "165.67",
            "high": "171.79",
            "low": "163.53",
            "close": "168.85"
        }, {
            "date": "2011-11-20",
            "open": "165.84",
            "high": "172.35",
            "low": "164.67",
            "close": "168.46"
        }, {
            "date": "2011-11-22",
            "open": "172.00",
            "high": "172.05",
            "low": "169.75",
            "close": "171.54"
        }, {
            "date": "2011-11-25",
            "open": "173.59",
            "high": "177.27",
            "low": "172.35",
            "close": "172.54"
        }, {
            "date": "2011-11-26",
            "open": "175.22",
            "high": "175.79",
            "low": "170.01",
            "close": "174.81"
        }, {
            "date": "2011-11-27",
            "open": "176.82",
            "high": "180.60",
            "low": "175.35",
            "close": "180.22"
        }, {
            "date": "2011-11-28",
            "open": "179.43",
            "high": "185.17",
            "low": "179.15",
            "close": "184.29"
        }, {
            "date": "2011-11-29",
            "open": "187.34",
            "high": "187.70",
            "low": "179.70",
            "close": "182.22"
        }, {
            "date": "2011-12-02",
            "open": "181.86",
            "high": "184.14",
            "low": "177.70",
            "close": "178.86"
        }, {
            "date": "2011-12-03",
            "open": "177.15",
            "high": "180.90",
            "low": "176.99",
            "close": "179.81"
        }, {
            "date": "2011-12-04",
            "open": "182.89",
            "high": "186.00",
            "low": "182.41",
            "close": "185.50"
        }, {
            "date": "2011-12-05",
            "open": "186.19",
            "high": "190.10",
            "low": "186.12",
            "close": "189.95"
        }, {
            "date": "2011-12-06",
            "open": "190.54",
            "high": "194.99",
            "low": "188.04",
            "close": "194.30"
        }, {
            "date": "2011-12-09",
            "open": "193.59",
            "high": "195.66",
            "low": "192.69",
            "close": "194.21"
        }, {
            "date": "2011-12-10",
            "open": "194.75",
            "high": "196.83",
            "low": "187.39",
            "close": "188.54"
        }, {
            "date": "2011-12-11",
            "open": "193.44",
            "high": "194.48",
            "low": "185.76",
            "close": "190.86"
        }, {
            "date": "2011-12-12",
            "open": "190.19",
            "high": "192.12",
            "low": "187.82",
            "close": "191.83"
        }, {
            "date": "2011-12-13",
            "open": "190.37",
            "high": "193.20",
            "low": "189.54",
            "close": "190.39"
        }, {
            "date": "2011-12-16",
            "open": "190.72",
            "high": "192.65",
            "low": "182.98",
            "close": "184.40"
        }, {
            "date": "2011-12-17",
            "open": "186.52",
            "high": "187.33",
            "low": "178.60",
            "close": "182.98"
        }, {
            "date": "2011-12-18",
            "open": "182.98",
            "high": "184.64",
            "low": "180.90",
            "close": "183.12"
        }, {
            "date": "2011-12-19",
            "open": "185.43",
            "high": "187.83",
            "low": "183.33",
            "close": "187.21"
        }, {
            "date": "2011-12-20",
            "open": "190.12",
            "high": "193.91",
            "low": "189.89",
            "close": "193.91"
        }, {
            "date": "2011-12-23",
            "open": "195.03",
            "high": "199.33",
            "low": "194.79",
            "close": "198.80"
        }, {
            "date": "2011-12-25",
            "open": "199.01",
            "high": "200.96",
            "low": "196.82",
            "close": "198.95"
        }, {
            "date": "2011-12-26",
            "open": "198.95",
            "high": "202.96",
            "low": "197.80",
            "close": "198.57"
        }, {
            "date": "2011-12-27",
            "open": "200.59",
            "high": "201.56",
            "low": "196.88",
            "close": "199.83"
        }, {
            "date": "2011-12-30",
            "open": "199.50",
            "high": "200.50",
            "low": "197.75",
            "close": "198.08"
        }, {
            "date": "2012-01-01",
            "open": "199.27",
            "high": "200.26",
            "low": "192.55",
            "close": "194.84"
        }, {
            "date": "2012-01-02",
            "open": "195.41",
            "high": "197.39",
            "low": "192.69",
            "close": "194.93"
        }, {
            "date": "2012-01-03",
            "open": "191.45",
            "high": "193.00",
            "low": "178.89",
            "close": "180.05"
        }, {
            "date": "2012-01-06",
            "open": "181.25",
            "high": "183.60",
            "low": "170.23",
            "close": "177.64"
        }, {
            "date": "2012-01-07",
            "open": "180.14",
            "high": "182.46",
            "low": "170.80",
            "close": "171.25"
        }, {
            "date": "2012-01-08",
            "open": "171.30",
            "high": "179.50",
            "low": "168.30",
            "close": "179.40"
        }, {
            "date": "2012-01-09",
            "open": "177.58",
            "high": "181.00",
            "low": "175.41",
            "close": "178.02"
        }, {
            "date": "2012-01-10",
            "open": "176.00",
            "high": "177.85",
            "low": "170.00",
            "close": "172.69"
        }, {
            "date": "2012-01-13",
            "open": "177.52",
            "high": "179.42",
            "low": "175.17",
            "close": "178.78"
        }, {
            "date": "2012-01-14",
            "open": "177.72",
            "high": "179.22",
            "low": "164.66",
            "close": "169.04"
        }, {
            "date": "2012-01-15",
            "open": "165.23",
            "high": "169.01",
            "low": "156.70",
            "close": "159.64"
        }, {
            "date": "2012-01-16",
            "open": "161.51",
            "high": "165.36",
            "low": "158.42",
            "close": "160.89"
        }, {
            "date": "2012-01-17",
            "open": "161.71",
            "high": "165.75",
            "low": "159.61",
            "close": "161.36"
        }, {
            "date": "2012-01-21",
            "open": "148.06",
            "high": "159.98",
            "low": "146.00",
            "close": "155.64"
        }, {
            "date": "2012-01-22",
            "open": "136.19",
            "high": "140.00",
            "low": "126.14",
            "close": "139.07"
        }, {
            "date": "2012-01-23",
            "open": "139.99",
            "high": "140.70",
            "low": "132.01",
            "close": "135.60"
        }, {
            "date": "2012-01-24",
            "open": "138.99",
            "high": "139.09",
            "low": "129.61",
            "close": "130.01"
        }, {
            "date": "2012-01-27",
            "open": "128.16",
            "high": "133.20",
            "low": "126.45",
            "close": "130.01"
        }, {
            "date": "2012-01-28",
            "open": "131.15",
            "high": "132.79",
            "low": "129.05",
            "close": "131.54"
        }, {
            "date": "2012-01-29",
            "open": "131.37",
            "high": "135.45",
            "low": "130.00",
            "close": "132.18"
        }, {
            "date": "2012-01-30",
            "open": "129.45",
            "high": "136.65",
            "low": "129.40",
            "close": "135.36"
        }, {
            "date": "2012-01-31",
            "open": "136.24",
            "high": "136.59",
            "low": "132.18",
            "close": "133.75"
        }, {
            "date": "2012-02-03",
            "open": "134.21",
            "high": "135.90",
            "low": "131.42",
            "close": "131.65"
        }, {
            "date": "2012-02-04",
            "open": "130.43",
            "high": "134.00",
            "low": "128.90",
            "close": "129.36"
        }, {
            "date": "2012-02-05",
            "open": "130.83",
            "high": "131.92",
            "low": "121.77",
            "close": "122.00"
        }, {
            "date": "2012-02-06",
            "open": "119.97",
            "high": "124.78",
            "low": "117.27",
            "close": "121.24"
        }, {
            "date": "2012-02-07",
            "open": "122.08",
            "high": "125.70",
            "low": "121.60",
            "close": "125.48"
        }, {
            "date": "2012-02-10",
            "open": "128.01",
            "high": "129.98",
            "low": "127.20",
            "close": "129.45"
        }, {
            "date": "2012-02-11",
            "open": "130.70",
            "high": "131.00",
            "low": "123.62",
            "close": "124.86"
        }, {
            "date": "2012-02-12",
            "open": "126.68",
            "high": "129.78",
            "low": "125.63",
            "close": "129.40"
        }],
        "export": {
            "enabled": true,
            "position": "bottom-right"
        },
        
        
    });

    var chart = AmCharts.makeChart("comparing-stock-indices", {
        "type": "stock",
        "theme": "dark",
        "color": "#ffffff",
        "dataSets": [{
            "title": "MSFT",
            "fieldMappings": [{
                "fromField": "Open",
                "toField": "open"
            }, {
                "fromField": "High",
                "toField": "high"
            }, {
                "fromField": "Low",
                "toField": "low"
            }, {
                "fromField": "Close",
                "toField": "close"
            }, {
                "fromField": "Volume",
                "toField": "volume"
            }],
            "compared": false,
            "categoryField": "Date",

            /**
             * data loader for data set data
             */
            "dataLoader": {
                "url": "https://www.amcharts.com/wp-content/uploads/assets/stock/MSFT.csv",
                "format": "csv",
                "showCurtain": true,
                "showErrors": true,
                "async": true,
                "reverse": true,
                "delimiter": ",",
                "useColumnNames": true
            },

            /**
             * data loader for events data
             */
            "eventDataLoader": {
                "url": "https://www.amcharts.com/wp-content/uploads/assets/stock/MSFT_events.csv",
                "format": "csv",
                "showCurtain": true,
                "showErrors": true,
                "async": true,
                "reverse": true,
                "delimiter": ",",
                "useColumnNames": true,
                "postProcess": function (data) {
                    for (var x in data) {
                        switch (data[x].Type) {
                            case 'A':
                                var color = "#00A2FF";
                                break;
                            default:
                                var color = "#DCDCDC";
                                break;
                        }
                        data[x].Description = data[x].Description.replace("Upgrade", "<strong style=\"color: #0c0\">Upgrade</strong>").replace("Downgrade", "<strong style=\"color: #c00\">Downgrade</strong>");
                        data[x] = {
                            "type": "pin",
                            "graph": "g1",
                            "backgroundColor": color,
                            "date": data[x].Date,
                            "text": data[x].Type,
                            "description": "<strong>" + data[x].Title + "</strong><br />" + data[x].Description
                        };
                    }
                    return data;
                }
            }

        }, {
            "title": "TXN",
            "fieldMappings": [{
                "fromField": "Open",
                "toField": "open"
            }, {
                "fromField": "High",
                "toField": "high"
            }, {
                "fromField": "Low",
                "toField": "low"
            }, {
                "fromField": "Close",
                "toField": "close"
            }, {
                "fromField": "Volume",
                "toField": "volume"
            }],
            "compared": true,
            "categoryField": "Date",
            "dataLoader": {
                "url": "https://www.amcharts.com/wp-content/uploads/assets/stock/TXN.csv",
                "format": "csv",
                "showCurtain": true,
                "showErrors": true,
                "async": true,
                "reverse": true,
                "delimiter": ",",
                "useColumnNames": true
            }
        }],
        "dataDateFormat": "YYYY-MM-DD",

        "panels": [{
            "title": "Value",
            "percentHeight": 70,

            "stockGraphs": [{
                "type": "candlestick",
                "id": "g1",
                "openField": "open",
                "closeField": "close",
                "highField": "high",
                "lowField": "low",
                "valueField": "close",
                "lineColor": "#fff",
                "fillColors": "#fff",
                "negativeLineColor": "#F44336",
                "negativeFillColors": "#F44336",
                "fillAlphas": 1,
                "comparedGraphLineThickness": 2,
                "columnWidth": 0.7,
                "useDataSetColors": false,
                "comparable": true,
                "compareField": "close",
                "showBalloon": false,
                "proCandlesticks": true
            }],

            "stockLegend": {
                "valueTextRegular": undefined,
                "periodValueTextComparing": "[[percents.value.close]]%"
            }

        },

        {
            "title": "Volume",
            "percentHeight": 30,
            "marginTop": 1,
            "columnWidth": 0.6,
            "showCategoryAxis": false,

            "stockGraphs": [{
                "valueField": "volume",
                "openField": "open",
                "type": "column",
                "showBalloon": false,
                "fillAlphas": 1,
                "lineColor": "#fff",
                "fillColors": "#fff",
                "negativeLineColor": "#F44336",
                "negativeFillColors": "#F44336",
                "useDataSetColors": false
            }],

            "stockLegend": {
                "markerType": "none",
                "markerSize": 0,
                "labelText": "",
                "periodValueTextRegular": "[[value.close]]"
            },

            "valueAxes": [{
                "usePrefixes": true
            }]
        }
        ],

        "panelsSettings": {
               "color": "#fff",
            "plotAreaFillColors": "transparent",
            "plotAreaFillAlphas": 1,
            "marginLeft": 60,
            "marginTop": 5,
            "marginBottom": 5
        },

        "chartScrollbarSettings": {
            "graph": "g1",
            "graphType": "line",
            "usePeriod": "WW",
            "backgroundColor": "transparent",
            "graphFillColor": "#666",
            "graphFillAlpha": 0.5,
            "gridColor": "#555",
            "gridAlpha": 1,
            "selectedBackgroundColor": "#444",
            "selectedGraphFillAlpha": 1
        },

        "categoryAxesSettings": {
            "equalSpacing": true,
            "gridColor": "transparent",
            "gridAlpha": 1
        },

        "valueAxesSettings": {
            "gridColor": "transparent",
            "gridAlpha": 1,
            "inside": false,
            "showLastLabel": true
        },

        "chartCursorSettings": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true
        },

        "legendSettings": {
            "color": "#fff"
        },

        "stockEventsSettings": {
            "showAt": "high",
            "type": "pin"
        },

        "balloon": {
            "textAlign": "left",
            "offsetY": 10
        },

        "periodSelector": {
            "position": "bottom",
            "periods": [{
                "period": "DD",
                "count": 10,
                "label": "10D"
            }, {
                "period": "MM",
                "count": 1,
                "label": "1M"
            }, {
                "period": "MM",
                "count": 6,
                "label": "6M"
            }, {
                "period": "YYYY",
                "count": 1,
                "label": "1Y"
            }, {
                "period": "YYYY",
                "count": 2,
                "selected": true,
                "label": "2Y"
            },
            /* {
                 "period": "YTD",
                 "label": "YTD"
               },*/
            {
                "period": "MAX",
                "label": "MAX"
            }
            ]
        },
        
        
    });


    var multiplePanelData = [];
    generateChartData();


    function generateChartData() {
        var firstDate = new Date();
        firstDate.setHours(0, 0, 0, 0);
        firstDate.setDate(firstDate.getDate() - 2000);

        for (var i = 0; i < 2000; i++) {
            var newDate = new Date(firstDate);

            newDate.setDate(newDate.getDate() + i);

            var open = Math.round(Math.random() * (30) + 100);
            var close = open + Math.round(Math.random() * (15) - Math.random() * 10);

            var low;
            if (open < close) {
                low = open - Math.round(Math.random() * 5);
            } else {
                low = close - Math.round(Math.random() * 5);
            }

            var high;
            if (open < close) {
                high = close + Math.round(Math.random() * 5);
            } else {
                high = open + Math.round(Math.random() * 5);
            }

            var volume = Math.round(Math.random() * (1000 + i)) + 100 + i;
            var value = Math.round(Math.random() * (30) + 100);

            multiplePanelData[i] = ({
                "date": newDate,
                "open": open,
                "close": close,
                "high": high,
                "low": low,
                "volume": volume,
                "value": value
            });
        }
    }

    var chart = AmCharts.makeChart("multiple-panel-data", {
        "type": "stock",
        "theme": "light",
        "dataSets": [{
            "fieldMappings": [{
                "fromField": "open",
                "toField": "open"
            }, {
                "fromField": "close",
                "toField": "close"
            }, {
                "fromField": "high",
                "toField": "high"
            }, {
                "fromField": "low",
                "toField": "low"
            }, {
                "fromField": "volume",
                "toField": "volume"
            }, {
                "fromField": "value",
                "toField": "value"
            }],
            "color": "#00A2FF",
            "dataProvider": multiplePanelData,
            "title": "West Stock",
            "categoryField": "date"
        }, {
            "fieldMappings": [{
                "fromField": "value",
                "toField": "value"
            }],
            "color": "#0000FF",
            "dataProvider": multiplePanelData,
            "compared": true,
            "title": "East Stock",
            "categoryField": "date"
        }],


        "panels": [{
            "title": "Value",
            "showCategoryAxis": false,
            "percentHeight": 70,
            "valueAxes": [{
                "id": "v1",
                "dashLength": 5
            }],

            "categoryAxis": {
                "dashLength": 5
            },

            "stockGraphs": [{
                "type": "candlestick",
                "id": "g1",
                "openField": "open",
                "closeField": "close",
                "highField": "high",
                "lowField": "low",
                "valueField": "close",
                "lineColor": "#DCDCDC",
                "fillColors": "#DCDCDC",
                "negativeLineColor": "#F44336",
                "negativeFillColors": "#F44336",
                "fillAlphas": 1,
                "useDataSetColors": false,
                "comparable": true,
                "compareField": "value",
                "showBalloon": false,
                "proCandlesticks": true
            }],

            "stockLegend": {
                "valueTextRegular": undefined,
                "periodValueTextComparing": "[[percents.value.close]]%"
            }
        },

        {
            "title": "Volume",
            "percentHeight": 30,
            "marginTop": 1,
            "showCategoryAxis": true,
            "valueAxes": [{
                "dashLength": 5
            }],

            "categoryAxis": {
                "dashLength": 5
            },

            "stockGraphs": [{
                "valueField": "volume",
                "type": "column",
                "showBalloon": false,
                "fillAlphas": 1
            }],

            "stockLegend": {
                "markerType": "none",
                "markerSize": 0,
                "labelText": "",
                "periodValueTextRegular": "[[value.close]]"
            }
        }
        ],

        "chartScrollbarSettings": {
            "graph": "g1",
            "graphType": "line",
            "usePeriod": "WW"
        },

        "legendSettings": {
            "color": "#fff"
        },

        "chartCursorSettings": {
            "valueLineBalloonEnabled": true,
            "valueLineEnabled": true
        },

        "periodSelector": {
            "position": "bottom",
            "periods": [{
                "period": "DD",
                "count": 10,
                "label": "10 days"
            }, {
                "period": "MM",
                "selected": true,
                "count": 1,
                "label": "1 month"
            }, {
                "period": "YYYY",
                "count": 1,
                "label": "1 year"
            }, {
                "period": "YTD",
                "label": "YTD"
            }, {
                "period": "MAX",
                "label": "MAX"
            }]
        },
        "export": {
            "enabled": true
        }
    });

    /**
 * This demo uses direct URL to Poloniex exchance, which means that depending on your browser settings,
 * it may not work dure to CORS restrictions.
 * Please consult Poloniex API for further information:
 * https://poloniex.com/support/api/
 */

    var chart = AmCharts.makeChart("depth-chart", {
        "type": "serial",
        "theme": "dark",
        "color": "#fff",
        "dataLoader": {
            "url": "https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=50",
            "format": "json",
            "reload": 30,
            "postProcess": function (data) {

                // Function to process (sort and calculate cummulative volume)
                function processData(list, type, desc) {

                    // Convert to data points
                    for (var i = 0; i < list.length; i++) {
                        list[i] = {
                            value: Number(list[i][0]),
                            volume: Number(list[i][1]),
                        }
                    }

                    // Sort list just in case
                    list.sort(function (a, b) {
                        if (a.value > b.value) {
                            return 1;
                        }
                        else if (a.value < b.value) {
                            return -1;
                        }
                        else {
                            return 0;
                        }
                    });

                    // Calculate cummulative volume
                    if (desc) {
                        for (var i = list.length - 1; i >= 0; i--) {
                            if (i < (list.length - 1)) {
                                list[i].totalvolume = list[i + 1].totalvolume + list[i].volume;
                            }
                            else {
                                list[i].totalvolume = list[i].volume;
                            }
                            var dp = {};
                            dp["value"] = list[i].value;
                            dp[type + "volume"] = list[i].volume;
                            dp[type + "totalvolume"] = list[i].totalvolume;
                            res.unshift(dp);
                        }
                    }
                    else {
                        for (var i = 0; i < list.length; i++) {
                            if (i > 0) {
                                list[i].totalvolume = list[i - 1].totalvolume + list[i].volume;
                            }
                            else {
                                list[i].totalvolume = list[i].volume;
                            }
                            var dp = {};
                            dp["value"] = list[i].value;
                            dp[type + "volume"] = list[i].volume;
                            dp[type + "totalvolume"] = list[i].totalvolume;
                            res.push(dp);
                        }
                    }

                }

                // Init
                var res = [];
                processData(data.bids, "bids", true);
                processData(data.asks, "asks", false);

                //console.log(res);
                return res;
            }
        },
        "graphs": [{
            "id": "bids",
            "fillAlphas": 0.1,
            "lineAlpha": 1,
            "lineThickness": 2,
            "lineColor": "#0000FF",
            "type": "step",
            "valueField": "bidstotalvolume",
            "balloonFunction": balloon
        }, {
            "id": "asks",
            "fillAlphas": 0.1,
            "lineAlpha": 1,
            "lineThickness": 2,
            "lineColor": "#F44336",
            "type": "step",
            "valueField": "askstotalvolume",
            "balloonFunction": balloon
        }, {
            "lineAlpha": 0,
            "fillAlphas": 0.2,
            "lineColor": "#000",
            "type": "column",
            "clustered": false,
            "valueField": "bidsvolume",
            "showBalloon": false
        }, {
            "lineAlpha": 0,
            "fillAlphas": 0.2,
            "lineColor": "#000",
            "type": "column",
            "clustered": false,
            "valueField": "asksvolume",
            "showBalloon": false
        }],
        "categoryField": "value",
        "chartCursor": {},
        "balloon": {
            "textAlign": "left"
        },
        "valueAxes": [{
            "title": "Volume"
        }],
        "categoryAxis": {
            "title": "Price (BTC/ETH)",
            "minHorizontalGap": 100,
            "startOnAxis": true,
            "showFirstLabel": false,
            "showLastLabel": false
        },
        "export": {
            "enabled": true
        },
    });

    function balloon(item, graph) {
        var txt;
        if (graph.id == "asks") {
            txt = "Ask: <strong>" + formatNumber(item.dataContext.value, graph.chart, 4) + "</strong><br />"
                + "Total volume: <strong>" + formatNumber(item.dataContext.askstotalvolume, graph.chart, 4) + "</strong><br />"
                + "Volume: <strong>" + formatNumber(item.dataContext.asksvolume, graph.chart, 4) + "</strong>";
        }
        else {
            txt = "Bid: <strong>" + formatNumber(item.dataContext.value, graph.chart, 4) + "</strong><br />"
                + "Total volume: <strong>" + formatNumber(item.dataContext.bidstotalvolume, graph.chart, 4) + "</strong><br />"
                + "Volume: <strong>" + formatNumber(item.dataContext.bidsvolume, graph.chart, 4) + "</strong>";
        }
        return txt;
    }

    function formatNumber(val, chart, precision) {
        return AmCharts.formatNumber(
            val,
            {
                precision: precision ? precision : chart.precision,
                decimalSeparator: chart.decimalSeparator,
                thousandsSeparator: chart.thousandsSeparator
            }
        );
    }

});