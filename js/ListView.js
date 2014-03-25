function ListView(attr) {
	this.id = _.uniqueId("ListView_");
	this.model = attr.model;
	var $el = $("<tr class='model' id='" + this.id + "'></tr>");
	$el.append(this.template({model: attr.model}));
	attr.$el = $el;
	View.call(this, attr);

	/* subscribe to change events */
	this.model.on("set", this.setElement, this);

	/* edit component */
	var that = this;
	this.$el.click(function() {
		new EditView({model: that.model});
	});
}

_.extend(ListView.prototype, {
	template: _.template([
				  "<td name='name'><%= model.attr(\'name\') %></td>",
				  "<td name='desc'><%= model.attr(\'desc\') %></td>",
				  "<td name='price'><%= model.attr(\'price\') %></td>",
			  ].join(""))
	,
	setElement: function(attrName, attrVal) {
		console.log('ListView setelement');
		console.log('attrName', attrVal);
		var $el = $('[name='+attrName+']', this.$el);
		console.log($el)
		switch(attrName) {
			case 'price': 
			case 'desc': 
			case 'name': $el.empty().append(attrVal); break;
		};
		console.log($el);
	},
});
