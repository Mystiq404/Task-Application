const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next)=>{
//     if (req.method === 'GET'){
//         res.send('GET req are disabled')
//     }else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down. Check back again')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is op on port ' + port)
})


const Task = require('./models/task')
const User = require('./models/user')

const main = async()=>{
    const user = await User.findById('61dcbfe0c05ffdcbb0252d5e')
     await user.populate('tasks')
    console.log(user.tasks)
}

main()
// const jwt = require('jsonwebtoken')
// const myFunction = async ()=>{
//     const token = jwt.sign({ _id: 'abc123' } ,'thisismynewcourse')
//     console.log(token)

//     const data = jwt.verify(token , 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const bcrypt = require('bcryptjs')
// const myFunction = async ()=>{
//     const password = "Red12345!"
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Red12345!' , hashedPassword)
//     console.log(isMatch)
// }

// myFunction()