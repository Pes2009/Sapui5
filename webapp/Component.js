sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"hcpbook/chp07/demoExample0701/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("hcpbook.chp07.demoExample0701.Component", {

		metadata: {
			name: "HCP Book :: Chapter 7 :: HTML5 Application Demo",
    		version: "1.0",
			manifest: "json",
				dependencies: {
	    		 libs: ["sap.ui.commons", "sap.ui.table"],
	    		components: []
	    		 },
		   rootView: "hcpbook.chp07.demoExample0701.App"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// Define the application's data model:
			var oModel =
				new sap.ui.model.odata.OdataModel("/Northwind.svc", true);
				this.setModel(oModel);
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});