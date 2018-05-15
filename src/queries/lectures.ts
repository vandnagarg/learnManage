
import {Leture as Lecture} from './../db'
import {Sequelize} from 'sequelize'


async function fetchAll(id,id1) {
    try{
        console.log(id1)
        if(id1===-1){
            
            let lectures = await Lecture.findAll({
                where:{
                    batchId:{
                        [Sequelize.Op.eq] : id
                    }
                }
            })

            console.log(id)
            return lectures;
        }
        else{
            let lectures = await Lecture.findAll({
                where:{
                    batchId:{
                        [Sequelize.Op.eq] : id
                    },
                    id:{
                        [Sequelize.Op.eq]:id1
                    }
                }
            })
            return lectures;
        }
        

    }
    catch(err){
        console.log(err)
    }
}
async function fetchAllBatches(id){
    try{
        let batches = await Lecture.findAll({
            where:{
                teacherId:{
                    [Sequelize.Op.eq]:id
                }

            },
            
            attributes:['batchId'],            
        })
        return batches;
    }
    catch(err){
        console.log(err)
    }
}
export{
    fetchAll,fetchAllBatches
}