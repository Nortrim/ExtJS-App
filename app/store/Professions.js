Ext.define('TestApp.store.Professions', {
    extend: 'Ext.data.Store',
    alias: 'store.professions',
    storeId: 'ProfessionsStore',

    model: TestApp.model.Professions,

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'http://localhost:3000/professions'
    }
});
