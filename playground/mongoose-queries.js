const { ObjectID } = require('mongodb')
const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')

const id = '5bda5cf7f13d9cebd433edf8'

if (!ObjectID.isValid(id)) {
  return console.log('Id not valid')
}

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('[todos]', todos)
// })

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('[todo]', todo)
// })

// Todo.findById(id)
//   .then(todo => {
//     console.log('[todo by id]', todo)
//   })
//   .catch(e => console.log(e))

User.findById(id)
  .then(user => {
    console.log('[user by id]', user)
  })
  .catch(e => console.log(e))
