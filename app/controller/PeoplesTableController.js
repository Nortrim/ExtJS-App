Ext.define('TestApp.controller.PeoplesTableController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.peoplesTable',

    init: function () {
        this.control({
            '[alias=view.peoplesTable]': {
                rowdblclick: this.editPerson
            },
            '[alias=view.peoplesTable] header tool[action=create]': {
                click: () => Ext.widget('changePersonPopUp')
            },

            'changePersonPopUp button[action=submit]': {
                click: this.submitForm
            },
            'changePersonPopUp textfield': {
                change: this.changeButtonState
            },
            'changePersonPopUp button[action=delete]': {
                click: () => Ext.widget('deleteConfirm')
            },

            'deleteConfirm button[action=confirm]': {
                click: this.deletePerson
            },
            'deleteConfirm button[action=close]': {
                click: (e) => e.up('window').close()
            }
        });
    },

    editPerson: function (grid, record) {
        const view = Ext.widget('changePersonPopUp');
        view.down('form').loadRecord(record);
    },

    changeButtonState: function (field) {
        const form = field.up('form'),
            id = form.getRecord() && form.getRecord().get('id'),
            submitBtn = form.up('window').down('button[action=submit]'),
            deleteBtn = form.up('window').down('button[action=delete]')

        if (!form.isValid() || field.value === '') {
            submitBtn.setDisabled(true)
        } else {
            submitBtn.setDisabled(false)
        }

        if(id) {
            deleteBtn.setHidden(false)
        }
    },

    deletePerson: () => {
        const win = Ext.ComponentQuery.query('changePersonPopUp')[0],
            form = win.down('form'),
            id = form.getRecord().get('id');

        Ext.Ajax.request({
            url: 'http://localhost:3000/peoples/' + id,
            method: 'DELETE',
            success: (response) => {
                if (response.status === 200) {
                    Ext.ComponentQuery.query('changePersonPopUp')[0].destroy()
                    Ext.WindowManager.getActive().destroy()
                    Ext.getStore('PeoplesStore').load()
                }
            }
        });
    },

    submitForm: function (button) {
        const win = button.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            id = form.getRecord() && form.getRecord().get('id');

        if (id) {
            Ext.Ajax.request({
                url: 'http://localhost:3000/peoples/' + id,
                method: 'PATCH',
                params: {id, ...values},
                success: (response) => {
                    if (response.status === 200) {
                        Ext.WindowManager.getActive().destroy();
                        Ext.getStore('PeoplesStore').load()
                    }
                }
            })
        } else {
            Ext.Ajax.request({
                url: 'http://localhost:3000/peoples/',
                method: 'POST',
                params: values,
                success: () => {
                    Ext.widget('changePersonPopUp').close()
                    Ext.WindowManager.getActive().destroy();
                    Ext.getStore('PeoplesStore').load()
                }
            })
        }
    }
});
