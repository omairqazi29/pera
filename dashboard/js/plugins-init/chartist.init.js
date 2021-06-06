
  var chart = new Chartist.Line('#smil-animations', {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [
      [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
      [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
      [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
      [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
    ]
  }, {
    low: 0,
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
  
  // Let's put a sequence number aside so we can use it in the event callbacks
  var seq = 0,
    delays = 80,
    durations = 500;
  
  // Once the chart is fully created we reset the sequence
  chart.on('created', function() {
    seq = 0;
  });
  
  // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
  chart.on('draw', function(data) {
    seq++;
  
    if(data.type === 'line') {
      // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
      data.element.animate({
        opacity: {
          // The delay when we like to start the animation
          begin: seq * delays + 1000,
          // Duration of the animation
          dur: durations,
          // The value where the animation should start
          from: 0,
          // The value where it should end
          to: 1
        }
      });
    } else if(data.type === 'label' && data.axis === 'x') {
      data.element.animate({
        y: {
          begin: seq * delays,
          dur: durations,
          from: data.y + 100,
          to: data.y,
          // We can specify an easing function from Chartist.Svg.Easing
          easing: 'easeOutQuart'
        }
      });
    } else if(data.type === 'label' && data.axis === 'y') {
      data.element.animate({
        x: {
          begin: seq * delays,
          dur: durations,
          from: data.x - 100,
          to: data.x,
          easing: 'easeOutQuart'
        }
      });
    } else if(data.type === 'point') {
      data.element.animate({
        x1: {
          begin: seq * delays,
          dur: durations,
          from: data.x - 10,
          to: data.x,
          easing: 'easeOutQuart'
        },
        x2: {
          begin: seq * delays,
          dur: durations,
          from: data.x - 10,
          to: data.x,
          easing: 'easeOutQuart'
        },
        opacity: {
          begin: seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'easeOutQuart'
        }
      });
    } else if(data.type === 'grid') {
      // Using data.axis we get x or y which we can use to construct our animation definition objects
      var pos1Animation = {
        begin: seq * delays,
        dur: durations,
        from: data[data.axis.units.pos + '1'] - 30,
        to: data[data.axis.units.pos + '1'],
        easing: 'easeOutQuart'
      };
  
      var pos2Animation = {
        begin: seq * delays,
        dur: durations,
        from: data[data.axis.units.pos + '2'] - 100,
        to: data[data.axis.units.pos + '2'],
        easing: 'easeOutQuart'
      };
  
      var animations = {};
      animations[data.axis.units.pos + '1'] = pos1Animation;
      animations[data.axis.units.pos + '2'] = pos2Animation;
      animations['opacity'] = {
        begin: seq * delays,
        dur: durations,
        from: 0,
        to: 1,
        easing: 'easeOutQuart'
      };
  
      data.element.animate(animations);
    }
  });
  
  // For the sake of the example we update the chart every time it's created with a delay of 10 seconds
  chart.on('created', function() {
    if(window.__exampleAnimateTimeout) {
      clearTimeout(window.__exampleAnimateTimeout);
      window.__exampleAnimateTimeout = null;
    }
    window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
  });
  
  
  
  //Simple line chart
  new Chartist.Line('#simple-line-chart', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
  }, {
    fullWidth: true,
    chartPadding: {
      right: 40
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
  
  
  
  
  //Line Scatter Diagram
  var times = function(n) {
    return Array.apply(null, new Array(n));
  };
  
  var data = times(52).map(Math.random).reduce(function(data, rnd, index) {
    data.labels.push(index + 1);
    data.series.forEach(function(series) {
      series.push(Math.random() * 100)
    });
  
    return data;
  }, {
    labels: [],
    series: times(4).map(function() { return new Array() })
  });
  
  var options = {
    showLine: false,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 13 === 0 ? 'W' + value : null;
      }
    }
  };
  
  var responsiveOptions = [
    ['screen and (min-width: 640px)', {
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 4 === 0 ? 'W' + value : null;
        }
      }
    }]
  ];
  
  new Chartist.Line('#scatter-diagram', data, options, responsiveOptions);
  
  
  
  
  
  //Line chart with tooltips
  
  new Chartist.Line('#line-chart-tooltips', {
    labels: ['1', '2', '3', '4', '5', '6'],
    series: [
      {
        name: 'Fibonacci sequence',
        data: [1, 2, 3, 5, 8, 13]
      },
      {
        name: 'Golden section',
        data: [1, 1.618, 2.618, 4.236, 6.854, 11.09]
      }
    ]
  },
      {
    plugins: [
      Chartist.plugins.tooltip()
    ]
  }
  );
  
  var $chart = $('#line-chart-tooltips');
  
  var $toolTip = $chart
    .append('<div class="tooltip"></div>')
    .find('.tooltip')
    .hide();
  
  $chart.on('mouseenter', '.ct-point', function() {
    var $point = $(this),
      value = $point.attr('ct:value'),
      seriesName = $point.parent().attr('ct:series-name');
    $toolTip.html(seriesName + '<br>' + value).show();
  });
  
  $chart.on('mouseleave', '.ct-point', function() {
    $toolTip.hide();
  });
  
  $chart.on('mousemove', function(event) {
    $toolTip.css({
      left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
      top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 40
    });
  });
  
  
  
  
  //Line chart with area
  
  new Chartist.Line('#chart-with-area', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [5, 9, 7, 8, 5, 3, 5, 4]
    ]
  }, {
    low: 0,
    showArea: true,
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
  
  
  //Bi-polar Line chart with area only
  
  new Chartist.Line('#bi-polar-line', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [1, 2, 3, 1, -2, 0, 1, 0],
      [-2, -1, -2, -1, -2.5, -1, -2, -1],
      [0, 0, 0, 1, 2, 2.5, 2, 1],
      [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
    ]
  }, {
    high: 3,
    low: -3,
    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
    axisX: {
      showLabel: false,
      showGrid: false
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
  
  
  
  
  
  //SVG Path animation
  
  var chart = new Chartist.Line('#svg-animation', {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    series: [
      [1, 5, 2, 5, 4, 3],
      [2, 3, 4, 8, 1, 2],
      [5, 4, 3, 2, 1, 0.5]
    ]
  }, {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true
  });
  
  chart.on('draw', function(data) {
    if(data.type === 'line' || data.type === 'area') {
      data.element.animate({
        d: {
          begin: 2000 * data.index,
          dur: 2000,
          from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
          to: data.path.clone().stringify(),
          easing: Chartist.Svg.Easing.easeOutQuint
        }
      });
    }
  });
  
  
  
  
  
  //Line Interpolation / Smoothing
  
  var chart = new Chartist.Line('#line-smoothing', {
    labels: [1, 2, 3, 4, 5],
    series: [
      [1, 5, 10, 0, 1],
      [10, 15, 0, 1, 2]
    ]
  }, {
    // Remove this configuration to see that chart rendered with cardinal spline interpolation
    // Sometimes, on large jumps in data values, it's better to use simple smoothing.
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 2
    }),
    fullWidth: true,
    chartPadding: {
      right: 20
    },
    low: 0,
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
  
  
  
  
  
  //Bi-polar bar chart
  
  var data = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
  };
  
  var options = {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      }
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  };
  
  new Chartist.Bar('#bi-polar-bar', data, options);
  
  
  
  
  //Overlapping bars on mobile
  
  var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
  };
  
  var options = {
    seriesBarDistance: 10
  };
  
  var responsiveOptions = [
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  
  new Chartist.Bar('#overlapping-bars', data, options, responsiveOptions);
  
  
  
  
  
  //Multi-line labels
  
  new Chartist.Bar('#multi-line-chart', {
    labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
    series: [
      [60000, 40000, 80000, 70000],
      [40000, 30000, 70000, 65000],
      [8000, 3000, 10000, 6000]
    ]
  }, {
    seriesBarDistance: 10,
    axisX: {
      offset: 60
    },
    axisY: {
      offset: 80,
      labelInterpolationFnc: function(value) {
        return value + ' CHF'
      },
      scaleMinSpace: 15
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
  
  
  
  
  //Stacked bar chart
  
  new Chartist.Bar('#stacked-bar-chart', {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
      [800000, 1200000, 1400000, 1300000],
      [200000, 400000, 500000, 300000],
      [160000, 290000, 410000, 600000]
    ]
  }, {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return (value / 1000) + 'k';
      }
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  }).on('draw', function(data) {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 30px'
      });
    }
  });
  
  
  
  
  
  
  //Horizontal bar chart
  
  new Chartist.Bar('#horizontal-bar-chart', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4]
    ]
  }, {
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 70
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
  
  
  
  
  
  // Extreme responsive configuration
  
  new Chartist.Bar('#extreme-chart', {
    labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
    series: [
      [5, 4, 3, 7],
      [3, 2, 9, 5],
      [1, 5, 8, 4],
      [2, 3, 4, 6],
      [4, 1, 2, 1]
    ]
  }, {
    // Default mobile configuration
    stackBars: true,
    axisX: {
      labelInterpolationFnc: function(value) {
        return value.split(/\s+/).map(function(word) {
          return word[0];
        }).join('');
      }
    },
    axisY: {
      offset: 20
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  }, [
    // Options override for media > 400px
    ['screen and (min-width: 400px)', {
      reverseData: true,
      horizontalBars: true,
      axisX: {
        labelInterpolationFnc: Chartist.noop
      },
      axisY: {
        offset: 60
      }
    }],
    // Options override for media > 800px
    ['screen and (min-width: 800px)', {
      stackBars: false,
      seriesBarDistance: 10
    }],
    // Options override for media > 1000px
    ['screen and (min-width: 1000px)', {
      reverseData: false,
      horizontalBars: false,
      seriesBarDistance: 15
    }]
  ]);
  
  
  
  
  //Distributed series
  
  new Chartist.Bar('#distributed-series', {
    labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    series: [20, 60, 120, 200, 180, 20, 10]
  }, {
    distributeSeries: true,
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
  
  
  
  //Label placement
  
  new Chartist.Bar('#label-placement-chart', {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4]
    ]
  }, {
    axisX: {
      // On the x-axis start means top and end means bottom
      position: 'start'
    },
    axisY: {
      // On the y-axis start means left and end means right
      position: 'end'
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
  
  
  
  
  //Animating a Donut with Svg.animate
  
  var chart = new Chartist.Pie('#animating-donut', {
    series: [10, 20, 50, 20, 5, 50, 15],
    labels: [1, 2, 3, 4, 5, 6, 7]
  }, {
    donut: true,
    showLabel: false,
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
  
  chart.on('draw', function(data) {
    if(data.type === 'slice') {
      // Get the total path length in order to use for dash array animation
      var pathLength = data.element._node.getTotalLength();
  
      // Set a dasharray that matches the path length as prerequisite to animate dashoffset
      data.element.attr({
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      });
  
      // Create animation definition while also assigning an ID to the animation for later sync usage
      var animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 1000,
          from: -pathLength + 'px',
          to:  '0px',
          easing: Chartist.Svg.Easing.easeOutQuint,
          // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
          fill: 'freeze'
        }
      };
  
      // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
      if(data.index !== 0) {
        animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
      }
  
      // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
      data.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });
  
      // We can't use guided mode as the animations need to rely on setting begin manually
      // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
      data.element.animate(animationDefinition, false);
    }
  });
  
  // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
  chart.on('created', function() {
    if(window.__anim21278907124) {
      clearTimeout(window.__anim21278907124);
      window.__anim21278907124 = null;
    }
    window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
  });
  
  
  
  
  //Simple pie chart
  
  var data = {
    series: [5, 3, 4]
  };
  
  var sum = function(a, b) { return a + b };
  
  new Chartist.Pie('#simple-pie', data, {
    labelInterpolationFnc: function(value) {
      return Math.round(value / data.series.reduce(sum) * 100) + '%';
    }
  });
  
  
  
  
  //Pie chart with custom labels
  
  var data = {
    labels: ['Bananas', 'Apples', 'Grapes'],
    series: [20, 15, 40]
  };
  
  var options = {
    labelInterpolationFnc: function(value) {
      return value[0]
    }
  };
  
  var responsiveOptions = [
    ['screen and (min-width: 640px)', {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc: function(value) {
        return value;
      }
    }],
    ['screen and (min-width: 1024px)', {
      labelOffset: 80,
      chartPadding: 20
    }]
  ];
  
  new Chartist.Pie('#pie-chart', data, options, responsiveOptions);
  
  
  
  //Gauge chart
  
  new Chartist.Pie('#gauge-chart', {
    series: [20, 10, 30, 40]
  }, {
    donut: true,
    donutWidth: 60,
    startAngle: 270,
    total: 200,
    showLabel: false,
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
  
  
  
  
  
  // Different configuration for different series
  
  var chart = new Chartist.Line('#different-series', {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    // Naming the series with the series object array notation
    series: [{
      name: 'series-1',
      data: [5, 2, -4, 2, 0, -2, 5, -3]
    }, {
      name: 'series-2',
      data: [4, 3, 5, 3, 1, 3, 6, 4]
    }, {
      name: 'series-3',
      data: [2, 4, 3, 1, 4, 5, 3, 2]
    }]
  }, {
    fullWidth: true,
    // Within the series options you can use the series names
    // to specify configuration that will only be used for the
    // specific series.
    series: {
      'series-1': {
        lineSmooth: Chartist.Interpolation.step()
      },
      'series-2': {
        lineSmooth: Chartist.Interpolation.simple(),
        showArea: true
      },
      'series-3': {
        showPoint: false
      }
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  }, [
    // You can even use responsive configuration overrides to
    // customize your series configuration even further!
    ['screen and (max-width: 320px)', {
      series: {
        'series-1': {
          lineSmooth: Chartist.Interpolation.none()
        },
        'series-2': {
          lineSmooth: Chartist.Interpolation.none(),
          showArea: false
        },
        'series-3': {
          lineSmooth: Chartist.Interpolation.none(),
          showPoint: true
        }
      }
    }]
  ]);
  
  
  
  
  //SVG Animations chart
  
  var chart = new Chartist.Line('#svg-dot-animation', {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [
      [12, 4, 2, 8, 5, 4, 6, 2, 3, 3, 4, 6],
      [4, 8, 9, 3, 7, 2, 10, 5, 8, 1, 7, 10]
    ]
  }, {
    low: 0,
    showLine: false,
    axisX: {
      showLabel: false,
      offset: 0
    },
    axisY: {
      showLabel: false,
      offset: 0
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
  
  // Let's put a sequence number aside so we can use it in the event callbacks
  var seq = 0;
  
  // Once the chart is fully created we reset the sequence
  chart.on('created', function() {
    seq = 0;
  });
  
  // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
  chart.on('draw', function(data) {
    if(data.type === 'point') {
      // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
      data.element.animate({
        opacity: {
          // The delay when we like to start the animation
          begin: seq++ * 80,
          // Duration of the animation
          dur: 500,
          // The value where the animation should start
          from: 0,
          // The value where it should end
          to: 1
        },
        x1: {
          begin: seq++ * 80,
          dur: 500,
          from: data.x - 100,
          to: data.x,
          // You can specify an easing function name or use easing functions from Chartist.Svg.Easing directly
          easing: Chartist.Svg.Easing.easeOutQuart
        }
      });
    }
  });
  
  // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
  chart.on('created', function() {
    if(window.__anim0987432598723) {
      clearTimeout(window.__anim0987432598723);
      window.__anim0987432598723 = null;
    }
    window.__anim0987432598723 = setTimeout(chart.update.bind(chart), 8000);
  });
  
  