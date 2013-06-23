Ext.define('WeatherQ.controller.WeatherQueryForm', {
    extend: 'Ext.app.Controller',
    
    DAY_MILLISECONDS : 86400000,
    
    config: {
        control: {
            searchButton: {
                tap: 'doSearch'
            }
        },

        refs: {
            weatherQueryForm: 'weather_query_form',
            searchButton: 'weather_query_form > button',
            tabPanel: 'tabpanel'
        }
    },

    doSearch: function () {
        var tomorrow = new Date(this.getWeatherQueryForm().getValues().query_date.getTime() + (this.DAY_MILLISECONDS * 2));
        var from = Ext.Date.format(this.getWeatherQueryForm().getValues().query_date, 'Ymd');
        var to = Ext.Date.format(tomorrow, 'Ymd');
        var wsUrl = 'http://sourcetek.org/projects/pelon/weather/webservices/getByDate/' + from + '/' + to + '/start/1/count/48/';
        Ext.StoreMgr.get('WeatherList').setProxy({url: wsUrl}).load();
        this.getTabPanel().setActiveItem('weather_list');
    }
});