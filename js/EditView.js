function EditView(attr) {
	/*
	 	attr has parameters
			model - 
	 */


	this.id = _.uniqueId("EditView_");
	this.model = attr.model;
	var $el = $("<div  id='" + this.id + "'></div>");
	$el.css({
		'position': 'absolute',
		'left': '0',
		'top': '0',
		'width': '100%',
		'height': '100%',
		'background': 'rgba(0, 0, 0, 0.5)',
	});

	$el.append(this.template({model: attr.model}));
	$('#inner', $el).css({
		'position': 'absolute',
		'top': '40%',
		'left': '40%',
		'background-color': '#fff',
	});
	attr.$el = $el;
	$el.appendTo('body');

	View.call(this, attr);

	var that = this;
	$el.on('click', '#ok', function() {
		var model = that.model;
		
		model.attr('id', $('#id', that.$el).val());
		model.attr('name', $('#name', that.$el).val());
		model.attr('desc', $('#desc', that.$el).val());
		model.attr('picture', $('#picture', that.$el).val());
		model.attr('price', $('#price', that.$el).val());
		that.$el.remove();
	});

	$el.on('click', '#cancel', function() {
		that.$el.remove();
	});
}

_.extend(EditView.prototype, {
	template: _.template([
				  "<div id='inner'>",
					  "<p><input id='id' type='text' value='<%= model.attr(\'id\') %>'/><label>id</label></p>",
					  "<p><input id='name' type='text' value='<%= model.attr(\'name\') %>'/><label>name</label></p>",
					  "<p><input id='desc' type='text' value='<%= model.attr(\'desc\') %>'/><label>desc</label></p>",
					  "<p><input id='picture' type='text' value='<%= model.attr(\'picture\') %>'/><label>picture</label></p>",
					  "<p><input id='price' type='text' value='<%= model.attr(\'price\') %>'/><label>price</label></p>",
					  "<p><input id='cancel' type='button' value='cancel'/><input id='ok' type='button' value='ok'/></p>",
				  "</div>",
			  ].join(""))
	,
});
