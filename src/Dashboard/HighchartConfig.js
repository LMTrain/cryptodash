export default function (historical) {
    return {
        title: {
          text: ''
        },

        subtitle: {
            text: ''
        },

        yAxis: {
            title: {
                text: 'Price'
            }
        },
        xAxis: {type: 'datetime'},
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOption: {
            series: {
              label: {
                  connectorAllowed: false
                },
              pointStart: 2010          
            }
        },

        series: historical,
        // [{
        //     name: 'Installation',
        //     data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        
        // }],

        responsive: {
            rules: [{
                condition: {
                    mxwidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }


    };
}