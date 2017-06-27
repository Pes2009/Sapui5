sap.ui.define([
		"HelloWorld/controller/BaseController.controller",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/ui/model/Sorter"
], function (BaseController, Filter, FilterOperator, Sorter) {
	"use strict";


return BaseController.extend("HelloWorld.controller.Master", {
	
		onInit : function() {
			this._NameSorter = new Sorter("ProductName", false);
			this._IDSorter = new Sorter("ProductID", false);
		},
		
		onSortProductId : function() {
			this._IDSorter.bDescending = !this._IDSorter.bDescending;
			this.getView().byId("productList").getBinding("items").sort(this._IDSorter);
		},
		
		onSortProductName : function() {
			this._NameSorter.bDescending = !this._NameSorter.bDescending;
			this.getView().byId("productList").getBinding("items").sort(this._NameSorter);
			
			/* 
			// resuse the current sorter
			var aSorter = [];
			var oListBinding = this.getView().byId("productList").getBinding("items");
			var aListSorters = oListBinding.aSorters;
			var oSorter;
			if (aListSorters.length > 0) {
				oSorter = aListSorters[0];
				oSorter.bDescending = !oSorter.bDescending;
				oListBinding.sort(oSorter);
			}
			*/
		},
		
		onFilterProducts : function (oEvent) {
			// build the filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
 
			// filter the list via binding
			var oList = this.getView().byId("productList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});