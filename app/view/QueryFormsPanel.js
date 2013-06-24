Ext.define('WeatherQ.view.QueryFormsPanel', {
    extend: 'Ext.TabPanel',
    xtype: 'query_forms_panel',
    config: {
        iconCls: 'search',
        cls: 'search',
        
        defaults: {
            styleHtmlContent: true
        },

        items: [
            {
                title: 'Search Data',
                xtype: 'weather_query_form'
        },
            {
                title: 'Chart Data',
                xtype: 'weather_chart_query_form'
        }
        ]
    }
})