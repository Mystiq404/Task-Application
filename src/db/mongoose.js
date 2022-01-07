const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

//TASK (CHALLENGE)

// const Task = mongoose.model('Task',{
//     description : {
//         type :String,
//         trim:true,
//         required:true} ,
//     completed: {
//         type: Boolean,
//         default: false}
// })

// const task = new Task({
//     description:"Washing    clothes     ",
//     completed:true
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log('Error',error)
// })