const labels = [
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90
];

const data = {
    labels: labels,
    datasets: [{
        label: 'dataset',
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgb(255, 255, 255)',
        data: [0, 10, 5, 2, 20, 30, 610000],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        layout: {
            padding: 40
        },
        scales: {
            x: {
                
                ticks: {
                    color: 'white',
                    autoSkip: true,
                    callback: function(val, index) {
                        // Hide the label of every 2nd dataset
                        return index % 10 === 0 ? this.getLabelForValue(val) : '';
                    },
                },
                grid: {
                    display: false,
                    borderColor: '#fe5a3f'
                },
                title: {
                    padding: 40
                }
            },
            y: {
                max: 610000,
                grid: {
                    display: false,
                    borderColor: '#fe5a3f'
                },
                ticks: {
                    display : false,
                }
            },
        
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);