EventDispatcher = {
	on: function(eventName, callback, context) {
		    this._events = this._events || {};
		    var evArray = this._events[eventName] = this._events[eventName] || [];
		    evArray.push({callback: callback, context: context || null});
	    },
	off: function(eventName, callback, context) {
		    this._events = this._events || {};
		    var evArray = this._events[eventName];

		    if(_.isEmpty(evArray))  return;

		    context = context || null;
		    var indexCallback = -1;
		    _.each(evArray, function(val, index) {
			if(_.isEqual(val, {callback: callback, context: context})) {
				indexCallback = index;
			}
		    });

		    (indexCallback >= 0) && evArray.splice(indexCallback, 1);
	     },
	trigger: function(eventName) {
		    this._events = this._events || {};
		    var evArray = this._events[eventName];

		    if(_.isEmpty(evArray)) {
			    return;
		    }

		    var args = Array.prototype.slice.call(arguments, 1), 
			callback, 
			context;
		    _.each(evArray, function(val, index) {
			callback = val.callback;
			context = val.context;
			callback.apply(context, args);	
		    });
		 },
}
