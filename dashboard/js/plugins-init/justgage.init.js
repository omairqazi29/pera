document.addEventListener("DOMContentLoaded", function(e) {
    var t, n, a, i, o, m, l, d, t = new JustGage({
            id: "g1",
            value: getRandomInt(0, 100),
            min: 0,
            max: 100,
            title: "Custom Width",
            label: "miles traveled",
            gaugeWidthScale: .2,
            levelColors: ['#0000FF', '#34C73B', '#00A2FF']
        }),
        n = new JustGage({
            id: "g2",
            value: getRandomInt(0, 100),
            min: 0,
            max: 100,
            title: "Custom Shadow",
            label: "",
            shadowOpacity: 1,
            shadowSize: 10,
            shadowVerticalOffset: 5,
            levelColors: ['#0000FF', '#34C73B', '#00A2FF']
        }),
        a = new JustGage({
            id: "g3",
            value: getRandomInt(0, 100),
            min: 0,
            max: 100,
            title: "Custom Colors",
            label: "",
            levelColors: ['#0000FF', '#34C73B', '#00A2FF']
        }),
        i = new JustGage({
            id: "g4",
            value: getRandomInt(0, 100),
            min: 0,
            max: 100,
            title: "Hide Labels",
            hideMinMax: !0,
            levelColors: ['#0000FF', '#34C73B', '#00A2FF']
        }),
        o = new JustGage({
            id: "g5",
            value: getRandomInt(0, 100),
            min: 0,
            max: 100,
            title: "Animation Type",
            label: "",
            startAnimationTime: 2e3,
            startAnimationType: ">",
            refreshAnimationTime: 1e3,
            refreshAnimationType: "bounce",
            levelColors: ['#0000FF', '#34C73B', '#00A2FF']
        }),
        m = new JustGage({
            id: "g6",
            value: getRandomInt(0, 100),
            min: 0,
            max: 100,
            title: "Minimal",
            label: "",
            hideMinMax: !0,
            gaugeColor: "#fff",
            levelColors: ['#0000FF', '#34C73B', '#00A2FF'],
            hideInnerShadow: !0,
            startAnimationTime: 1,
            startAnimationType: "linear",
            refreshAnimationTime: 1,
            refreshAnimationType: "linear"
        }),
        l = new JustGage({
            id: "g7",
            value: 72,
            min: 0,
            max: 100,
            donut: !0,
            gaugeWidthScale: .6,
            counter: !0,
            hideInnerShadow: !0,
            levelColors: ['#0000FF', '#34C73B', '#00A2FF']
        }),
        d = new JustGage({
            id: "g8",
            value: 72.15,
            min: 0,
            max: 100,
            decimals: 2,
            gaugeWidthScale: .6,
            customSectors: [{
                color: "#34C73B",
                lo: 0,
                hi: 50
            }, {
                color: "#00A2FF",
                lo: 50,
                hi: 100
            }],
            counter: !0
        })
    document.getElementById("g8_refresh").addEventListener("click", function() {
        d.refresh(getRandomInt(0, 100))
    }), setInterval(function() {
        t.refresh(getRandomInt(0, 100)), n.refresh(getRandomInt(0, 100)), a.refresh(getRandomInt(0, 100)), i.refresh(getRandomInt(0, 100)), o.refresh(getRandomInt(0, 100)), m.refresh(getRandomInt(0, 100)), l.refresh(getRandomInt(0, 100))
    }, 2500)
})