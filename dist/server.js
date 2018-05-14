"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// var express = require("express");
// var path = require("path")
// const authenticate = require('./db').learnManage;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var db_1 = require("./db");
var course_1 = __importDefault(require("./routes/course"));
var students_1 = __importDefault(require("./routes/students"));
var subjects_1 = __importDefault(require("./routes/subjects"));
var teacher_1 = __importDefault(require("./routes/teacher"));
// import express from 'express'
// import path from 'path'
// import {learnManage as authenticate} from './db';
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use('/', express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
db_1.learnManage();
var routes = {
    courses: course_1.default,
    subjects: subjects_1.default,
    teachers: teacher_1.default,
    students: students_1.default,
};
app.use('/courses', routes.courses.route);
app.use('/subjects', routes.subjects.route);
app.use('/teachers', routes.teachers.route);
app.use('/students', routes.students.route);
app.listen(8000, function () { return console.log('localhost started at port number 8000'); });
