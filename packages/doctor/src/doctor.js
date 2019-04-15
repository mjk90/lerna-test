"use strict";
exports.__esModule = true;
var patient_1 = require("@matt125/patient");
var Doctor = /** @class */ (function () {
    function Doctor() {
    }
    Doctor.prototype.yo = function () {
        return "doctor says yo111";
    };
    Doctor.prototype.sup = function () {
        return "sup doc111";
    };
    Doctor.prototype.getpatient = function () {
        var p = new patient_1["default"]();
        return (p.get(2));
    };
    return Doctor;
}());
exports["default"] = Doctor;
console.log(new Doctor().getpatient());
