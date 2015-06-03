Ext.define('wh.view.product.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.productlist',
    title : 'Список спортсменов',
    store: 'Products',
    plugins: 'gridfilters',
    columns: [
        {header: 'Имя',  dataIndex: 'name',  flex: 1, filter: 'string' },
        {header: 'Фамилия', dataIndex: 'surname', flex: 1, filter: 'string' },
        {header: 'Группа', dataIndex: 'group', flex:0.5, filter: 'number' },
        {header: 'Номер зач.кн.', dataIndex: 'number', flex:1, filter: 'number' },
        {header: 'Балл 1', dataIndex: 'ball_1', flex:0.5, filter: 'number' },
        {header: 'Балл 2', dataIndex: 'ball_2', flex:0.5, filter: 'number' },
        {header: 'Сумма', dataIndex: 'summary', flex:0.5, filter: 'number' }
    ]
});
var plugin = grid.filters;