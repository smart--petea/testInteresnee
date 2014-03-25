function CollectionView(collection, attr) {
	var $el = this.$el = attr.$el;
	var modelView = this.modelView = attr.modelView;
	var views = this.views = [];

	collection.each(function(model, index) {
		var view = new modelView({model: model});
		views.push(view);
		$el.append(view.$el);
	});
}

_.extend(CollectionView.prototype,  EventDispatcher, View.prototype);
