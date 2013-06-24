 Ext.define('WeatherQ.store.HistoryList', {
     extend: 'Ext.data.Store',

     config: {
         model: "WeatherQ.model.History",
         autoLoad: true,
         storeId: 'HistoryList',
         proxy: {
             type: 'ajax',
             url: 'http://sourcetek.org/projects/pelon/weather/webservices/history/null/field/null/',
             reader: {
                 type: 'xml',
                 rootProperty: 'weather-history',
                 record: 'item'
             }
         }
     }
 });