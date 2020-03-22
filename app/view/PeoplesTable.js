Ext.define('TestApp.view.PeoplesTable', {
    extend: 'Ext.grid.Panel',
    alias: 'view.peoplesTable',

    store: 'PeoplesStore',
    controller: 'peoplesTable',

    title: 'TestApp',

    tools: [{
        type: 'plus',
        tooltip: 'Add Person',
        action: 'create',
    }],

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Email',
        dataIndex: 'email',
        flex: 1
    }, {
        text: 'Birth date',
        dataIndex: 'birthDate',
        flex: 1
    }, {
        text: 'Profession',
        dataIndex: 'profession',
        flex: 1
    }]
});
