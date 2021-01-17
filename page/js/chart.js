let scrollTop = 0;
let bar;
let per;

window.onload = function () {
  bar = document.querySelector('.bar');
  Highcharts.chart('container', {
    chart: {
        type: 'line' // column, line, spline, area, areaspline, credits
    },
    title: {
        text: '월평균 수입 지출'
    },
    subtitle: {
        text: 'Source: highcharts.com'
    },
    xAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']  
    },
    yAxis: {
        title: {
            text: '단위(만원)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true,
                color:'blue'
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: '수입',
        data: [150000, 200000, 300000, 280000, 260000, 450000, 470000, 150000, 260000, 360000, 630000, 510000, 400000, 200000, 400000, 500000, 400000, 500000, 200000, 400000, 400000, 300000, 500000, 200000, 470000, 150000, 260000, 360000, 450000, 510000]
    }, {
        name: '지출',
        data: [400000, 300000, 700000, 500000, 400000, 500000, 200000, 400000, 400000, 300000, 500000, 200000, 150000, 200000, 300000, 280000, 260000, 450000, 470000, 150000, 260000, 360000, 420000, 610000, 500000, 200000, 400000, 400000, 300000, 500000]
    }]
});
}
window.addEventListener("scroll", function (e) {
    scrollTop = document.documentElement.scrollTop;
    per = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = per + "%";
});

