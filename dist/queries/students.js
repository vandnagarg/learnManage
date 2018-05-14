"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./../db");
var sequelize_1 = require("sequelize");
function fetchAllStudents() {
    return __awaiter(this, void 0, void 0, function () {
        var students, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.Student.findAll()];
                case 1:
                    students = _a.sent();
                    return [2 /*return*/, students];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchAllStudents = fetchAllStudents;
function fetchAll(id) {
    return __awaiter(this, void 0, void 0, function () {
        var students, studs, err_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, db_1.Student.findOne({
                            where: {
                                id: (_a = {},
                                    _a[sequelize_1.Sequelize.Op.eq] = id,
                                    _a)
                            }
                        })];
                case 1:
                    students = _b.sent();
                    return [4 /*yield*/, students.getBatches()];
                case 2:
                    studs = _b.sent();
                    return [2 /*return*/, studs];
                case 3:
                    err_2 = _b.sent();
                    console.log(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.fetchAll = fetchAll;
function insert(name, arr) {
    return __awaiter(this, void 0, void 0, function () {
        var stud, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, db_1.Student.create({
                            name: name
                        })];
                case 1:
                    stud = _a.sent();
                    return [4 /*yield*/, stud.setBatches(arr)];
                case 2:
                    stud = _a.sent();
                    return [4 /*yield*/, stud.save()];
                case 3:
                    stud = _a.sent();
                    // console.log(stud)
                    return [2 /*return*/, stud];
                case 4:
                    err_3 = _a.sent();
                    console.log(err_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.insert = insert;
function fetchStudent(id) {
    return __awaiter(this, void 0, void 0, function () {
        var students, err_4, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.Student.findAll({
                            where: {
                                id: (_a = {},
                                    _a[sequelize_1.Sequelize.Op.eq] = id,
                                    _a)
                            }
                        })];
                case 1:
                    students = _b.sent();
                    return [2 /*return*/, students];
                case 2:
                    err_4 = _b.sent();
                    console.log(err_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchStudent = fetchStudent;
