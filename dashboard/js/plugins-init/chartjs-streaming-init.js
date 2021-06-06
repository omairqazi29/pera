(function ($) {
    "use strict";


    //Earning Graph Bottom
    var ctx = document.getElementById("canvas");
    ctx.height = 100;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'A',
                borderColor: "#F44336",
                borderWidth: "0",
                backgroundColor: "#F44336",
                data: []
            }, {
                label: 'B',
                borderColor: "#00A2FF",
                borderWidth: "0",
                backgroundColor: "#00A2FF",
                data: []
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            title: {
                display: false,
                text: ''
            },
            scales: {
                xAxes: [{
                    type: 'realtime',
                    display: false,
                    barPercentage: 0.5,
                    categoryPercentage: 0.5
                }],
                yAxes: [{
                    type: 'linear',
                    display: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'value'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                mode: 'nearest',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: false
            },
            plugins: {
                streaming: {
                    duration: 20000,
                    refresh: 1000,
                    delay: 1000,
                    frameRate: 5,

                    onRefresh: function (chart) {
                        chart.data.datasets.forEach(function (dataset) {
                            dataset.data.push({
                                x: moment(),
                                y: Math.random() * 100
                            });
                        });
                    }
                }
            }
        }
    });

    //Earning Graph Bottom
    var ctx = document.getElementById("canvas1");
    ctx.height = 100;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'A',
                backgroundColor: "#F44336",
                borderColor: "#F44336",
                fill: false,
                lineTension: 0,
                borderDash: [8, 4],
                data: []
            }, {
                label: 'B',
                backgroundColor: "#00A2FF",
                borderColor: "#00A2FF",
                fill: false,
                cubicInterpolationMode: 'monotone',
                data: []
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            title: {
                display: false,
                text: ''
            },
            scales: {
                xAxes: [{
                    type: 'realtime',
                    display: false,
                }],
                yAxes: [{
                    type: 'linear',
                    display: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'value'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                mode: 'nearest',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: false
            },
            plugins: {
                streaming: {
                    duration: 20000,
                    refresh: 1000,
                    delay: 1000,
                    frameRate: 5,

                    onRefresh: function (chart) {
                        chart.data.datasets.forEach(function (dataset) {
                            dataset.data.push({
                                x: moment(),
                                y: Math.random() * 100
                            });
                        });
                    }
                }
            }
        }
    });

    //Earning Graph Bottom
    var ctx = document.getElementById("canvas2");
    ctx.height = 100;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'A',
                backgroundColor: "rgba(244, 67, 54, .2)",
                borderColor: "#F44336",
                fill: true,
                lineTension: 0,
                data: []
            }, {
                label: 'B',
                backgroundColor: "rgba(0, 162, 255, .3)",
                borderColor: "#00A2FF",
                fill: true,
                lineTension: 0,
                data: []
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            title: {
                display: false,
                text: ''
            },
            scales: {
                xAxes: [{
                    type: 'realtime',
                    display: false,
                }],
                yAxes: [{
                    type: 'linear',
                    display: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'value'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                mode: 'nearest',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: false
            },
            plugins: {
                streaming: {
                    duration: 20000,
                    refresh: 1000,
                    delay: 1000,
                    frameRate: 5,

                    onRefresh: function (chart) {
                        chart.data.datasets.forEach(function (dataset) {
                            dataset.data.push({
                                x: moment(),
                                y: Math.random() * 100
                            });
                        });
                    }
                }
            }
        }
    });

    //Earning Graph Bottom
    var ctx = document.getElementById("canvas3");
    ctx.height = 100;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'A',
                backgroundColor: "rgba(244, 67, 54, .2)",
                borderColor: "#F44336",
                fill: true,
                // lineTension: 0,
                data: []
            }, {
                label: 'B',
                backgroundColor: "rgba(0, 162, 255, .3)",
                borderColor: "#00A2FF",
                fill: true,
                // lineTension: 0,
                data: []
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            title: {
                display: false,
                text: ''
            },
            scales: {
                xAxes: [{
                    type: 'realtime',
                    display: false,
                }],
                yAxes: [{
                    type: 'linear',
                    display: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'value'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                mode: 'nearest',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: false
            },
            plugins: {
                streaming: {
                    duration: 20000,
                    refresh: 1000,
                    delay: 1000,
                    frameRate: 5,

                    onRefresh: function (chart) {
                        chart.data.datasets.forEach(function (dataset) {
                            dataset.data.push({
                                x: moment(),
                                y: Math.random() * 100
                            });
                        });
                    }
                }
            }
        }
    });

    //Earning Graph Bottom
    var ctx = document.getElementById("canvas4");
    ctx.height = 100;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'A',
                type: 'line',
                backgroundColor: "#F44336",
                borderColor: "#F44336",
                fill: false,
                lineTension: 0,
                borderDash: [8, 4],
                data: []
            }, {
                label: 'B',
                backgroundColor: "#00A2FF",
                borderColor: "#00A2FF",
                fill: false,
                cubicInterpolationMode: 'monotone',
                data: []
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            title: {
                display: false,
                text: ''
            },
            scales: {
                xAxes: [{
                    type: 'realtime',
                    display: false,
                }],
                yAxes: [{
                    type: 'linear',
                    display: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'value'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                mode: 'nearest',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: false
            },
            plugins: {
                streaming: {
                    duration: 20000,
                    refresh: 1000,
                    delay: 1000,
                    frameRate: 5,

                    onRefresh: function (chart) {
                        chart.data.datasets.forEach(function (dataset) {
                            dataset.data.push({
                                x: moment(),
                                y: Math.random() * 100
                            });
                        });
                    }
                }
            }
        }
    });

    //Earning Graph Bottom
    var ctx = document.getElementById("canvas5");
    ctx.height = 100;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'A',
                type: 'line',
                backgroundColor: "#34C73B",
                borderColor: "#34C73B",
                fill: false,
                lineTension: 0,
                data: []
            },
            {
                label: 'B',
                type: 'line',
                backgroundColor: "#0000FF",
                borderColor: "#0000FF",
                fill: false,
                data: []
            }, {
                label: 'C',
                backgroundColor: "#00A2FF",
                borderColor: "#00A2FF",
                fill: false,
                cubicInterpolationMode: 'monotone',
                data: []       
            }, {
                label: 'D',
                backgroundColor: "#F44336",
                borderColor: "#F44336",
                fill: false,
                cubicInterpolationMode: 'monotone',
                data: []
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            title: {
                display: false,
                text: ''
            },
            scales: {
                xAxes: [{
                    type: 'realtime',
                    display: false,
                }],
                yAxes: [{
                    type: 'linear',
                    display: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'value'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                mode: 'nearest',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: false
            },
            plugins: {
                streaming: {
                    duration: 20000,
                    refresh: 1000,
                    delay: 1000,
                    frameRate: 5,

                    onRefresh: function (chart) {
                        chart.data.datasets.forEach(function (dataset) {
                            dataset.data.push({
                                x: moment(),
                                y: Math.random() * 100
                            });
                        });
                    }
                }
            }
        }
    });


})(jQuery);















































