 Ext.define('WeatherQ.store.WeatherList', {
     extend: 'Ext.data.Store',

     config: {
         model: "WeatherQ.model.Weather",
         autoLoad: true,
         storeId: 'WeatherList',
         proxy: {
             type: 'ajax',
             url: 'http://sourcetek.org/projects/pelon/weather/webservices/getByDate/00000000/00000000/',
             reader: {
                 type: 'xml',
                 rootProperty: 'weather',
                 record: 'item'
             }
         }
     }
 });