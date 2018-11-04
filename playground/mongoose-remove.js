const { ObjectID } = require('mongodb')
const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')

// Todo.deleteMany({}).then(res => console.log(res))

// Todo.findOneAndDelete({})

Todo.findByIdAndDelete('5bdd13633129a8ba94ef7eaf').then(todo => console.log(todo))
