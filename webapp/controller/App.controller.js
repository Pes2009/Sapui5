sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	this.getView();
	return Controller.extend("hcpbook.chp07.demoExample0701.controller.App", {
	  /**
   * Event handler method used to handle a customer selection by the user.
   */
  onCustomerSelect: function(oEvent) {
    // Determine the selected customer:
    var sSelRowCtx = oEvent.getParameter("rowContext");
      
    // Sync up the customer's orders:
    var tabOrders = this.getView().byId("tabOrders");
    tabOrders.bindRows(sSelRowCtx + "/Orders");
    tabOrders.setVisible(true);
  }
	});
});
