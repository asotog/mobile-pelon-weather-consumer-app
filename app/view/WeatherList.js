Ext.define('WeatherQ.view.WeatherList', {
    extend: 'Ext.List',
    xtype: 'weather_list',
    config: {
        iconCls: 'list',
        cls: 'weather-list',
        store: 'WeatherList',
        itemTpl: '<b>Time: {datetime} = </b>Temp: {temp}, High: {high}, Low: {low}, Wind: {wind}, Humidity: {humidity}, Rain: {rain}, Barometer: {barometer}',
        emptyText: 'No results for this query'
    }
});