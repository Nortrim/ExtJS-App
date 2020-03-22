Ext.define('TestApp.model.Person', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'birthDate', type: 'string'},
        {name: 'profession', type: 'string'}
    ],
})