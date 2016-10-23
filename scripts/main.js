var moodCtx = document.getElementById("moodChart").getContext("2d");
var moodChart = new Chart(moodCtx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Mood',
            data: [
                {x: 1476282327000,y: 4.5},
                {x: 1476382327000,y: 4.3},
                {x: 1476482327000,y: 4.4},
                {x: 1476582327000,y: 4.2},
                {x: 1476682327000,y: 4.5},
                {x: 1476782327000,y: 3.8},
                {x: 1476882327000,y: 3.6},
                {x: 1476982327000,y: 3.4},
                {x: 1477022327000,y: 2.3},
                {x: 1477081317000,y: 4.8},
                {x: 1477182327000,y: 4.7}
            ],
            backgroundColor: '#BBDEFB'
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'time',
                position: 'bottom',
                time: {
                    displayFormats: {
                        quarter: 'DD MM'
                    },
                    unit: 'day'
                }
            }]
        },
        responsive: false
    }
});

var reasonCtx = document.getElementById("happyReasonChart").getContext("2d");
var reasonChart = new Chart(reasonCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'Workload',
            'Management',
            'Personal'
        ],
        datasets: [
            {
                data: [50, 25, 25],
                backgroundColor: [
                    '#90CAF9',
                    '#EF9A9A',
                    '#C5E1A5'
                ]
            }
        ]
    },
    options: {
        responsive: false
    }
});

var sadReasonCtx = document.getElementById("sadReasonChart").getContext("2d");
var sadReasonChart = new Chart(sadReasonCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'Workload',
            'Management',
            'Personal'
        ],
        datasets: [
            {
                data: [80, 25, 25],
                backgroundColor: [
                    '#90CAF9',
                    '#EF9A9A',
                    '#C5E1A5'
                ]
            }
        ]
    },
    options: {
        responsive: false
    }
});

function selectTab(id) {
    var allTabs = document.querySelectorAll('.tabs ul li');
    for (var i = 0; i < allTabs.length; i++) {
        allTabs[i].className = '';
    }
    var tab = document.getElementById(id);
    tab.className = 'selected';
    
    var allPages = document.querySelectorAll('.page');
    for (var i = 0; i < allPages.length; i++) {
        allPages[i].style.visibility = 'hidden';
    }
    
    document.getElementById(id + 'Page').style.visibility = 'visible';
}