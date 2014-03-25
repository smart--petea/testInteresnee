function TyleView(attr) {
	this.id = _.uniqueId("TyleView_");
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

_.extend(TyleView.prototype, {
	template: _.template([
				  "<td><img name='picture' src='<%= model.attr(\'picture\') %>'></td>",
				  "<td name='name'><%= model.attr(\'name\') %></td>",
			  ].join("")),

	setElement: function(attrName, attrVal) {
		var $el = $('[name='+attrName+']', this.$el);
		switch(attrName) {
			case 'picture': $el.attr('src', attrVal); break;
			case 'name': $el.empty().append(attrVal); break;
		};
	},
});
