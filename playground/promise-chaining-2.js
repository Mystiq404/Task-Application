require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('61d728f69be3c291ce8e39cc').then((user)=>{
//     console.log(user)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const FindTaskAndDelete = async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

FindTaskAndDelete('61d74c7bb797f3f499898335' ).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
