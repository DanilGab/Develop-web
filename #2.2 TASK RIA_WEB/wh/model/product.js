Ext.define('wh.model.Product', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.reader.Json'
    ],

    fields: ['id',
        { name: 'name', type: 'string' },
        { name: 'surname', type: 'string' },
        { name: 'group', type: 'int' },
        { name: 'number', type: 'int' },
        { name: 'ball_1', type: 'int' },
        { name: 'ball_2', type: 'int' },
        { name: 'summary', type: 'int' },
    ],
    calcResult: function (ball_1, ball_2) {
        summary = ball_1 * ball_2;
        this.set('summary', summary);
    },
    changeName: function (value) {
        this.set('name', value);
    },
    changeSurname: function (value) {
        this.set('surname', value);
    },
    changeGroup: function (value) {
        this.set('group', value);
    },
    changeNumber: function (value) {
        this.set('number', value);
    }
});