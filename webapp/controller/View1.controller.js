sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

return Controller.extend("HelloWorld.controller.View1", {
	handleListItemPress: function (evt) {
 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
 	var selectedProductId = evt.getSource().getBindingContext().getProperty("ProductID");
	oRouter.navTo("detail", {
		productId: selectedProductId
	});
}
});

});