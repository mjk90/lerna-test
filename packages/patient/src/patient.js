"use strict";
exports.__esModule = true;
var Patient = /** @class */ (function () {
    function Patient() {
    }
    Patient.prototype.get = function (id) {
        return "your id is - " + id;
    };
    Patient.prototype.callpatient = function () {
        return "calling patient 1";
    };
    Patient.prototype.getstatus = function () {
        return "gets patient status";
    };
    Patient.prototype.getname = function () {
        return "gets patient name";
    };
    return Patient;
}());
exports["default"] = Patient;
