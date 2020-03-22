Ext.define('TestApp.view.DeleteConfirm', {
    extend: 'Ext.window.MessageBox',
    alias: 'widget.deleteConfirm',

    title: 'Are you sure?',
    autoShow: true,

    buttons: [
        {
            type: 'button',
            text: "Yes",
            action: 'confirm'
        },
        {
            type: 'button',
            text: "No",
            action: 'close'
        }
    ]
});
