Ext.application({
    name: 'TestApp',
    appFolder: 'app',

    extend: 'TestApp.Application',

    requires: [
        'TestApp.*'
    ],

    mainView: 'TestApp.view.PeoplesTable',
});
