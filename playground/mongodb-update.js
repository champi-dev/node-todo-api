const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (error, db) => {
    if (error) {
      return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to mongodb server')

    // db.collection('Todos')
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID('5bd66fc6640e4d21edd4dcbe')
    //     },
    //     { $set: { completed: true } },
    //     { returnOriginal: false }
    //   )
    //   .then(result => console.log('[result]', result))

    db.collection('Users')
      .findOneAndUpdate(
        {
          _id: new ObjectID('5bda501c97b445233fedd59d')
        },
        {
          $set: {
            name: 'other'
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => console.log('[result]', result))

    // db.close()
  }
)
