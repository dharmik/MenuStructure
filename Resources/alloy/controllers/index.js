function Controller() {
    function doClick() {
        var home = Alloy.createController("homeScreen").getView();
        home.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        align: "center",
        navBarHidden: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.signinbtn = Ti.UI.createButton({
        top: "55%",
        width: "55%",
        height: "7%",
        color: "#ffff",
        backgroundImage: "/images/sign-in-button.png",
        id: "signinbtn"
    });
    $.__views.index.add($.__views.signinbtn);
    doClick ? $.__views.signinbtn.addEventListener("click", doClick) : __defers["$.__views.signinbtn!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.orientationModes = [ Ti.UI.PORTRAIT ];
    $.index.open();
    __defers["$.__views.signinbtn!click!doClick"] && $.__views.signinbtn.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;