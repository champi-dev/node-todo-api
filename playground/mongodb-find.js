const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (error, db) => {
    if (error) {
      return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to mongodb server')

    // db.collection('Todos')
    //   .find({
    //     _id: new ObjectID('5bd66c77b32298ce803dad43')
    //   })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos')
    //       console.log(JSON.stringify(docs, undefined, 2))
    //     },
    //     error => {
    //       console.log('Unable to fetch todos', error)
    //     }
    //   )

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`)
    //     },
    //     error => {
    //       console.log('Unable to fetch count', error)
    //     }
    //   )

    db.collection('Users')
      .find({
        name: 'Daniel'
      })
      .toArray()
      .then((error, users) => {
        if (error) {
          return console.log(error)
        }

        console.log(JSON.stringify(users, undefined, 2))
      })

    // db.close()
  }
)
