function Model(attrs) {
	attrs = attrs || {};

	this.attributes = attrs;
}

_.extend(Model.prototype, EventDispatcher);
_.extend(Model.prototype, {
	attr: function(attrName, attrVal) {
		      if(_.isUndefined(attrName)) {
			      throw "attrName must be not empty";
		      }

		      if(_.isUndefined(attrVal)) {
			      /* get mode */
			      return this.attributes[attrName];
		      } else {
			      /* set mode */
			      this.attributes[attrName] = attrVal;
			      this.trigger("set", attrName, attrVal);
		      }
	      },
});
