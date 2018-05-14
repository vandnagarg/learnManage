
import {Student} from './../db'
import {Sequelize} from 'sequelize'


async function fetchAllStudents(){
    try{
        let students = await Student.findAll();
        return students;
    }
    catch(err){
        console.log(err)
    }
}

async function fetchAll(id) {

    try{
        let students = await Student.findOne({
            where:{
                id:{
                    [Sequelize.Op.eq]:id
                }
            }
        })
        let studs =await students.getBatches();
        return studs;

    }
    catch(err){
        console.log(err)
    }
}

async function insert(name,arr){
    try{
        let stud = await Student.create({
            name:name
        })
        stud = await stud.setBatches(arr)
        stud = await stud.save();
        // console.log(stud)
        return stud;
    }
    catch(err){
        console.log(err);
    }
}
async function fetchStudent(id){
    try{
        let students = await Student.findAll({
            where:{
                id:{
                    [Sequelize.Op.eq]:id
                }
            }
        });
        return students;
    }
    catch(err){
        console.log(err)
    }
}
export {
    fetchAll,
    insert,fetchAllStudents,
    fetchStudent
}
