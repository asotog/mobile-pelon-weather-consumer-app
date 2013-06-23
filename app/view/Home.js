Ext.define('WeatherQ.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    config: {
        tabBarPosition: 'bottom',
        title: 'Home',
        iconCls: 'home',
        cls: 'home',
        html: [
            '<img src="http://staging.sencha.com/img/sencha.png" />',
            '<h1>Weather Query</h1>',
            "<p></p>",
            '<h2>Source Code</h2>'
        ].join("")
    }
});