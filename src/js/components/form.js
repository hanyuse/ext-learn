Ext.onReady(function(){
    Ext.create("Ext.form.Panel",{
        title:'提交表单',
        width:800,
        height:600,
        renderTo:Ext.getBody(),
        bodyPadding:15,
        id:"submit-form",
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 50
        },
        collapsible:true,
        items:[
            {
                xtype:'panel',
                layout:{
                    type:"column" 
                },
                border:false,
                items:[
                    {
                        xtype:'textfield',
                        name: 'name',
                        fieldLabel: '姓名',
                        columnWidth:0.3
                    },
                    {
                        xtype:'textfield',
                        name: 'password',
                        fieldLabel: '密码',
                        columnWidth:0.3
                    },
                    {
                        xtype:'textfield',
                        name: 'age',
                        fieldLabel: '年龄',
                        columnWidth:0.3
                    },
                    {
                        xtype:'textfield',
                        name: 'gender',
                        style:'margin-top:5px;',
                        fieldLabel: '性别',
                        columnWidth:0.3
                    }
                ]
            }
        ],
        bbar:[
            {
                xtype:'button',
                text:"提交",
                handler:function(){
                    console.log(this.up("form").getForm().getValues());
                    // console.log( Ext.getCmp("submit-form").getForm());
                   
                     // console.log( this.up().up("form").getForm().getValues());
                   
                }
            }
        ]

    })





/*   style: {
            marginBottom: '10px'
        } */














})