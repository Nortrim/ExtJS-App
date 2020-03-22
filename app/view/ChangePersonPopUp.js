Ext.define('TestApp.view.ChangePersonPopUp', {
    extend: 'Ext.window.Window',
    alias: 'widget.changePersonPopUp',

    title: 'Person',
    autoShow: true,

    padding: 20,

    items: [{
        xtype: 'form',
        items: [{
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name',
            regex: /[\D+]{2,100}/,
            allowBlank: false,
            invalidText: 'Field must contend 2-100 symbols',
        }, {
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email',
            regex: /\S+@\S+\.\S+/,
            allowBlank: false,
            invalidText: 'Invalid email'
        }, {
            xtype: 'datefield',
            name: 'birthDate',
            fieldLabel: 'Birth Date',
            allowBlank: false,
            format: 'm.d.Y',
        }, {
            xtype: 'combobox',
            name: 'profession',
            fieldLabel: 'Profession',
            store: 'ProfessionsStore',
            queryMode: 'local',
            displayField: 'name',
            allowBlank: false,
            valueField: 'name'
        }]
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        padding: '10 0 0',
        items: [{
            xtype: 'button',
            text: 'Save',
            action: 'submit',
            disabled: true,
            preventDefault: true
        }, {
            xtype: 'button',
            text: 'Delete',
            action: 'delete',
            hidden: true,
            preventDefault: true
        }]
    }]
});
