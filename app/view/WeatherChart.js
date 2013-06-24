Ext.define('WeatherQ.view.WeatherChart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'weather_chart',
    config: {
        fullscreen: false,
        iconCls: 'time',
        cls: 'weather-chart',
        store: 'HistoryList',
        background: 'white',
        interactions: ['panzoom'],

        legend: {
            position: 'bottom'
        },

        //define x and y-axis.
        axes: [
            {
                type: 'numeric',
                position: 'left'
        },
            {
                type: 'category',
                visibleRange: [0, 1],
                position: 'bottom'
        }
        ],
        //define the actual series
        series: [{
                type: 'line',
                xField: 'time',
                yField: 'value',
                title: 'Normal',
                style: {
                    fill: "#6c9804",
                    stroke: "#115fa6",
                    fillOpacity: 0.6,
                    miterLimit: 3,
                    lineCap: 'miter',
                    lineWidth: 2
                }
    }]
    }
});