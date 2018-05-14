// var express = require("express");
// var path = require("path")
// const authenticate = require('./db').learnManage;
import express from 'express'
import path from 'path'
import {learnManage as authenticate} from "./db"
import courseRoute from './routes/course'
import studentRoute from './routes/students'
import subjectRoute from './routes/subjects'
import teacherRoute from './routes/teacher'

// import express from 'express'
// import path from 'path'
// import {learnManage as authenticate} from './db';

var app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
})) 

app.use('/',express.static(path.join(__dirname,'..' ,'public')));
authenticate();


let routes = {
    courses:courseRoute,
    subjects: subjectRoute,
    teachers: teacherRoute,
    students:studentRoute,
}

app.use('/courses',routes.courses.route)
app.use('/subjects',routes.subjects.route)
app.use('/teachers',routes.teachers.route)
app.use('/students',routes.students.route)

app.listen(8000,()=> console.log('localhost started at port number 8000'))
