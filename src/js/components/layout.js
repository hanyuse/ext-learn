/**
 * ext布局
 * 
 */



Ext.onReady(function(){
     //1.自动布局，由上而下布局
    /* Ext.create("Ext.panel.Panel",{
        width:"100%",
        height:800,
        title:'this layout',
        renderTo:Ext.getBody(),
        items:[
            { xtype: "panel", title: "第一个子Panel", width: 200, height: 100 },
            { xtype: "panel", title: "第二个子Panel", width: 150, height: 100 },
            { xtype: "textfield", width: 300, fieldLabel: "请输入用户名" }
        ]
    })  */

    //2.AnchorLayout布局,相对于父容器的布局
    /* Ext.create("Ext.panel.Panel",{
        width:"100%",
        height:800,
        title:'Anchor layout',
        layout:'anchor',
        renderTo:Ext.getBody(),
        items:[
            {
                xtype:'panel',
                title:"子面板布局",
                anchor:"-100 -100"    
            }
        ]
    }) */

    //3.absolute layout
    /* Ext.create("Ext.form.Panel",{
        title: 'Absolute Layout',
        width: 400,
        height: 275,
        layout: 'absolute',
    }) */





   /*  Ext.create("Ext.panel.Panel",{
        width:"100%",
        height:800,
        title:'column layout',
        renderTo:Ext.getBody(),
        layout:"column",
        items:[
            { xtype: "panel", title: "第一个子Panel", columnWidth: 0.6, height: 100 },
            { xtype: "panel", title: "第二个子Panel", columnWidth: 0.2, height: 100 },
            { xtype: "textfield", columnWidth: 0.2, fieldLabel: "请输入用户名" }
        ]
    }) */


    var navigate = function (panel, direction) {
        var layout = panel.getLayout();
        layout[direction]();
        Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
        Ext.getCmp('move-next').setDisabled(!layout.getNext());
    };
    
    var panel = Ext.create('Ext.panel.Panel',{
        title:'示例向导',
        width: 300,
        height: 200,
        layout:'card',
        defaults: {
            border: false
        },
        bbar: [
            {
                id: 'move-prev',
                text: '上一步',
                handler: function (btn) {
                    navigate(btn.up("panel"), "prev");
                },
                disabled: true
            },
            '->',
            {
                id: 'move-next',
                text: '下一步',
                handler: function (btn) {
                    navigate(btn.up("panel"), "next");
                }
            }
        ],
        items: [{
            id: 'card-0',
            html: '<p>第一步</p>'
        }, {
            id: 'card-1',
            html: '<p>第二步</p>'
        }, {
            id: 'card-2',
            html: '<p>第三步</p>'
        }],
        renderTo: Ext.getBody()
    });



})