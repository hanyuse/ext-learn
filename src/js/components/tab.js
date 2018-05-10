Ext.onReady(function(){
    /* Ext.create("Ext.tab.Panel",{
        width:900,
        height:600,
        renderTo:Ext.getBody(),
        plain: true,
        items:[{
            title: 'Normal Tab',
            html: "My content was added during construction."
        },{
            title: 'Ajax Tab 1',
            loader: {
                url: 'ajax1.htm',
                contentType: 'html',
                loadMask: true
            },
            listeners: {
                activate: function(tab) {
                    tab.loader.load();
                }
            }
        },{
            title: 'Ajax Tab 2',
            loader: {
                url: 'ajax2.htm',
                contentType: 'html',
                autoLoad: true,
                params: 'foo=123&bar=abc'
            }
        },{
            title: 'Event Tab',
            listeners: {
                activate: function(tab){
                    setTimeout(function() {
                        alert(tab.title + ' was activated.');
                    }, 1);
                }
            },
            html: "I am tab 4's content. I also have an event listener attached."
        },{
            title: 'Disabled Tab',
            disabled: true,
            html: "Can't see me cause I'm disabled"
        }]

    }) */
    

    /* Ext.create('Ext.Panel', {
        width: 500,
        height: 300,
        title: "FormLayout Panel",
        layout: 'form',
        renderTo: Ext.getBody(),
        bodyPadding: 5,
        defaultType: 'textfield',
        items: [{
           fieldLabel: 'First Name',
            name: 'first',
            allowBlank:false
        },{
            fieldLabel: 'Last Name',
            name: 'last'
        },{
            fieldLabel: 'Company',
            name: 'company'
        }, {
            fieldLabel: 'Email',
            name: 'email',
            vtype:'email'
        }, {
            fieldLabel: 'DOB',
            name: 'dob',
            xtype: 'datefield'
        }, {
            fieldLabel: 'Age',
            name: 'age',
            xtype: 'numberfield',
            minValue: 0,
            maxValue: 100
        }, {
            xtype: 'timefield',
            fieldLabel: 'Time',
            name: 'time',
            minValue: '8:00am',
            maxValue: '6:00pm'
        }]
    }); */

  /*   Ext.create('Ext.panel.Panel', {
        title: 'Column Layout - Percentage Only',
        width: 350,
        height: 250,
        layout:'column',
        items: [{
            title: 'Column 1',
            columnWidth: 0.25
        },{
            title: 'Column 2',
            columnWidth: 0.50
        },{
            title: 'Column 3',
            columnWidth: 0.25
        }],
        renderTo: Ext.getBody()
    });
 */

Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    width: 400,
    height: 200,
    title: 'Container Panel',
    layout: 'column',
    items: [
        {
            xtype: 'panel',
            height: 200,
            columnWidth: 0.5
        },
        {
            xtype: 'panel',
            height: 200,
            columnWidth: 0.5
        }
    ]
});
})