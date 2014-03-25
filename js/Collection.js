function Collection(models, attrs) {
	/*
	 	attrs:
			modelType - type of model
	 */
	attrs = attrs || {};
	this.modelType = attrs.modelType || Model;
	this.models = [];


	var that = this;
	_.each(models, function(model, index) {
		that.models.push(new that.modelType(model));
	});
}

_.extend(Collection.prototype, EventDispatcher);
_.extend(Collection.prototype, {
	count: function() {
		       return this.models.length;
	       },

	get: function(id) {
		     return this.models[id];
	     },
	each: function(callback, context) {
		      /* callback is a function with signature function(model, index) */
		      _.each(this.models, callback, context);
	      },
	sort: function(iterator, context) {
		      this.models = _.sortBy(this.models, iterator, context);
		      this.trigger("sort");
	      },
	clone: function() {
		       var newCollection = new Collection();
		       newCollection.models = this.models.slice(0);
		       newCollection.modelType = this.modelType;

		       return newCollection;
	       },
	filter: function(callback, context) {
		       var newCollection = new Collection();
		       newCollection.models = _.filter(this.models, callback, context).slice(0);
		       newCollection.modelType = this.modelType;

		       return newCollection;
		},
});
