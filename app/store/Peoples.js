Ext.define('TestApp.store.Peoples', {
    extend: 'Ext.data.Store',
    alias: 'store.peoples',
    storeId: 'PeoplesStore',

    model: TestApp.model.Person,

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'http://localhost:3000/peoples'
    }
});
