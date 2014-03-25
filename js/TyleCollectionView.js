function TyleCollectionView(collection, attr) {
	View.call(this, attr);
	this.collection = collection;
	this.sortDesc = false;
	this.filter = "";

	this.$el.append("<tr><td colspan='2'style='text-align: center;'><input name='sortByName' type='checkbox' checked> Ascendent by name</input></td></tr>");
	this.$el.append("<tr><td>Filter:</td><td><input id='filter' type='text'/></td></tr>");
	this.$el.append("<tbody id='content'></tbody>");

	this.attr = attr;
	this.$tbody = $('tbody#content', this.$el);

	var wCollection = collection.clone();
	this.sortName(wCollection);

	this.tAttr = _.extend(this.attr, {$el: this.$tbody});
	this.tbody = new CollectionView(wCollection, this.tAttr);

	var that = this;
	$('[name=sortByName]', this.$el).click(function() {
		that.sortDesc = !$(this).prop('checked');
		that.refresh();
	});

	$('#filter', this.$el).keyup(function() {
		that.filter = $(this).val();
		that.refresh();
	});
}

_.extend(TyleCollectionView.prototype, CollectionView.prototype); 
_.extend(TyleCollectionView.prototype, {
	sortName: function(collection, desc) {
			     desc = desc || false;

			     collection.sort(function(model) {
				     return model.attr('name');
			     });
			     if(desc) {
				      collection.sort(function(model, index) {
					      return -index;
				      });
			     };

			     return collection;
		     },

	refresh: function() {
			 var that = this;
			 var collection = that.collection.clone();
			 collection = collection.filter(function(model) {

				var targ = $.trim(that.filter).toLowerCase();
				var name = model.attr('name').toLowerCase();
				return name.indexOf(targ) >= 0;
			 });
			that.sortName(collection, that.sortDesc);	

			that.$tbody.empty();
			that.tbody = new CollectionView(collection, that.tAttr);
		 },
});
