function View(attrs) {
	this.$el = attrs.$el;
}

_.extend(View.prototype, EventDispatcher);
_.extend(View.prototype,  {
	hide: function() {
		      this.$el.hide();
		      this.trigger('hide');
	      },
	show: function() {
		      this.$el.show();
		      this.trigger('show');
	      },
});
