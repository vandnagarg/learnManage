


import {Batch} from './../db'
import {Sequelize} from 'sequelize'

async function insert(id,name){
    try{
        await Batch.create({
            id:id,
            name:name
        })
    }
    catch(err){
        console.log(err)
    }
}
async function fetchAll(id,id1) {

    try{
        if(id1==-1)
        {
            let batches = await Batch.findAll({
                where:{
                    courseId:{
                        [Sequelize.Op.eq] : id
                    }
                }
            })
            return batches;
        }
        else{
            let batches = await Batch.findAll({
                where:{
                    courseId:{
                        [Sequelize.Op.eq] : id
                    },
                    id:{
                        [Sequelize.Op.eq]:id1
                    }
                },
                
            })
           
            return batches
        }
        
        

    }
    catch(err){
        console.log(err)
    }
}

export {
    fetchAll,insert
}

