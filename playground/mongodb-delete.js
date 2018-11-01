const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (error, db) => {
    if (error) {
      return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to mongodb server')

    // db.collection('Todos')
    //   .deleteMany({
    //     text: 'eat lunch'
    //   })
    //   .then(result => {
    //     console.log('[result]', result)
    //   })

    // db.collection('Todos')
    //   .deleteOne({
    //     text: 'eat lunch'
    //   })
    //   .then(result => {
    //     console.log('[result]', result)
    //   })

    // db.collection('Todos')
    //   .findOneAndDelete({
    //     completed: false
    //   })
    //   .then(result => {
    //     console.log('[result]', result)
    //   })

    db.collection('Users')
      .deleteMany({
        name: 'Daniel'
      })
      .then(({ result }) => console.log('[deleteMany, result]', result))

    db.collection('Users')
      .findOneAndDelete({
        _id: ObjectID('5bda500497b445233fedd597')
      })
      .then(result => console.log('[findOneAndDelete, result]', result))

    // db.close()
  }
)
