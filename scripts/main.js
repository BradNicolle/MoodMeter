var ctx = document.getElementById("moodChart").getContext("2d");
var moodChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Mood',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});