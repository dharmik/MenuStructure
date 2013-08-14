function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.settingScreen = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        id: "settingScreen"
    });
    $.__views.settingScreen && $.addTopLevelView($.__views.settingScreen);
    $.__views.topBarView = Ti.UI.createView({
        top: "0%",
        width: "100%",
        backgroundImage: "/images/Header.png",
        height: "9%",
        zIndex: 10,
        id: "topBarView"
    });
    $.__views.settingScreen.add($.__views.topBarView);
    $.__views.settingImg = Ti.UI.createImageView({
        left: "2%",
        width: "11%",
        height: "70%",
        image: "/images/Menu-icon.png",
        id: "settingImg"
    });
    $.__views.topBarView.add($.__views.settingImg);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.settingImg.addEventListener("click", function() {
        Ti.App.fireEvent("settingImg");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;