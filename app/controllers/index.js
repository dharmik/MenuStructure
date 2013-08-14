$.index.orientationModes = [Ti.UI.PORTRAIT];
function doClick(e) {
	var home = Alloy.createController('homeScreen').getView();
	home.open();
}
$.index.open();
