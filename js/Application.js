var rawModels = [
	{
		id: 1,
		name: "xitem1",
		desc: "blalblal",
		picture: "img/1.jpg",
		price: 41.24,
	},
	{
		id: 2,
		name: "aitem2",
		desc: "desc2",
		picture: "img/2.jpg",
		price: 51.24,
	},
	{
		id: 3,
		name: "fitem3",
		desc: "desc3",
		picture: "img/3.jpg",
		price: 61.24,
	},
	{
		id: 4,
		name: "mitem4",
		desc: "desc4",
		picture: "img/4.jpg",
		price: 21.24,
	},
];


var collection = new Collection(rawModels, {modelType: Model});
var tyleViews = new TyleCollectionView(collection, {
	modelView: TyleView,
    	$el: $('#tyleView'),
});


var listViews = new ListCollectionView(collection, {
	modelView: ListView,
    	$el: $('#listView'),
});

tyleViews.hide();
tyleViews.on('show', listViews.hide, listViews);
listViews.on('show', tyleViews.hide, tyleViews);
$('#tab1').click(function() {
	tyleViews.show();
});

$('#tab2').click(function() {
	listViews.show();
});
