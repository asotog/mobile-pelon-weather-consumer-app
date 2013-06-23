Ext.define('WeatherQ.model.Weather', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['temp', 'high', 'low', 'wind', 'humidity', 'rain', 'barometer', 'datetime']
    }
});