const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is op on port ' + port)
})


// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async()=>{
//     const user = await User.findById('61dcbfe0c05ffdcbb0252d5e')
//      await user.populate('tasks')
//     console.log(user.tasks)
// }

// main()
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