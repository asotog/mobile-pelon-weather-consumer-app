Ext.define('WeatherQ.view.WeatherChartQueryForm', {
    extend: 'Ext.form.Panel',
    xtype: 'weather_chart_query_form',
    config: {
        tabBarPosition: 'bottom',
        title: 'Chart Data',
        iconCls: 'time',
        cls: 'chart_search',

        items: [{
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'selectfield',
                        label: 'Dates ranges',
                        name: 'range',
                        options: [
                            {
                                text: 'Last 24 hours',
                                value: '24h'
                            },
                            {
                                text: 'Last 7 days',
                                value: '7d'
                            },
                            {
                                text: 'Last 30 days',
                                value: '30d'
                            },
                            {
                                text: 'Annual',
                                value: 'year'
                            }
                        ]
                },
                     {
                        xtype: 'selectfield',
                        label: 'Field value',
                        name: 'field',
                        options: [
                            {
                                text: 'Temperature',
                                value: 'temp'
                            },
                            {
                                text: 'High',
                                value: 'high'
                            },
                            {
                                text: 'Low',
                                value: 'low'
                            },
                            {
                                text: 'Humidity',
                                value: 'humidity'
                            },
                             {
                                text: 'Rain',
                                value: 'rain'
                            },
                             {
                                text: 'Barometer',
                                value: 'barometer'
                            }
                        ]
                }
                ]
    }, {
                xtype: 'button',
                text: 'Show',
                ui: 'confirm'
        }]
    }
});