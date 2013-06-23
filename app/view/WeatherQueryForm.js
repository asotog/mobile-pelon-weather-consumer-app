Ext.define('WeatherQ.view.WeatherQueryForm', {
    extend: 'Ext.form.Panel',
    xtype: 'weather_query_form',
    config: {
        tabBarPosition: 'bottom',
        title: 'Query Weather',
        iconCls: 'search',
        cls: 'search',
       
        items: [{
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'datepickerfield',
                        name: 'query_date',
                        label: 'Date',
                        value: new Date()
            }
                ]
    }, {
                xtype: 'button',
                text: 'Search',
                ui: 'confirm'
        }]
    }
});