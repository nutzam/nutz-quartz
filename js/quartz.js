(function() {
//================================================================
// Constructor
var Qz = function(str) {
    this._str = str;
};
//.........................................................
// Methods & Properties
Qz.prototype = {
    getAbc : function(){
        return "ABC" + this._str;
    }

};

// mount to window object
// 
window.Quartz = Qz;
// TODO 支持 AMD | CMD
//================================================================
})();