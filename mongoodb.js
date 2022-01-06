//CRUD create, read , update, delete

// const mongodb =require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const {MongoClient , ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = ObjectId()
// console.log(id)
// console.log(id.toHexString().length)


MongoClient.connect(connectionURL , {useNewUrlParser:true} , (error , client)=>{
    if (error){
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

//CREATE DATA
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Sam',
    //     age : 18
    // },(error , result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.acknowledged)
    // })
     
    // db.collection('users').insertMany([
    //     {
    //         name:'john',
    //         age:25
    //     },
    //     {
    //         name: 'jenny',
    //         age: 21
    //     }
    // ],(error , result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
    //     else{
    //         console.log(result.acknowledged)
    //     }
    // })


    // db.collection('tasks').insertMany([
    //     {
    //         description:'cleaning',
    //         status: true
    //     },
    //     {
    //         description: 'washing',
    //         status: false
    //     },
    //     {
    //         description: 'cooking',
    //         status: true
    //     }
    // ],(error , result)=>{
    //     if(error){
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.acknowledged)
    // })



//READ DATA

    // db.collection('users').findOne({_id : ObjectId("61d5dbd3858c0458a24822c3")},(error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })


    // db.collection('users').find({age:21}).toArray((error,users)=>{
    //      console.log(users)
    //   })
    // db.collection('users').find({age:21}).count((error,users)=>{
    //      console.log(users)
    //  })

    // db.collection('tasks').findOne({_id: ObjectId("61d5dcf7c2aa871602f76b58")},(error, task)=>{
    //     if(error){
    //         console.log('Unable to find the results')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({status: true}).toArray((error,tasks)=>{
    //     if(error){
    //         console.log('Unable to find the tasks!')
    //     }
    //     console.log(tasks)
    // })


//UPDATE DATA

    // db.collection('users').updateOne({
    //     _id: ObjectId("61d5dbd3858c0458a24822c4")
    // },{
    //     $inc: {
    //         age:1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     status: false
    // },{
    //     $set:{
    //         status:true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })



//DELETE DATA

    // db.collection('users').deleteMany({
    //     age:21
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'washing'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

 })