// var _0x6182=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x63\x61\x6E\x76\x61\x73","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x68\x65\x69\x67\x68\x74","\x62\x61\x72","\x41","\x23\x46\x46\x34\x39\x36\x31","\x30","\x42","\x23\x34\x63\x38\x34\x66\x66","","\x72\x65\x61\x6C\x74\x69\x6D\x65","\x6C\x69\x6E\x65\x61\x72","\x76\x61\x6C\x75\x65","\x6E\x65\x61\x72\x65\x73\x74","\x72\x61\x6E\x64\x6F\x6D","\x70\x75\x73\x68","\x64\x61\x74\x61","\x66\x6F\x72\x45\x61\x63\x68","\x64\x61\x74\x61\x73\x65\x74\x73","\x63\x61\x6E\x76\x61\x73\x31","\x6C\x69\x6E\x65","\x23\x66\x30\x30","\x6D\x6F\x6E\x6F\x74\x6F\x6E\x65","\x63\x61\x6E\x76\x61\x73\x32","\x72\x67\x62\x61\x28\x32\x35\x35\x2C\x31\x31\x37\x2C\x31\x33\x36\x2C\x30\x2E\x31\x32\x29","\x72\x67\x62\x61\x28\x37\x36\x2C\x31\x33\x32\x2C\x32\x35\x35\x2C\x30\x2E\x31\x32\x29","\x63\x61\x6E\x76\x61\x73\x33","\x63\x61\x6E\x76\x61\x73\x34","\x63\x61\x6E\x76\x61\x73\x35","\x23\x34\x63\x61\x66\x35\x30","\x23\x30\x30\x30","\x43","\x44","\x23\x66\x66\x35\x37\x32\x32"];(function(_0x85aax1){_0x6182[0];var _0x85aax2=document[_0x6182[2]](_0x6182[1]);_0x85aax2[_0x6182[3]]= 100;var _0x85aax3= new Chart(_0x85aax2,{type:_0x6182[4],data:{datasets:[{label:_0x6182[5],borderColor:_0x6182[6],borderWidth:_0x6182[7],backgroundColor:_0x6182[6],data:[]},{label:_0x6182[8],borderColor:_0x6182[9],borderWidth:_0x6182[7],backgroundColor:_0x6182[9],data:[]}]},options:{responsive:true,maintainAspectRatio:true,legend:{display:false},title:{display:false,text:_0x6182[10]},scales:{xAxes:[{type:_0x6182[11],display:false,barPercentage:0.5,categoryPercentage:0.5}],yAxes:[{type:_0x6182[12],display:false,scaleLabel:{display:true,labelString:_0x6182[13]},ticks:{beginAtZero:true}}]},tooltips:{mode:_0x6182[14],intersect:false},hover:{mode:_0x6182[14],intersect:false},plugins:{streaming:{duration:20000,refresh:1000,delay:1000,frameRate:5,onRefresh:function(_0x85aax4){_0x85aax4[_0x6182[17]][_0x6182[19]][_0x6182[18]](function(_0x85aax5){_0x85aax5[_0x6182[17]][_0x6182[16]]({x:moment(),y:Math[_0x6182[15]]()* 100})})}}}}});var _0x85aax2=document[_0x6182[2]](_0x6182[20]);_0x85aax2[_0x6182[3]]= 100;var _0x85aax3= new Chart(_0x85aax2,{type:_0x6182[21],data:{datasets:[{label:_0x6182[5],backgroundColor:_0x6182[22],borderColor:_0x6182[22],fill:false,lineTension:0,borderDash:[8,4],data:[]},{label:_0x6182[8],backgroundColor:_0x6182[9],borderColor:_0x6182[9],fill:false,cubicInterpolationMode:_0x6182[23],data:[]}]},options:{responsive:true,maintainAspectRatio:true,legend:{display:false},title:{display:false,text:_0x6182[10]},scales:{xAxes:[{type:_0x6182[11],display:false}],yAxes:[{type:_0x6182[12],display:false,scaleLabel:{display:true,labelString:_0x6182[13]},ticks:{beginAtZero:true}}]},tooltips:{mode:_0x6182[14],intersect:false},hover:{mode:_0x6182[14],intersect:false},plugins:{streaming:{duration:20000,refresh:1000,delay:1000,frameRate:5,onRefresh:function(_0x85aax4){_0x85aax4[_0x6182[17]][_0x6182[19]][_0x6182[18]](function(_0x85aax5){_0x85aax5[_0x6182[17]][_0x6182[16]]({x:moment(),y:Math[_0x6182[15]]()* 100})})}}}}});var _0x85aax2=document[_0x6182[2]](_0x6182[24]);_0x85aax2[_0x6182[3]]= 100;var _0x85aax3= new Chart(_0x85aax2,{type:_0x6182[21],data:{datasets:[{label:_0x6182[5],backgroundColor:_0x6182[25],borderColor:_0x6182[22],fill:true,lineTension:0,data:[]},{label:_0x6182[8],backgroundColor:_0x6182[26],borderColor:_0x6182[9],fill:true,lineTension:0,data:[]}]},options:{responsive:true,maintainAspectRatio:true,legend:{display:false},title:{display:false,text:_0x6182[10]},scales:{xAxes:[{type:_0x6182[11],display:false}],yAxes:[{type:_0x6182[12],display:false,scaleLabel:{display:true,labelString:_0x6182[13]},ticks:{beginAtZero:true}}]},tooltips:{mode:_0x6182[14],intersect:false},hover:{mode:_0x6182[14],intersect:false},plugins:{streaming:{duration:20000,refresh:1000,delay:1000,frameRate:5,onRefresh:function(_0x85aax4){_0x85aax4[_0x6182[17]][_0x6182[19]][_0x6182[18]](function(_0x85aax5){_0x85aax5[_0x6182[17]][_0x6182[16]]({x:moment(),y:Math[_0x6182[15]]()* 100})})}}}}});var _0x85aax2=document[_0x6182[2]](_0x6182[27]);_0x85aax2[_0x6182[3]]= 100;var _0x85aax3= new Chart(_0x85aax2,{type:_0x6182[21],data:{datasets:[{label:_0x6182[5],backgroundColor:_0x6182[25],borderColor:_0x6182[22],fill:true,data:[]},{label:_0x6182[8],backgroundColor:_0x6182[26],borderColor:_0x6182[9],fill:true,data:[]}]},options:{responsive:true,maintainAspectRatio:true,legend:{display:false},title:{display:false,text:_0x6182[10]},scales:{xAxes:[{type:_0x6182[11],display:false}],yAxes:[{type:_0x6182[12],display:false,scaleLabel:{display:true,labelString:_0x6182[13]},ticks:{beginAtZero:true}}]},tooltips:{mode:_0x6182[14],intersect:false},hover:{mode:_0x6182[14],intersect:false},plugins:{streaming:{duration:20000,refresh:1000,delay:1000,frameRate:5,onRefresh:function(_0x85aax4){_0x85aax4[_0x6182[17]][_0x6182[19]][_0x6182[18]](function(_0x85aax5){_0x85aax5[_0x6182[17]][_0x6182[16]]({x:moment(),y:Math[_0x6182[15]]()* 100})})}}}}});var _0x85aax2=document[_0x6182[2]](_0x6182[28]);_0x85aax2[_0x6182[3]]= 100;var _0x85aax3= new Chart(_0x85aax2,{type:_0x6182[4],data:{datasets:[{label:_0x6182[5],type:_0x6182[21],backgroundColor:_0x6182[22],borderColor:_0x6182[22],fill:false,lineTension:0,borderDash:[8,4],data:[]},{label:_0x6182[8],backgroundColor:_0x6182[9],borderColor:_0x6182[9],fill:false,cubicInterpolationMode:_0x6182[23],data:[]}]},options:{responsive:true,maintainAspectRatio:true,legend:{display:false},title:{display:false,text:_0x6182[10]},scales:{xAxes:[{type:_0x6182[11],display:false}],yAxes:[{type:_0x6182[12],display:false,scaleLabel:{display:true,labelString:_0x6182[13]},ticks:{beginAtZero:true}}]},tooltips:{mode:_0x6182[14],intersect:false},hover:{mode:_0x6182[14],intersect:false},plugins:{streaming:{duration:20000,refresh:1000,delay:1000,frameRate:5,onRefresh:function(_0x85aax4){_0x85aax4[_0x6182[17]][_0x6182[19]][_0x6182[18]](function(_0x85aax5){_0x85aax5[_0x6182[17]][_0x6182[16]]({x:moment(),y:Math[_0x6182[15]]()* 100})})}}}}});var _0x85aax2=document[_0x6182[2]](_0x6182[29]);_0x85aax2[_0x6182[3]]= 100;var _0x85aax3= new Chart(_0x85aax2,{type:_0x6182[4],data:{datasets:[{label:_0x6182[5],type:_0x6182[21],backgroundColor:_0x6182[30],borderColor:_0x6182[30],fill:false,lineTension:0,data:[]},{label:_0x6182[8],type:_0x6182[21],backgroundColor:_0x6182[31],borderColor:_0x6182[31],fill:false,data:[]},{label:_0x6182[32],backgroundColor:_0x6182[9],borderColor:_0x6182[9],fill:false,cubicInterpolationMode:_0x6182[23],data:[]},{label:_0x6182[33],backgroundColor:_0x6182[34],borderColor:_0x6182[34],fill:false,cubicInterpolationMode:_0x6182[23],data:[]}]},options:{responsive:true,maintainAspectRatio:true,legend:{display:false},title:{display:false,text:_0x6182[10]},scales:{xAxes:[{type:_0x6182[11],display:false}],yAxes:[{type:_0x6182[12],display:false,scaleLabel:{display:true,labelString:_0x6182[13]},ticks:{beginAtZero:true}}]},tooltips:{mode:_0x6182[14],intersect:false},hover:{mode:_0x6182[14],intersect:false},plugins:{streaming:{duration:20000,refresh:1000,delay:1000,frameRate:5,onRefresh:function(_0x85aax4){_0x85aax4[_0x6182[17]][_0x6182[19]][_0x6182[18]](function(_0x85aax5){_0x85aax5[_0x6182[17]][_0x6182[16]]({x:moment(),y:Math[_0x6182[15]]()* 100})})}}}}})})(jQuery)