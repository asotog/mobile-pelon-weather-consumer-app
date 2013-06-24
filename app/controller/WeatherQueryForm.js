Ext.define('WeatherQ.controller.WeatherQueryForm', {
    extend: 'Ext.app.Controller',

    DAY_MILLISECONDS: 86400000,

    config: {
        control: {
            searchButton: {
                tap: 'doSearch'
            },

            showChartButton: {
                tap: 'doShowChart'
            }
        },

        refs: {
            weatherQueryForm: 'weather_query_form',
            weatherChartQueryForm: 'weather_chart_query_form',
            weatherChart: 'weather_chart',
            searchButton: 'weather_query_form > button',
            showChartButton: 'weather_chart_query_form > button',
            tabPanel: 'tabpanel'
        }
    },

    doSearch: function () {
        var tomorrow = new Date(this.getWeatherQueryForm().getValues().query_date.getTime() + (this.DAY_MILLISECONDS * 2));
        var from = Ext.Date.format(this.getWeatherQueryForm().getValues().query_date, 'Ymd');
        var to = Ext.Date.format(tomorrow, 'Ymd');
        var wsUrl = 'http://sourcetek.org/projects/pelon/weather/webservices/getByDate/' + from + '/' + to + '/start/1/count/48/';
        Ext.StoreMgr.get('WeatherList').setProxy({
            url: wsUrl
        }).load();
        this.getTabPanel().setActiveItem('weather_list');
    },

    doShowChart: function () {
        var range = this.getWeatherChartQueryForm().getValues().range;
        var field = this.getWeatherChartQueryForm().getValues().field;
        var wsUrl = 'http://sourcetek.org/projects/pelon/weather/webservices/history/' + range + '/field/' + field + '/';
        Ext.StoreMgr.get('HistoryList').setProxy({
            url: wsUrl
        }).load();
        this.getWeatherChart().setHtml('<h3>' + this.generateChartLabel(range, field) + '</h3>');
        this.getTabPanel().setActiveItem('weather_chart');
    },

    generateChartLabel: function (range, field) {
        var label = '';
        switch (field) {
        case 'temp':
            label += 'Temperature (ºC) from ';
            break;
        case 'high':
            label += 'High (ºC) from ';
            break;
        case 'low':
            label += 'Low (ºC) from ';
            break;
        case 'humidity':
            label += 'Humidity (%) from ';
            break;
        case 'rain':
            label += 'Rain (mm) from ';
            break;
        case 'barometer':
            label += 'Pressure from ';
            break;
        }
        switch (range) {
        case '24h':
            label += 'last 24hrs';
            break;
        case '7d':
            label += 'last 7 days';
            break;
        case '30d':
            label += 'last 30 days';
            break;
        case 'year':
            label += 'last year';
            break;
        }
        return label;
    }
});